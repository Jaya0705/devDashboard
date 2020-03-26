import {combineReducers} from "redux";
import applications from './AppReducer';


const rootreducer = combineReducers({applications});

export default rootreducer;