## What is "Testing"
- Manual Testing
    - Write code -> Preview & Test on Browser -> Improve code -> Repeat
    - You see what users will see
Error-prone: It's hard to always test all possible scenarios and combinations
- Automated Testing
    - Addition to manual tests
    - Write code to automatically tests your code
    - Testing the individual building bolcks of app
## Automated Tests
### Unit Tests
Test the individual building blocks (functions, components) in isolation
 - Projects contains a lot of unit tests
 - The most common kind of test 
### Integration Tests
Test the combination of multiple components, for example working together
 - Projects typically cointain a couple integration tests
 - Focus on unit tests in most case
### End-to-End Tests
Test completete scenarios/ user flows in app (as the user would experience them) 
    - Project contains only a few E2E tests
    - Important but can also be done manualy (partially)

I will focus on unit tests in this section.

### What to test and how to test?
Unit tests target the smallest building blocks that make up application.
Test success and error cases, and test rare (but possible results)

### Required tool
1. Tool for running tests and asserting the results
For this I use Jest - very popular in React
2. Tool for "simulating" React App / components
React Testing Library

Both of these tools comes pre-installed when working with create-react-app appplication

## Writing Tests - Three A's
1. Arrange
    Set up test data, test conditions and test environment
2. Act
    Run logic that should be tested (executing functions etc.)
3. Assert
    Compare execution results with expected results

### React Testing Library
When using screen from React Testing Library, we have 3 types of functions
1. Get functions - screen.getByText
Will throw an error if element is not found
getByRole would fail if you have multiple object of the same role
2. Query functions - screen.queryByText
Won't throw an error
3. Find functions - screen.findByText()
Will return a <Promise>

### Test suites
Tests suites organizes and groups tests. For example all tests about one component could be in one suite. You create suite by using describe()

### Testing user interactions
You can test user interactions by using userEvent object [also pre-installed]
import userEvent from "@testing-library/user-event"
This object have properties like click and all other events that can simulate user behaviour

### Testing Asynchronous Code
Testing functions can be asynchronous. We need to keep in mind that now we have to use find functions, as they return a <Promise>. Also it's important to await the find - there is a possiblity to set a timeout property if it would take longer - default is 1 second

### Working with Mocks
You sometimes want to test components that sends some requesti in order to insert/change data in the backed database or so. So, we either want to not send real request or we want to send it to some testing server.That's when mocks come into play. This is a dummy function that overrrides the real function and then does not send the request.

Jest have built-in support for mocking such functions.
jest.fn()