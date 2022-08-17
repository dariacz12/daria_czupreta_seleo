import * as types from "../people/types";

export const setFilterValue = (payload) => ({
  type: types.SET_FILTER_VALUE,
  payload: payload,
});
