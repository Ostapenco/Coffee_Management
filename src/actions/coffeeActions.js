export const addCoffee = (name, count) => {
  return {
    type: 'CLICK_ADD',
    name: name,
    count: count
  };
};
