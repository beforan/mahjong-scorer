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

const NewGame = () => {
  const [players, setPlayers] = useState({});

  const handleNameEdit = ({ target }) => {
    setPlayers({ ...players, [target.name]: target.value });
  };

  const handleStartClick = () => {
    // TODO
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
            <Input />
          </Cell>
          <Cell area="north" center>
            <Typography variant="h4">North:</Typography>
            <Input />
          </Cell>
          <Cell area="south" center>
            <Typography variant="h4">South:</Typography>
            <Input />
          </Cell>
          <Cell area="west" center>
            <Typography variant="h4">West:</Typography>
            <Input />
          </Cell>
        </Grid>
        <Button mt={3}>Start Game!</Button>
      </Box>
    </Container>
  );
};

export default NewGame;
