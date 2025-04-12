import React, { ReactNode } from 'react';
import styled from "styled-components";
import { Typography, useTheme } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function GlassCard({ children }: { children: ReactNode }) {
    const [params] = useSearchParams();
    const id = params.get('id');
    
    const theme = useTheme();
    
    return (
        <Card>
            <Title $borderColor={theme.palette.primary.main}>
                <Typography variant="h3" color="white">Food Poll</Typography>
                {id && <Typography fontSize="1.5rem" color={"secondary"}>#{id}</Typography>}
            </Title>
            {children}
        </Card>
    );
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    padding: 2rem;
    max-height: 90%;
    max-width: 95%;
    gap: 1rem;
    user-select: none;

    background: rgb(73, 72, 72, 0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div<{ $borderColor: string }>`
    display: flex;
    flex-direction: column;
    align-self: center;
    place-items: center;
    
    > h3 {
        font-size: 3rem;
        font-weight: bold;
        text-shadow: 2px 3px 0 ${({ $borderColor }) => $borderColor};
    }
    > p {
        line-height: 1;
    }
`;


export default GlassCard;
