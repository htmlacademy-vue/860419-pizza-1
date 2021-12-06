import { DOUGH_TYPES } from "./constans/doughTypes";
import { INGREDIENTS } from "./constans/ingredients";
import { SAUCES } from "./constans/sauces";
import { SIZE_TYPES } from "./constans/sizeTypes";

export const addDoughTypes = (doughTypes) => {
  return (Array.isArray(doughTypes) ? doughTypes : []).map((dough) => {
    const current = DOUGH_TYPES.find(({ name }) => name === dough.name);
    return {
      ...dough,
      type: current && current.type,
    };
  });
};

const addIngredientLatNames = (ingredients) => {
  return (Array.isArray(ingredients) ? ingredients : []).map((ingredient) => {
    const current = INGREDIENTS.find(({ name }) => name === ingredient.name);
    return {
      ...ingredient,
      nameLat: current && current.nameLat,
    };
  });
};

const addSauceValues = (sauce) => {
  return sauce.map((sauce) => {
    return {
      ...sauce,
      value: SAUCES.find(({ name }) => name === sauce.name).value,
    };
  });
};

const addSizeTypes = (sizes) => {
  return (Array.isArray(sizes) ? sizes : []).map((size) => {
    return {
      ...size,
      type: SIZE_TYPES[size.multiplier],
    };
  });
};

export default {
  addDoughTypes,
  addIngredientLatNames,
  addSauceValues,
  addSizeTypes,
};
