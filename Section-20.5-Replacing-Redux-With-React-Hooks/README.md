## About this section
This section is about replacing Redux, application-wide state management system with React's Context API and React Hooks. There is nothing wrong with Redux, but if replaced, there is no need for extra third-party library in application anymore.

What's more important, this course is more about diving into React Hooks and Context API to see, what are they capable of.

### Why would you Replace Redux
Replacing Redux may be a thing, when you want to only stick to the tools, that are given to you by React, and don't want to include the react-redux libraries - that would result in smaller bundle and less code shipped. However, when the scope of application is big, these extra libraries may not change much in the end.

## Alternative 1: Context API
We are simply changing all store features of Redux with use of the useContext and ContextProvider, given to us by React
```javascript
export const ProductsContext = createContext({
  products: [],
  toggleFavourite: (id) => {},
});
```
```javascript
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavourite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
```
```javascript
const productList = useContext(ProductsContext).products;
```
It all looks great, but what are downsides of this approach?


### Downsides of ContextAPI
One huge downside is even mentioned by React team member - useContext is great for low-frequency updates, but not for high-frequency ones. If you have data that changes rarely, like authentication status, that is fine to be covered with contextAPI - it will work great for theming the page and so on. We created, favourite status with it, which may change rather often, and ContextAPI is simply not optimized for that.

## Alternative 2: Custom Hooks as a Store
There is a different way to avoid using ContextAPI in such cases. We can create our own Hook - Redux-like store implementation. We created variables which only existed once in our application lifetime (the globalState, listeners and actions variables). Every module which imports from store.js will use the same values that are stored there.  
Then, we created custom useStore() hook. We created dispatch() function, which makes sure that whenever we call dispatch, the globalState and listeners array are updated.   
Then, we call state updating function - when such function is called, any component that uses this hook will re-render.