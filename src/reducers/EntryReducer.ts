import { EntryDispatchTypes, EntryType, ADD_ENTRY, REMOVE_ENTRY } from "../actions/EntryActionTypes";

interface EntryState {
  entries: EntryType[]
}

const defaultState: EntryState = {
  entries: []
}

const entryReducer = (state: EntryState = defaultState, action: EntryDispatchTypes): EntryState => {
  switch(action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        entries: [
          ...state.entries,
          action.payload.entry 
        ]
      }
    case REMOVE_ENTRY:
      const tmpEntries = state.entries.filter((entry: EntryType) => entry.id !== action.payload.id)
      return {
        ...state,
        entries: tmpEntries
      }
    default:
      return state;
  }
}

export default entryReducer;