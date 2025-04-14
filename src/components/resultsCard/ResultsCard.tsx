import React, { useCallback, useEffect, useState } from 'react';
import { Button } from "@mui/material";
import { Refresh } from '@mui/icons-material';
import GlassCard from "../GlassCard";
import Firebase from "../../Firebase";
import { useSearchParams } from "react-router-dom";
import { places } from "../../places";
import { find, map } from 'lodash';

function ResultsCard() {
    const [params] = useSearchParams();
    const id = params.get('id');
    
    const [results, setResults] = useState<any>({});
    const [voters, setVoters] = useState<string[]>([]);
    const [error, setError] = useState("");
    
    
    const loadData = useCallback(() => {
        Firebase.getResults(id!)
            .then(results => {
                setResults(results.results)
                setVoters(results.voters);
            })
            .catch((error) => setError(error.message));
    }, [id]);
    
    useEffect(() => {
        loadData();
    }, []);
    
    return (
        <GlassCard>
            <h2 style={{ color: "white" }}>Risultati</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {map(results, (result: any) => {
                    const place = find(places, { id: result.placeId });
                    return (
                        <div key={result.placeId} style={{ color: "white" }}>
                            {place?.name}: {result.total} ({result.count} voti, media {result.avg})
                        </div>
                    )
                })}
                <div style={{ color: "white" }}>
                    Votanti: {voters.length}
                    {voters.map((voter: any) => (<p>- {voter}</p>))}
                </div>
            </div>
            
            <Button
                variant="contained"
                color="primary"
                onClick={loadData}
                size="large"
                endIcon={<Refresh />}
            />
        </GlassCard>
    );
}

export default ResultsCard;
