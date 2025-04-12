import React, { useCallback, useState } from 'react';
import { groupBy, map } from 'lodash';
import { places } from "../../places";
import styled from "styled-components";
import PlaceSection from "./PlaceSection";
import { Typography, TextField, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Send, ExpandMore } from '@mui/icons-material';
import GlassCard from "../GlassCard";
import { VotesMap } from "../../types/Vote";
import { Place } from "../../types/Place";
import Firebase from "../../Firebase";
import { useSearchParams } from "react-router-dom";

function PollCard() {
    const [params] = useSearchParams();
    const id = params.get('id');
    
    const [name, setName] = useState("");
    const [votes, setVotes] = useState<VotesMap>({});
    
    const groupedPlaces = groupBy(places, (place: Place) =>
        place.location || 'Altro'
    );
    
    const Locations = map(groupedPlaces, (group, location) => (
        <Accordion defaultExpanded disableGutters>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography flex="1rem" fontWeight="bold">📍 {location}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: 0}}>
            {map(group, (place) => (
                <PlaceSection key={place.id} place={place} setVotes={setVotes}/>
            ))}
            </AccordionDetails>
        </Accordion>
    ))
    
    const vote = useCallback(() => {
        Firebase.addVote(id!, name, votes).then(() => {
            Firebase.getResults(id!).then(results => console.log(results));
        })
    }, [id, name, votes]);
    
    return (
        <GlassCard>
            <TextField
                value={name}
                onChange={e => setName(e.target.value)}
                variant="filled"
                label="Nome"
                style={{ backgroundColor: "white", borderRadius: "5px"}}
            />
            <Accordions>
                {Locations}
            </Accordions>
            <Button
                variant="contained"
                color="primary"
                onClick={vote}
                size="large"
                endIcon={<Send />}
                disabled={!name || Object.keys(votes).length === 0}
            >
                Invia
            </Button>
        </GlassCard>
    );
}

const Accordions = styled.div`
    flex: 1;
    overflow-y: auto;
    background: white;
    width: 30rem;
    max-width: 80vw;
    clip-path: inset(0 round 8px);

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 8px;
    }
`;


export default PollCard;
