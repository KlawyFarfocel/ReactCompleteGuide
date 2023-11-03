## What is Redux
Redux is state management system for cross-component or app-wide state.
- Cross-component state
State affecting multiple components
    - open/close of modal overlay
    - requires prop drilling
- App-wide state
State affecting entire app 
    - user authentication/chosen theme
    - also requires prop drilling

To avoid prop drilling and make managing these states we can use React Context [useContext()]. Redux solves the same issue -it is there to help manages these states
### Why to use it
React Context have some potential disadvantages. For example:
    - Complex setup and management
        This problem became visible is huge, enterprise-level project - there is a risk of deeply nested or complex providers for managing states through application
    - Performance
        React Context isn't developed for frequent changes - they are not optimized for these kinds of operations, so it may costs performance
## Redux Basic
### How Redux Works
Redux is about having one, central data[state] store. There is only one store for all of states in application. We hava data in this store, so we can use it in many components.

Components subscribe to Redux store, and whenever state changes, the store notifies components about the change, so they can get the data they need. They get a slice of a Redux store.

Components <b>never</b> directly manipulates data in store. Instead, to do that we use <b>Reducers</b>. Reducer functions are responsible for mutating [changing] the store data. 

Components <b>dispatches</b> actions, which describe actions, which reducer must perform. Redux forwards these actions to reducer function, and then this operation is performed. Reducer functions returns mutated data, and then store notifies components about the change, so they can update UI.
### Using Redux With React
### Working with Redux Toolkit
It's a extra package that makes using Redux more convienient