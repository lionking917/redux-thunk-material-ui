import axios from "axios";
import { Dispatch } from "redux";
import { MockyDispatchTypes, MOCKY_SUCCESS, MOCKY_FAIL, MOCKY_LOADING } from "./MockyActionTypes";

export const GetMockies = () => async (dispatch: Dispatch<MockyDispatchTypes>) => {
  try {
    dispatch({
      type: MOCKY_LOADING
    });

    const res = await axios.get(process.env.REACT_APP_MOCKY_URL || '');

    dispatch({
      type: MOCKY_SUCCESS,
      payload: {
        mockies: res.data
      }
    });
  } catch (e) {
    dispatch({
      type: MOCKY_FAIL,
      payload: {
        error: e.message
      }
    });
  }
};