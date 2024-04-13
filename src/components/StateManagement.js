import { createStore } from 'redux';

// Define actions
const actionTypes = {
  UPDATE_SERVICE_STATUS: 'UPDATE_SERVICE_STATUS',
};

// Define reducer
const initialState = {
  serviceStatus: WorkflowStages.INITIATED,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SERVICE_STATUS:
      return {
        ...state,
        serviceStatus: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

// Action creators
const updateServiceStatus = (status) => ({
  type: actionTypes.UPDATE_SERVICE_STATUS,
  payload: status,
});

export { store, updateServiceStatus };
