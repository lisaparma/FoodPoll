import React from 'react';
import { groupBy, map } from 'lodash';
import { Place, places } from "../../places";
import styled from "styled-components";
import PlaceSection from "./PlaceSection";
import { Typography, TextField, Button } from "@mui/material";
import { Send } from '@mui/icons-material';

function PollCard({ id }: { id: string }) {
    const [name, setName] = React.useState("");
    
    const groupedPlaces = groupBy(places, (place: Place) =>
        place.location || 'Senza posizione'
    );
    
    const Locations = map(groupedPlaces, (group, location) => (
        <div key={location}>
            <Typography style={{ fontSize: '1rem' }}>📍 {location}</Typography>
            {map(group, (place) => (
                <PlaceSection key={place.id} place={place} />
            ))}
        </div>
    ))
    
    return (
        <>
            <TextField
                value={name}
                onChange={e => setName(e.target.value)}
                variant="filled"
                label="Nome"
                style={{ backgroundColor: "white", borderRadius: "5px"}}
            />
            <Card>
                {Locations}
            </Card>
            <Button
                variant="contained"
                color="primary"
                onClick={() => setName("")}
                size="large"
                endIcon={<Send />}
            >
                Invia
            </Button>
        </>
    );
}

const Card = styled.div`
    display: flex;
    flex: 1;
    overflow-y: auto;
    flex-direction: column;
    padding: 0.5rem;
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
