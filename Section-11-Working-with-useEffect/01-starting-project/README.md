## Side Effects
Side effects are tasks that don't impact the component render cycle

## UseEffect()
The idea behind useEffect is the code in useEffect is executed after render cycle, so it doesn't causes infinite loop. Of course the very important part is setting the dependencies array - it will only execute when values in dependency changes. When array is specified, but empty, React will only execute it 1 time after first render.

UseEffect should not be overused, because it causes additional execution cycle.


### When and when not use useEffect()
- When
    - When you want to prevent infinite loops or you have code that have to run after code execution
    - When you want to synchronize state values to DOM API's
- When not
    - When codes runes synchronously [almost instantly]
### UseCallback
Type of React hook, React makes sure that the function isnt recreated, instead is stored in memory and reuses this stored function. useCallback should be used when passing functions to useEffect()