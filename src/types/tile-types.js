// Types allow us to reason at a top level
// about what other properties a tile might have

export const types = {
  Minor: "mahjong/types/minor",
  Major: "mahjong/types/major",
  Honour: "mahjong/types/honour",
  Bonus: "mahjong/types/bonus"
};

// Suits provide further information on major/minor tiles
export const suits = {
  Bamboo: "mahjong/suits/bamboo",
  Circles: "mahjong/suits/circles",
  Characters: "mahjong/suits/characters"
};

// The type of honour tile affects valid values
export const honour = {
  Dragon: "mahjong/honour/dragon",
  Wind: "mahjong/honour/wind"
};

// Bonus tile types are used only for grouping
export const bonus = {
  Flower: "mahjong/bonus/flower",
  Season: "mahjong/bonus/season"
};

// valid values for the types (or more granular) that affect that
export const values = {
  [types.Minor]: [2, 3, 4, 5, 6, 7, 8],
  [types.Major]: [1, 9],
  [types.Bonus]: [1, 2, 3, 4],
  [honour.Dragon]: ["Red", "Green", "White"],
  [honour.Wind]: ["East", "South", "West", "North"]
};
