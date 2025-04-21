import React, { useEffect, Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Checkbox, IconButton, Rating, Typography } from "@mui/material";
import { LunchDining, InfoOutline } from '@mui/icons-material';
import styled from "styled-components";
import { Place } from "../../types/Place";
import { VotesMap } from "../../types/Vote";
import PlaceInfoDialog from "./PlaceInfoDialog";
type PlaceSectionProps = {
    place: Place;
    setVotes: Dispatch<SetStateAction<VotesMap>>;
}
function PlaceSection({ place, setVotes }: PlaceSectionProps) {
    const [checked, setChecked] = useState(false);
    const [rating, setRating] = useState<number | null>(0);
    const [openDialog, setOpenDialog] = useState(false);
    
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
    
    const onInfoClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenDialog(true);
    }, []);
    
    return (
        <Container onClick={() => setChecked(!checked)}>
            <Checkbox onChange={() => setChecked(!checked)} checked={checked} />
            <Label>
                <Typography color="primary" fontSize="1.2rem" fontWeight="bold">{place.name}</Typography>
                <IconButton size="small" onClick={onInfoClick}><InfoOutline fontSize="small"/></IconButton>
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
            {openDialog && (
                <PlaceInfoDialog place={place} open={openDialog} setOpen={setOpenDialog} />
            )}
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
        background-color: #e8e8e8;
        cursor: pointer;
    }
`;

const Label = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 0.2rem;
`
