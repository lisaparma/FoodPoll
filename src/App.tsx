import React, { useMemo } from 'react';
import styled from "styled-components";
import PollCard from "./components/pollCard/PollCard";
import MainButtons from "./components/mainCard/MainButtons";
import backgroundImg from "./assets/food.png";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { grey, blueGrey,  } from '@mui/material/colors';

function App() {
    const pollId = new URLSearchParams(window.location.search).get('id');
    const result = new URLSearchParams(window.location.search).get('result');
    
    const CardContent = useMemo(() => {
        if (pollId && result) return (<div>Poll result</div>);
        if (pollId) return (<PollCard id={pollId} />);
        return <MainButtons />;
    }, [pollId, result]);
    
    const theme = createTheme({
        palette: {
            primary: blueGrey,
            secondary: grey
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <Page>
                <Card>
                    <Typography color="primary" fontSize="3rem" fontWeight="bold" textAlign="center">
                        Food Poll {pollId && `#${pollId}`}
                    </Typography>
                    {CardContent}
                </Card>
            </Page>
        </ThemeProvider>
    );
}

const Page = styled.div`
    background-image: url(${backgroundImg});
    background-repeat: repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 80%;
    max-width: 95%;
    gap: 1rem;

    background: rgb(73, 72, 72, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export default App;
