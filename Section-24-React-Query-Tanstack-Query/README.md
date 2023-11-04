## Tanstack Query
Library that helps with sending HTTP Requests & keeping front-end UI in sync.
It isn't exactly needed, as you can do it with useEffect() and fetch(), but it can <b>vastly simplify</b> code.
### What & Why?
Tanstack Query comes with many built-in behaviours, like refetch on tab changing or caching fetch data.
### About Tanstack Query
Tanstack Query does not send HTTP Requests -> You have to write the code that sends actual HTTP Request
Tanstack does manage the data, error, caching and more.
### Using Tanstack Query
Using Tanstack Query via useQuery() hook - this hook wants these arguments
    - queryFn - function that will return promise - often function with sending query
    - queryKey - key that be used by Tanstack Query to cache the data, so you try to send the same request again. Query key is actually an array - array of values that are internally stored
### Data caching & stale data
React Query caches query from requests, and stores them. Then they reuse it when you send another query with the same key. However it sends the same request behind the scenes to see, if updated data are available = if so, then React Query will silently replace that data with the updated one. 
As a developer, you can set a staleTime property on query. It controls after which time React Query will send request to find updated data if it found data in cache. Default value is 0.
Another property is gctime - Garbage Collector time - how long data in the cache will be stored. Default here is 5 minutes