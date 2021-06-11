import { combineReducers } from "redux";
import mockyReducer  from "./MockyReducer";
import entryReducer  from "./EntryReducer";

const RootReducer = combineReducers({
    mocky: mockyReducer,
    entry: entryReducer
});

export default RootReducer;