import { legacy_createStore as createStore } from 'redux';
import reducer from '../Reducer/reducer';

const store = createStore(reducer);
export default store;