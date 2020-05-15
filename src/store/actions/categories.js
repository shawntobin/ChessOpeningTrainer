export const SELECT_CATEGORY = "SELECT_CATEGORY";

import { fetchOpenings } from "../../utils/fetchOpenings";

export const selectCategory = category => {
  return async dispatch => {
    const openingList = await fetchOpenings(
      category[0].volume,
      category[0].name,
      category[0].movesFilter
    );

    dispatch({ type: SELECT_CATEGORY, id: openingList });
  };
};
