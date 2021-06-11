import { MockyDispatchTypes, MockyType, MOCKY_SUCCESS, MOCKY_FAIL, MOCKY_LOADING } from "../actions/MockyActionTypes";

interface MockyState {
  loading: boolean,
  mockies: MockyType[],
  error: string | null,
}

const defaultState: MockyState = {
  loading: false,
  mockies: [],
  error: null
}

const mockyReducer = (state: MockyState = defaultState, action: MockyDispatchTypes): MockyState => {
  switch(action.type) {
    case MOCKY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case MOCKY_SUCCESS:
      return {
        ...state,
        loading: false,
        mockies: action.payload.mockies
      }
    case MOCKY_LOADING:
      return {
        ...state,
        loading: true,
        mockies: [],
        error: null
      }
    default:
      return state;
  }
}

export default mockyReducer;