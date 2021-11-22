import {createStore} from "redux";
import rootReducer from "../RootReducer/reducer";

const store = createStore(rootReducer);

export default store;