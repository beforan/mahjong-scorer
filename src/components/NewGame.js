import React, { useState } from "react";
import {
  Box,
  Alert,
  Grid as Container,
  Typography,
  Input,
  Button
} from "@smooth-ui/core-sc";
import { InfoCircle } from "styled-icons/fa-solid";
import { Grid, Cell } from "styled-css-grid";

const NewGame = ({ onStartNewGameClick }) => {
  const [players, setPlayers] = useState({});

  const handleNameEdit = ({ target }) => {
    setPlayers({ ...players, [target.name]: target.value });
  };

  const handleStartClick = () => {
    const { E, N, W, S } = players;
    onStartNewGameClick([E, N, W, S]);
  };

  return (
    <Container>
      <Box display="flex" mt={3} flexDirection="column">
        <Alert variant="info">
          <InfoCircle size="1em" /> You don't currently have a game in progress.
        </Alert>

        <Typography variant="h2">Setup a new game</Typography>

        <Typography variant="h4">Enter Player names and order</Typography>

        <Alert variant="info" py={0}>
          <ul>
            <li>East goes first</li>
            <li>Play is anti-clockwise</li>
          </ul>
        </Alert>

        <Grid
          areas={["east east", "north south", "west west"]}
          columns="1fr 1fr"
        >
          <Cell area="east" center>
            <Typography variant="h4">East:</Typography>
            <Input
              name="E"
              value={players.E}
              onChange={handleNameEdit}
              tabIndex={1}
            />
          </Cell>
          <Cell area="north" center>
            <Typography variant="h4">North:</Typography>
            <Input
              name="N"
              value={players.N}
              onChange={handleNameEdit}
              tabIndex={2}
            />
          </Cell>
          <Cell area="south" center>
            <Typography variant="h4">South:</Typography>
            <Input
              name="S"
              value={players.S}
              onChange={handleNameEdit}
              tabIndex={4}
            />
          </Cell>
          <Cell area="west" center>
            <Typography variant="h4">West:</Typography>
            <Input
              name="W"
              value={players.W}
              onChange={handleNameEdit}
              tabIndex={3}
            />
          </Cell>
        </Grid>
        <Button type="submit" mt={3} onClick={handleStartClick} tabIndex={5}>
          Start Game!
        </Button>
      </Box>
    </Container>
  );
};

export default NewGame;
