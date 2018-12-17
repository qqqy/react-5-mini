import reducer from './ducks/countertest';
import { createStore } from 'redux';

const store = createStore(reducer);

console.log(store)

export default store;