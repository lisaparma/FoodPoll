import React, { useState } from 'react';
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GlassCard from "../GlassCard";
import Firebase from "../../Firebase";

function MainButtons() {
    const navigate = useNavigate();
    
    const [pollId, setPollId] = useState("");
    const [error, setError] = useState("");
    
    const newPoll = () => {
        Firebase.createPoll()
            .then((id) => navigate(`/${id}`))
            .catch((error) => setError(error.message));
    }
    
    const answerPoll = () => navigate(`/${pollId}`);
    
    const resultsPoll = () => navigate(`/${pollId}/results`);

    return (
        <GlassCard error={error} setError={setError}>
            <Button onClick={newPoll} variant="contained" size="large">Nuovo Poll</Button>
            <Box>
                <Typography color="white">Il poll esiste già?</Typography>
                <TextField
                    value={pollId}
                    onChange={e => setPollId(e.target.value)}
                    variant="filled"
                    label="Poll id"
                    size="small"
                    color="secondary"
                    style={{ backgroundColor: "white", borderRadius: "5px", width: "100%" }}
                />
                <div style={{ display: "flex", gap: '0.5rem' }}>
                    <Button
                        onClick={answerPoll}
                        variant="contained"
                        color="secondary"
                        disabled={pollId.length === 0}
                    >
                        Rispondi
                    </Button>
                    <Button
                        onClick={resultsPoll}
                        variant="contained"
                        color="secondary"
                        disabled={pollId.length === 0}
                    >
                        Risultati
                    </Button>
                </div>
            </Box>
        </GlassCard>
    );
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid white;
    padding-top: 1rem;
    gap: 0.5rem
`;


export default MainButtons;
