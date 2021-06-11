
export const ADD_ENTRY = "ADD_ENTRY";
export const REMOVE_ENTRY = "REMOVE_ENTRY";

export type EntryType = {
  id: number,
  name: string,
  status: string,
  live: string,
  matchSeries: string,
  tournamentName: string,
  winningsPrizePoolAmount: number,
  bonusPrizePoolAmount: number,
}

interface AddEntry {
  type: typeof ADD_ENTRY,
  payload: {
    entry: EntryType
  }
}

interface RemoveEntry {
  type: typeof REMOVE_ENTRY,
  payload: {
    id: number
  }
}

export type EntryDispatchTypes = AddEntry | RemoveEntry;