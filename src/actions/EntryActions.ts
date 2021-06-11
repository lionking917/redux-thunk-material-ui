import axios from "axios";
import { Dispatch } from "redux";
import { EntryDispatchTypes, ADD_ENTRY, REMOVE_ENTRY, EntryType } from "./EntryActionTypes";

export const AddEntry = (entry: EntryType) => async (dispatch: Dispatch<EntryDispatchTypes>) => {
  dispatch({
    type: ADD_ENTRY,
    payload: {
      entry
    }
  });
};

export const RemoveEntry = (id: number) => async (dispatch: Dispatch<EntryDispatchTypes>) => {
  dispatch({
    type: REMOVE_ENTRY,
    payload: {
      id
    }
  });
};