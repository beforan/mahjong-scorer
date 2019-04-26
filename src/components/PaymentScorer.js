import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Typography,
  Select,
  Grid as Container
} from "@smooth-ui/core-sc";
import { calculatePayments } from "../services/payment-scoring";
import { Grid } from "styled-css-grid";
import ScoreSheet from "./ScoreSheet";

const PaymentScorer = () => {
  const [mahjong, setMahjong] = useState(1);
  const [scores, setScores] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [results, setResults] = useState([]);

  const handleMahjongChange = ({ target: { value } }) =>
    setMahjong(parseInt(value));
  const handleScoreChange = ({ target: { name, value } }) => {
    setScores({ ...scores, [name]: value });
  };

  useEffect(() => {
    setResults(
      calculatePayments(mahjong, [0, 1, 2, 3].map(i => scores[i] || 0))
    );
  }, [mahjong, scores]);

  const inputs = [];
  ["East", "South", "West", "North"].forEach((v, i) => {
    inputs.push([
      <Typography key={v} textAlign="right">
        {v}
      </Typography>,
      <Input
        key={i}
        type="number"
        placeholder={v}
        value={scores[i]}
        name={i}
        onChange={handleScoreChange}
        autoComplete="off"
      />
    ]);
  });

  return (
    <Container>
      <Box display="flex" flexDirection="column">
        <Typography variant="h4">Enter player scores</Typography>
        <Box p={1} width={0.6}>
          <Grid columns="1fr 2fr">
            <Typography textAlign="right">Winner</Typography>
            <Select control value={mahjong} onChange={handleMahjongChange}>
              <option value={1}>East</option>
              <option value={2}>South</option>
              <option value={3}>West</option>
              <option value={4}>North</option>
            </Select>
            {inputs}
          </Grid>
        </Box>

        <ScoreSheet results={results} />
      </Box>
    </Container>
  );
};

export default PaymentScorer;
