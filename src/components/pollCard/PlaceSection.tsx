import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { Checkbox, Rating, Typography } from "@mui/material";
import { LunchDining } from '@mui/icons-material';
import styled from "styled-components";
import { Place } from "../../types/Place";
import { VotesMap } from "../../types/Vote";
type PlaceSectionProps = {
    place: Place;
    setVotes: Dispatch<SetStateAction<VotesMap>>;
}
function PlaceSection({ place, setVotes }: PlaceSectionProps) {
    const [checked, setChecked] = React.useState(false);
    const [rating, setRating] = React.useState<number | null>(0);
    
    useEffect(() => {
        if (checked) setRating(1);
        else setRating(0)
    }, [checked]);
    
    useEffect(() => {
        if (rating === null) setChecked(false);
        else if (rating === 0) {
            setVotes((prevVotes : VotesMap): VotesMap => {
                const newVotes = { ...prevVotes };
                delete newVotes[place.id];
                return newVotes;
            });
            setChecked(false);
        } else if (rating > 0) {
            setVotes((prevVotes : VotesMap): VotesMap => ({
                ...prevVotes,
                [place.id]: rating
            }));
        }
    }, [rating]);
    
    return (
        <Container onClick={() => setChecked(!checked)}>
            <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
            <Label>
                <Typography color="primary" fontSize="1.2rem" fontWeight="bold">{place.name}</Typography>
                <Typography color="gray" fontSize="0.8rem"> ({place.type})</Typography>
            </Label>
            {checked &&
                <Rating
                    max={3}
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
    padding: 0 0.5rem;
    
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
