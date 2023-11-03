## Async Tasks with Redux
Reducers must be pure,synchronous functions - they can't have side effects inside of them
## Where put Redux Code
There are two possible places to store side effects and asyc tasks
- Directly into component [with use of useEffect()]
- We write our action creators - Redux have a solution to perform side effects as a part of them.
## Redux Dev Tools
Redux Dev Tools is a browser extension. It allows us to see the store state, and also which actions has been dispatched and when. You can also jump between states, which can be convinient to debug Redux behaviour.