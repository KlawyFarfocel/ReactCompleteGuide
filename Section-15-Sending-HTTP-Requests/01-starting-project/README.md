### Data fetching

### HTTP Requests

HTTP Requests can be sent in different ways
- Fetch
fetch() wants URL as a argument. Fetch returns a <Promise> - a wrapper around a value that will eventually be recived
using useEffect() is recommended to avoid infinite loops
-- Async/await
You can use await instead of then() construction, but you have to keep in mind that await can only be used in async function. Functional component in React does not allow for async function, so for example you have to wrap this function into useEffect() hook
API - Application Programming Interface
API Endpoint - function, to which route [url] leads - to this URL you can send HTTP requests
REST API - web server, which have pre-defined routes to which you can send HTTP requests

#### Handling HTTP Errors
In front-end you should always be prepared for HTTP Erros - server may be offline, user might lost his Internet connection. There are two main ways of how HTTP Request might fail
- Fail to send request [i.e. network connection crash]
- Back-end sends back error code [something went wrong]
When using fetch() to get http response you can check if the response was an error by checking the ok property [response.ok] if true, you get ok response otherwise you get false

If there is no network connection, the fetch() method would return an error, which would crash an application - to avoid that, is good practice to wrap fetching data in try{}catch{} statements to then deal with these errors

Handling HTTP Errors in front-end means updating UI so the user knows that error happened but isn't scared by that error
