import React, { useEffect } from 'react';
import { Checkbox, Rating, Typography } from "@mui/material";
import { LunchDining } from '@mui/icons-material';
import { Place } from "../../places";
import styled from "styled-components";

function PlaceSection({ place }: { place: Place }) {
    const [checked, setChecked] = React.useState(false);
    const [rating, setRating] = React.useState<number | null>(1);
    
    useEffect(() => {
        if (checked) setRating(1);
        else setRating(0)
    }, [checked]);
    
    useEffect(() => {
        if (rating === null) {
            setChecked(false);
        }
    }, [rating]);
    
    return (
        <Container onClick={() => setChecked(!checked)}>
            <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
            <Label>
                <Typography style={{ fontSize: '1.2rem'}}>{place.name}</Typography>
                <Typography color="gray" style={{ fontSize: '0.8rem' }}> ({place.type})</Typography>
            </Label>
            {checked &&
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => setRating(newValue)}
                    onClick={(event) => event.stopPropagation()}
                    icon={<LunchDining />}
                    emptyIcon={<LunchDining />}
                />
            }
        </Container>
    );
}

export default PlaceSection;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    
    &:hover {
        background-color: #d1d1d1;
        cursor: pointer;
    }
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.2rem;
`
