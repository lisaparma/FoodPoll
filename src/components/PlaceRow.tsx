import React from 'react';
import { Checkbox, Rating, Typography } from "@mui/material";
import { LunchDining } from '@mui/icons-material';
import { Place } from "../places";
import styled from "styled-components";

function PlaceRow({ place }: { place: Place }) {
    const [checked, setChecked] = React.useState(false);
    const [rating, setRating] = React.useState<number | null>(0);
    return (
        <Container>
            <Checkbox value={checked} onChange={() => setChecked(!checked)}/>
            <Typography variant="h6">{place.name}</Typography>
            {checked &&
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                icon={<LunchDining />}
                emptyIcon={<LunchDining />}
            />
            }
        </Container>
    );
}

export default PlaceRow;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
