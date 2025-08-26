// this component will create selector hooks for each state property in the store
// so you can use them like store.use.propertyName() to get the value of that property
// and it will only re-render the component when that property changes

const createSelectors = (store) => {
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => store((s) => s[k]);
  }
  return store;
};

export default createSelectors;
