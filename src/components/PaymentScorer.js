import React, { useState, useEffect } from "react";
import {
  Box,
  Input,
  Typography,
  Radio,
  FormCheck,
  FormCheckLabel
} from "@smooth-ui/core-sc";
import { calculatePayments } from "../services/payment-scoring";
import { Grid } from "styled-css-grid";

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

  useEffect(() => console.log(results), [results]);

  const winds = ["East", "South", "West", "North"];
  const radios = [];
  const inputs = [];
  winds.forEach((v, i) => {
    radios.push(
      <FormCheck key={v}>
        <Radio
          id={`mahjong${v}`}
          name="mahjongWind"
          value={"" + (i + 1)}
          checked={i + 1 === mahjong}
          onChange={handleMahjongChange}
        />
        <FormCheckLabel htmlFor={`mahjong${v}`}>{v}</FormCheckLabel>
      </FormCheck>
    );

    inputs.push([
      <Typography key={v}>{v}</Typography>,
      <Input
        key={i}
        type="number"
        placeholder={v}
        value={scores[i]}
        name={i}
        onChange={handleScoreChange}
      />
    ]);
  });

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h4">Enter player scores</Typography>
      <Box>
        <Typography>Mahjong:</Typography>
        {radios}
      </Box>
      <Box p={1}>
        <Grid columns="1fr 2fr">{inputs}</Grid>
      </Box>

      <table>
        <thead>
          <tr>
            <th>East</th>
            <th>South</th>
            <th>West</th>
            <th>North</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3, 4].map(i => (
            <tr>
              {results.map(r => (
                <td>
                  <Typography fontWeight={r.mahjong ? "bold" : "normal"}>
                    {r.ledger[i] || "-"}
                  </Typography>
                </td>
              ))}
            </tr>
          ))}
          <tr>
            {results.map(r => (
              <td>
                <Typography
                  borderTop={1}
                  borderColor="black"
                  fontWeight={r.mahjong ? "bold" : "normal"}
                >
                  {r.total}
                </Typography>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default PaymentScorer;
