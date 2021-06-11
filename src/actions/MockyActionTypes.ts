export const MOCKY_LOADING = "MOCKY_LOADING";
export const MOCKY_FAIL = "MOCKY_FAIL";
export const MOCKY_SUCCESS = "MOCKY_SUCCESS";

type SportType = {
  sportID: string,
  name: string,
  abbreviation: string,
  imageUrl: string
}

type TournamentType = {
  tournamentID: string,
  name: string,
  stage: string
}

type PrizePoolsType = {
  winningsPrizePoolAmount: number,
  bonusPrizePoolAmount: number
}

export type MockyType = {
  name: string,
  eventID: string,
  eventStatus: string,
  goLiveAt: string,
  sport: SportType,
  tournament: TournamentType,
  prizePools: PrizePoolsType,
  matchSeries: string
}

interface MockyLoading {
  type: typeof MOCKY_LOADING
}

interface MockyFail {
  type: typeof MOCKY_FAIL,
  payload: {
    error: string
  }
}

interface MockySuccess {
  type: typeof MOCKY_SUCCESS,
  payload: {
    mockies: MockyType[]
  }
}

export type MockyDispatchTypes = MockyLoading | MockyFail | MockySuccess;