/**
 * Calculate the inter-player payments, given a round's scores,
 * returning the record of payments and the final results.
 *
 * @param {number} mahjong The number of the wind who declared Mahjong
 * @param {Array<number>} scores the scores in wind order
 */
export const calculatePayments = (mahjong, scores) => {
  if (![1, 2, 3, 4].includes(mahjong))
    throw new Error(
      "1st argument index must indicate the index from 1 to 4 that declared Mahjong"
    );

  const players = Array(4)
    .fill(i => new Player(i))
    .map((x, i) => x(i + 1));

  // Everyone except the mahjong player pays out
  players.forEach(payer => {
    if (payer.wind !== mahjong) {
      // pay every player except ourselves
      players.forEach(payee => {
        if (payee.wind !== payer.wind) payer.pay(payee, scores[payee.wind - 1]);
      });
    }
  });

  const results = Array(4)
    .fill(i => ({
      score: scores[i],
      ledger: players[i].ledger,
      mahjong: players[i].wind === mahjong,
      total: players[i].ledger.reduce((a, v) => a + v)
    }))
    .map((x, i) => x(i));

  return results;
};

class Player {
  constructor(wind) {
    this._wind = wind;

    this._ledger = [];
  }

  get wind() {
    return this._wind;
  }
  receive(payment) {
    this._ledger.push(payment);
  }

  pay(target, payment) {
    if (this._wind === 1 || target.wind === 1) payment *= 2;
    this._ledger.push(-payment);
    target.receive(+payment);
  }

  get ledger() {
    return [...this._ledger];
  }
}
