import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers"

const composeCreateStore = compose(
    applyMiddleware(thunk)
    // window.devToolsExtension && window.devToolsExtension()
)(createStore);
function configureStore(initialState={}) {
    const store = composeCreateStore(reducers,initialState);
    return store;
}
export default configureStore;