const initialState = {
  colleagues: [
    {
      id: 1,
      name: 'Mike',
      coffee: 0
    },
    {
      id: 2,
      name: 'Jake',
      coffee: 0
    },
    {
      id: 3,
      name: 'Jenn',
      coffee: 0
    }
  ]
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_ADD':
      const name = action.name;
      const count = action.count;

      const newC = state.colleagues.map(c => {
        if (c.name === name) {
          return {
            ...c,
            coffee: c.coffee + count
          };
        } else {
          return c;
        }
      });

      return { ...state, colleagues: newC };
    default:
      return state;
  }
};

export default coffeeReducer;
