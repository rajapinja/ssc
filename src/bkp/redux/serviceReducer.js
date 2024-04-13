// reducers/serviceReducer.js

const initialState = {
    services: [],
    loading: false,
    error: null,
  };
  
  const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_SERVICES_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'FETCH_SERVICES_SUCCESS':
        return {
          ...state,
          loading: false,
          services: action.payload,
        };
      case 'FETCH_SERVICES_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      // Add more cases for other actions related to services
      default:
        return state;
    }
  };
  
  export default serviceReducer;
  