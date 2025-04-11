import React from 'react';
import styled from "styled-components";
import PollCard from "./components/pollCard/PollCard";
import MainButtons from "./components/mainCard/MainButtons";
import backgroundImg from "./assets/food.png";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, blueGrey,  } from '@mui/material/colors';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
    const theme = createTheme({
        palette: {
            primary: blueGrey,
            secondary: grey
        },
    });
    
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Page>
                    <Routes>
                        <Route path="/" element={<MainButtons />} />
                        <Route path="/poll" element={<PollCard />} />
                    </Routes>
                </Page>
            </HashRouter>
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

export const Card = styled.div`
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
