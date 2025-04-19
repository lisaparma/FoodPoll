import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import { Refresh, Poll, HowToReg } from '@mui/icons-material';
import GlassCard from "../GlassCard";
import Firebase from "../../Firebase";
import { useParams } from "react-router-dom";
import { places } from "../../places";
import { find, map } from 'lodash';
import styled from "styled-components";

function ResultsCard() {
    const { pollId } = useParams();
    
    const [results, setResults] = useState<any>({});
    const [voters, setVoters] = useState<string[]>([]);
    const [error, setError] = useState("");
    
    
    const loadData = useCallback(() => {
        Firebase.getResults(pollId!)
            .then(results => {
                setResults(results.results)
                setVoters(results.voters);
            })
            .catch((error) => setError(error.message));
    }, [pollId]);
    
    useEffect(() => {
        loadData();
    }, []);
    
    const ResultsRows = useMemo(() => map(results, (row) => {
        const place = find(places, { id: row.placeId });
        return (
            <TableRow
                key={row.placeId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" style={{ fontWeight: 'bold'}}>
                    {place?.name}
                </TableCell>
                <TableCell align="right">{Number(row.avg).toFixed(1)}</TableCell>
                <TableCell align="right">{row.count}/{voters.length}</TableCell>
            </TableRow>
        )
    }), [results, voters.length]);
    
    return (
        <GlassCard error={error} setError={setError}>
            <div style={{ display: "flex", gap: "0.5rem", color: 'white', alignItems: "center" }}>
                <Poll/>
                <Typography variant="h2" color="white" fontSize="1.5rem" fontWeight="bold">Risultati</Typography>
            </div>
            <Box>
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bold'}}>Posto</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold'}}>Media</TableCell>
                                <TableCell align="right" style={{ fontWeight: 'bold'}}>N. di votanti</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ResultsRows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Voters>
                <div style={{ display: "flex" , gap: "0.5rem", color: 'white', alignItems: "center" }}>
                    <HowToReg/>
                    <Typography variant="h2" color="white" fontSize="1.5rem" fontWeight="bold">Votanti</Typography>
                </div>
                <Typography color="white">{map(voters, (voter: any) => (voter)).join(', ')}</Typography>
            </Voters>
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

const Box = styled.div`
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

const Voters = styled.div`
    display: flex;
    flex-direction: column;
`;

export default ResultsCard;
