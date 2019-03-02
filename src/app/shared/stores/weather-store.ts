
export let initialState = [];

export const weather = (state = initialState, { type, payload}) => {
    switch (type) {
      case 'ADD_WEATHER':
        return [...state, payload];
      default:
        return state;
    }
};

export const currentWeather = (state = null, { type, payload}) => {
  switch (type) {
    case 'SET_CURRENT_WEATHER':
      return payload;
    default:
      return state;
  }
};
