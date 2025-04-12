import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { VotesMap } from "./types/Vote";

class Firebase {
    
    private static instance: Firebase;
    
    private app: FirebaseApp;
    
    private db;
    
    private constructor() {
        this.app = initializeApp({
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID
        });
        
        this.db = getFirestore(this.app);
    }
    
    public static getInstance(): Firebase {
        if (!Firebase.instance) {
            Firebase.instance = new Firebase();
        }
        return Firebase.instance;
    }
    
    public createPoll(): Promise<string> {
        return addDoc(collection(this.db, "polls"), {
            createdAt: new Date()
        })
            .then((docRef) => {
                console.log("Poll created with ID: ", docRef.id);
                return docRef.id;
            })
            .catch((error) => {
                console.error("Error adding poll: ", error);
                return Promise.reject(error);
            });
    }
    
    public addVote(
        pollId: string,
        voterName: string,
        votes: VotesMap
    ): Promise<string> {
        const pollDocRef = doc(this.db, "polls", pollId);
        
        const voterId = crypto.randomUUID();
        
        return getDoc(pollDocRef)
            .then(snapshot => {
                const pollData = snapshot.data();
                const existingVoters = pollData?.voters || {};
                
                const updatedVoters = {
                    ...existingVoters,
                    [voterId]: {
                        name: voterName,
                        votes,
                        createdAt: new Date()
                    }
                };
                
                return updateDoc(pollDocRef, { voters: updatedVoters })
                    .then(() => voterId);
            })
            .catch((error) => {
                console.error("Errore nell'aggiunta dei voti:", error);
                return Promise.reject(error);
            });
    }
    
    public getResults(pollId: string): Promise<{
        results: { placeId: string; total: number; count: number; avg: number }[];
        voters: string[];
    }> {
        const pollDocRef = doc(this.db, "polls", pollId);
        
        return getDoc(pollDocRef)
            .then(snapshot => {
                if (!snapshot.exists()) {
                    return Promise.reject(new Error("Sondaggio non trovato"));
                }
                
                const data = snapshot.data();
                const votersMap = data?.voters || {};
                
                const stats: Record<string, { total: number; count: number }> = [];
                
                const voterList: { name: string; createdAt: Date }[] = [];
                
                Object.values(votersMap).forEach((voter: any) => {
                    if (voter.name && voter.createdAt) {
                        voterList.push({
                            name: voter.name,
                            createdAt: new Date(voter.createdAt.seconds ? voter.createdAt.seconds * 1000 : voter.createdAt)
                        });
                    }
                    
                    const votes = voter.votes;
                    Object.entries(votes).forEach(([placeId, score]) => {
                        if (!stats[placeId]) {
                            stats[placeId] = { total: 0, count: 0 };
                        }
                        stats[placeId].total += score as number;
                        stats[placeId].count += 1;
                    });
                });
                
                voterList.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
                
                const results = Object.entries(stats)
                    .map(([placeId, { total, count }]) => ({
                        placeId,
                        total,
                        count,
                        avg: total / count
                    }))
                    .sort((a, b) => b.avg - a.avg);
                
                return {
                    results,
                    voters: voterList.map(v => v.name)
                };
            })
            .catch(error => {
                console.error("Errore nel calcolo dei risultati:", error);
                return Promise.reject(error);
            });
    }
}

export default Firebase.getInstance();