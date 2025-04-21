import React, { Dispatch, MouseEvent, SetStateAction, useCallback } from 'react';
import {
    Link,
    ListItem,
    ListItemText,
    List,
    DialogTitle,
    DialogContentText,
    DialogContent,
    Dialog,
    DialogActions,
    Button
} from '@mui/material';
import { RestaurantMenu, Map, MenuBook, Language } from '@mui/icons-material';
import { Place } from "../../types/Place";

export default function PlaceInfoDialog({ place, open, setOpen }: { place: Place, open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
    
    const handleClose = useCallback((ev: MouseEvent) => {
        ev.stopPropagation();
        setOpen(false);
    }, [setOpen]);
    
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                {place.name}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <List dense disablePadding>
                        <ListItem disableGutters style={{ gap: '0.5rem' }}>
                            <RestaurantMenu />
                            <ListItemText>{place.type}</ListItemText>
                        </ListItem>
                        {place.website &&
                            <ListItem disableGutters style={{ gap: '0.5rem' }}>
                                <Language />
                                <ListItemText><Link href={place.website} target="_blank">Sito web</Link></ListItemText>
                            </ListItem>
                        }
                        {place.menu &&
                            <ListItem disableGutters style={{ gap: '0.5rem' }}>
                                <MenuBook />
                                <ListItemText><Link href={place.menu} target="_blank">Menu</Link></ListItemText>
                            </ListItem>
                        }
                        {place.location &&
                            <ListItem disableGutters style={{ gap: '0.5rem' }}>
                                <Map />
                                <ListItemText><Link href={place.location} target="_blank">Posizione</Link></ListItemText>
                            </ListItem>
                        }
                    </List>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}