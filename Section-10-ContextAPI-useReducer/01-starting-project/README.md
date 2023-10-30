## Prop drilling
It's when you have to pass data through multiple layers of components, while they don't directly need it. It could be a problem, because it makes components less reusable and also making code less readable, because of boilerplate code you have to write just to use this one method/one variable
### Prop drilling solutions
- Component composition
In most cases it's only part of the solution. The main premise of component composition is reevaluating our components, so we can lessen prop drilling. In this case - we moved Product map from the shop component to the App component, so there is no need of drilling handleAddItemToCart through Shop component to get it into product. 
I used children prop to render Product list into Shop component
### Context API
Sometimes it can get rid completely. Its used to share data across components easily. You create context value and wrap context around components. It can easily be connected to state. useContext() can be used to get rid of multiple states.

Convention states that context should be stored in "store" subdirectory. Just wrap your components with <YourContext.Provider>. In older code you can also encounter YourContext.Consumer, but using useContext() is much cleaner way to manage ContextAPI

When changing values in Context, the component function that access context values gets re-executed. The main advantage is that you can access values exactly when you need them.

## UseReducer
useReducer is hook that reduce one or more complex values into a simpler one