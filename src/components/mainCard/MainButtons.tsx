import React, { useState } from 'react';
import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";

function MainButtons() {
    const [pollId, setPollId] = useState("");
    
    const newPoll = () => window.location.href = '/?id=123'
    
    const answerPoll = () => window.location.href = `/?id=${pollId}`
    
    const resultsPoll = () => window.location.href = `/?id=${pollId}&result=true`

    return (
        <>
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
        </>
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
