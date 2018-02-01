import * as fromActions from './actions';

export const initialState = {
  data: []
};

export function reducer(state = initialState, action: {type: string, payload: any}) {
  switch(action.type) {
    case fromActions.ADD_TODO_ACTION: {
      return {...state, data: [...state.data, action.payload]};
    }
    default: {
      return state;
    }
  }
}
