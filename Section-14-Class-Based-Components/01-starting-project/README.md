### Class-based components
#### What and Why
##### Functional components
The default and most modern approach. React 16.8 introduced Hooks [useState(),useCallback() etc.]
##### Class-based components
Defined as JS classes where render() method defines the rendered output. Prior to React 16.8 you had to use class-based when you wanted to manage states. The most important part is that class-based components <b>can't use</b> React Hooks
### Class Components Lifecycle
- componentDidMount()
-- Called once a component mounter - was rendered
-- Similiar to useEffect()
- componentDiDUpdate()
-- Called when component is updated - re-evaluated and re-rendered
-- useEffect() with dependency array
- componentWillUnmount()
-- Called right before a component is unmounted - right before removed from DOM
-- Cleanup function in useEffect()
### Error Boundaries
The idea behind Error Boundaries is that you can ensure not your entire application crashes when you got and error, but you can cath this error, and handle it elegantly. Similiar to JS' try()catch(). This is only possible with class-based components.