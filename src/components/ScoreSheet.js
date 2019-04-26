/**
 * This is currently just a single round score sheet
 * to support the Payment Scorer.
 * It may expand into a Game Tracking sheet later
 */

import React from "react";
import styled from "styled-components";
import { Typography, Box } from "@smooth-ui/core-sc";

const borderStyle = "1px solid black";

const StyledTable = styled("table")`
  border-collapse: collapse;

  td + td {
    border-left: ${borderStyle};
  }

  th {
    border-bottom: ${borderStyle};
  }

  tr:last-child {
    border-top: ${borderStyle};
  }
`;

const ScoreSheet = ({ results }) => (
  <StyledTable>
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
        <tr key={i}>
          {results.map((r, ri) => (
            <td key={ri}>
              <Box width={1} textAlign="right">
                <Typography p={1} fontWeight={r.mahjong ? "bold" : "normal"}>
                  {(r.ledger[i] && r.ledger[i] > 0
                    ? `+${r.ledger[i]}`
                    : r.ledger[i]) || "-"}
                </Typography>
              </Box>
            </td>
          ))}
        </tr>
      ))}
      <tr>
        {results.map((r, ri) => (
          <td key={ri}>
            <Box width={1} textAlign="right">
              <Typography p={1} fontWeight={r.mahjong ? "bold" : "normal"}>
                {r.total}
              </Typography>
            </Box>
          </td>
        ))}
      </tr>
    </tbody>
  </StyledTable>
);

export default ScoreSheet;
