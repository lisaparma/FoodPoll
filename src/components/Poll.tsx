import React from 'react';
import { map } from 'lodash';
import { Place, places } from "../places";
import PlaceRow from "./PlaceRow";
import styled from "styled-components";

function Poll() {
    
    const Sections = map(places, (place: Place) => (<PlaceRow place={place} /> ))
    
    return (
        <Container>
            {Sections}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.5rem;
    background-color: #e5e7e9;
    border-radius: 5px;
`;


export default Poll;
