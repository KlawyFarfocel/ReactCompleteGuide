## How React update the DOM and how are component functions executed
React construct a component tree and executes components based on this tree
Unless there is a state in parent component, the updates only causes re-evaluation this component and his children

React introduces memo() method - it will look through props of component, then compare old prop values with new prop values and if those props value will be exactly the same this component execution would be prevented. The prevention is also true for children function. memo() only cares about external changes. 

### Don't overuse memo
First of all, blocking a component execution will also block all children component execution. So, if you would wrap all of component with memo() function, React would have to check props for all of components. That allow us to move to the second point of not overusing memo() function - <b>Checking props with memo() costs performance</b>

### Clever component composition is even more powerful than memo
As stated before, the re-render is child component <b>DOES NOT</b> causes parent's re-render. So, moving managing states from root component [<App/> in this example] would be great idea, because in such case, only the child component [<ConfigureCounter/>] would be executed

#### memo() works with useCallback()
On the other hand, good use of memo function is inside of a <IconButton> component. It's a static component, so it's not changing while the app re-renders, but because of how React works it's re-rendered anyway. It may be good opportunity to wrap <IconButton> so it doesn't re-render. But even when doing that, the component re-render anyway.
The reason for that lies in the props that are sent to <IconButton> component. onClick property is a function, and in React <b>Functions are recreated during component re-evaluation</b>, and when function is being recreated it isn't the same fuction as before, although it may looks like it - that's why memo doesn't work.

Wrapping the handleIncrement() and handleDecrement() into a useCallback() function prevent these recreations, which makes the memo() function not fail

### useMemo()

While memo() is being used to not re-render component, useMemo() to prevent the execution of functions unless their input changes. While it can be good idea, but you should refrain of using useMemo() when not dealing with complex calculations. In our case, wrapping isPrime() function with useMemo() could avoid a lot of unneccesary executions.

### Optimizing React with Million JS

React Developer Tools is useful when trying to optimize React applications