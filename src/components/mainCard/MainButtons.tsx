import React, { useState } from 'react';
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";
import { Card } from "../../App";
import { useNavigate } from "react-router-dom";

function MainButtons() {
    
    const navigate = useNavigate();
    
    const [pollId, setPollId] = useState("");
    
    const newPoll = () => navigate('/poll?id=123');
    
    const answerPoll = () => navigate(`/poll?id=${pollId}`);
    
    const resultsPoll = () =>navigate(`/result?id=${pollId}`);

    return (
        <Card>
            <Typography color="primary" fontSize="3rem" fontWeight="bold" textAlign="center">
                Food Poll
            </Typography>
            <Button onClick={newPoll} variant="contained" size="large">Nuovo Poll</Button>
            <Box>
                <Typography color="white">Esiste già un poll?</Typography>
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
        </Card>
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
