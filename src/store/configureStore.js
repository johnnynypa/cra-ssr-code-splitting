import { createStore } from 'redux';

import reducers from './reducers/rootReducer';

export const initStore = () => {
	return createStore(reducers
  )
};
