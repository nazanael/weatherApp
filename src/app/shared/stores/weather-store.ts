
export let initialState = [];

export const weather = (state = initialState, { type, payload}) => {
    switch (type) {
      case 'ADD_WEATHER':
        console.log(state);
        console.log(payload);
        return [...state, payload];
      default:
        return state;
    }
};
