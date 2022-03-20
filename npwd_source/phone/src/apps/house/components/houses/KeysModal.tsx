import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { PropertiesInt } from '@typings/house';
import { useSelectedHouse } from '../../hooks/state';
import makeStyles from '@mui/styles/makeStyles';

import React from 'react';

const useStyles = makeStyles({

    scrollBar: {
      '&::-webkit-scrollbar': {
        width: '0.1em',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#0d0d0d',
      },
    },
  });


const KeysModal = ({ setPageType }) => {
    const [selectedHouse, setselectedHouse] = useSelectedHouse();
    const classes = useStyles();

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        color: '#dedede',
      }}
    >
      Keys
    </Box>
    <Divider sx={{ padding: '8px' }} />

    <List
      className={classes.scrollBar}
      disablePadding
      sx={{ maxHeight: '150px', overflow: 'auto' }}
    >
      {selectedHouse.keyholders.map((citizen) => (
        <ListItem divider>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            {citizen.length > 25 ? (
              <Typography>{citizen.slice(0, 25) + '...'}</Typography>
            ) : (
              <Typography>{citizen}</Typography>
            )}
            <IconButton sx={{ margin: '0px', padding: '0px' }}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </ListItem>
      ))}
    </List>
    <Box
      sx={{
        marginY: '25px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Button
        variant="outlined"
        onClick={() => {
          setPageType('home');
        }}
        color="error"
        size="large"
        sx={{ width: '150px', height: '45px' }}
      >
        Return
      </Button>
    </Box>
  </>
  );
};

export default KeysModal;
