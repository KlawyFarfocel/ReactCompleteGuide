## Routing: - Multiple Pages in Single-Page Application

The main advantage of Routing is that you can provide an URL, so the user is not forced to always start at the main page and manually navigate to certain location.

### What is a Routing?

When visiting a website, you can append a path after the domain name in order to access, for example, the welcome page. After the URL changes, a different page gets loaded. This is what **routing** is all about - different URLs load different content on screen.
Traditionally, you implement routing by having different .html files loaded for different URLs. The main disadvantage to that approach is that you always have to fetch new content - HTTP request is being sent and content is loaded after the response is received. It can introduce lag and slow down the website -suboptimal user experience.

#### SPA - Single Page Application

When building complex user interfaces, we typically build **S**ingle **P**age **A**pplication (SPA). In such case, there in only one HTML request and response chain, at the initial start. After that, the page and URL changes are managed by client-side React code.

## React Router - the most popular routing package for React

### Adding React Router to Application

After installing the react-router-dom package [may change in the future]

1. Define the routes we want to support

   To define the routes, we have to use the function built-in the "react-router-dom" package, called `createBrowserRouter()`
   This function accepts as a parameter an array of objects. The properties of each objects are listed in the documentantion, but the most important property is **"path"** - this is where we specify the path, which will lead to specific component.  
   The other property is called **"element"** - this contains React component, that would be render if we move to that specific path.

2. Active the router and load the route definitions.

   In order to do so, we have to use built-in component, called **`<RouterProvder/>`**. This component expects the "router" property which is variable of constant, in which the createBrowserRouter() has been specified.

3. Add means to navigate between content, so the user can move smoothly between the different pages

#### Alternative Way of Defining Routes

The other approach, used in older versions of react-router was defining routes with help of **`<Route>`** components and JSX code. It look like this:

```javascript
const routerDef = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);
```

As you may see, we use `createRoutesFromElements()` which also comes with react-router package. After this, we simply use
`createBrowserRouter(routerDef)` and passing this route definiton as a parameter.

### Navigating between Pages with Link

Of course, we can manage navigation via `<a>` given to us by HTML. The thing is, using a tag fires browser's default behaviour - sending HTTP request, which is indicated by that spinning circle on the Tab bar. It may be instantious, but we rather have smoother navigation and user experience in general. This is where `<Link>` comes into play.
**`"<Link>"`** disables mentioned behaviour of browser and changes the URL, so there is a illusion of that request being sent. That's how we ensure better user experience.

### Nested Routes & Layouts

Now, when you, for example, want add Navigation Bar to your page, you would have to use the same element over and over, which is obviously a redundancy, which we want to avoid. For this example, we used another property of route definition - called "children". This property accepts an array of route objects, allowing us to nest routes. Thanks to that, we can use another built-in component `<Outlet>` to state, where we want the children routes' content to be displayed. With this approach, we can build Root component, which would look like this

```javascript
export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}
```

`MainNavigation()` being our NavBar. This is the most common approach to add Layouts to react-router based projects.

### Showing Error Pages - errorElement

When we access the page that isn't specified in any of the route object, the React Router will automaticly append the "**errorElement**" property, thanks to which there will be an error displayed to the user. As we may want to adjust the errorPage to our needs, we can specify our own JSX element, and add it as a property "**errorElement**" to the main route - this will ensure that whenever user enters wrong URL or we mess up routing, there will be page that will told user that this page does not exist. 404 Page Not Found

### NavLinks

NavLinks are an alternative to react-router-dom Links. Checking if current anchor tag is active has become so common behaviour, that React Router supports it. The main advantage of NavLinks is that inside of property "className" they actually receive a function, which by default comes with isActive property, which returns true or false, depending if the url leads to current page or not. Thanks to that, we can easily manage, for example, css style of an element. Let's look at an example:

```javascript
<NavLink
  to={"/"}
  className={({ isActive }) => (isActive ? classes.active : undefined)}
  end
>
  Home
</NavLink>
```

Worth noting, the "end" property states, that it should only work for the paths that ends with "/". By default it's set to true, but can be set to false if it suits your needs.

#### Imperative Routing

The default way of providing navigation to user is by defining a button or text, which allows user to navigate around website. However, there may be cases, when for example, form is being submitted or some timer has expired, and we have to "manually" navigate user to other page. You can do this by use of **`useNavigate()`** hook.

```javascript
const navigate = useNavigate();
const handleNavigation = () => {
  navigate("/products");
};
```

In this example, whenever the `handleNavigation()` function is called, it will force navigate to "/products" URL.

### Dynamic Routes

Sometimes, more than often, you would have dynamically added entries into project's database, and you want to have page for every entry. Obviously, you can't add multiple routes, because you will never know how many entries you would end up with. In this case "urlParams" could be useful.  
In React Router, you can use urlParams in this way:

```javascript
{ path: "/Products/:productId", element: <ProductDetail /> },
```

The most important part is that colon -> the part after colon is our variable, that we could use, for example, to reach out to API in order to get data of this particular entry.
Next, we have to use useParams() hook, to get the params object, from which we can extract the parameter, we've just set.

```javascript
const params = useParams();
return <h1>Product {params.productId} Detail</h1>;
```

In this code, the params.productId would be dependent from the URL.

### Understanding of Absolute and Relative Paths

To make long story short,

- If path start with "/" - this path is absolute and goes from the top of the tree and is appended directly after the domain name.
- Path without "/" - the path is relative, it means, that the path is relative to the appended after the wrapper route.
  The `<Link>` component have a property called "relative" which lets you control if the page you specified have to berelative or not``

### Index Routes

Sometimes, you want to load some component for the exact path you specified, but you also want to include some Navigation and you use "children" property. Of course, you can solve this issue, but there is another approach - index routes. Let's have a look at this example:

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/Products", element: <ProductsPage /> },
      { path: "/Products/:productId", element: <ProductDetail /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
```

In this example, setting the "index" property to true ensures, that this will work automatically for the path that ends with "/".

## Data Fetching & Submission

### Data Fetching with a loader()

When impleneting URL Routes, we can use another property of Route object, **loader:**. This property expects a function -> handler or anonymous one. Thanks to that, we can use the returned data in the Route in which the loader was specified and any other children route.

#### Loader() Data Usage

Let's have a look at this example:

```javascript
export async function EventLoader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events!" }), {
      status: 500,
    });
  } else {
    return response;
  }
}
```

As we may see, we return the `Response` object with fetched data, so we can use it later.  
We can use this returned data using hook named `useLoaderData()`. It's worth noting, that it will get the data closest to us, when looking at the URL Route tree. Here's the example of how this work:

```javascript
const data = useLoaderData();
if (data.isError) {
  return <>{data.message}</>;
}
const events = data.events;
return <EventsList events={events} />;
```

#### Where to store loader() code?

There is no requirements of where to store loader() code. However, it's good practice to store the loader() function in the element, which the loader property is tied with. For example, if i have Route to "/events" and element set to `<EventsPage>`, the loader function to this route should be located inside of `<EventsPage>` component.

#### When are Loader() functions Executed?

Loader functions are right when user is navigating to the page with the loader property specified. So, the data fetching is initiated as soon as the route transition is initiated. By default, React Router will wait for the loader to be finished before it renders the page with the fetched data.

Unfortunately, when delay occurs, user may think that something went wrong, because it isn't represented on the UI. However, React Router gives us tools to improve User Experience in this field.

- `useNavigation()`  
   This hook, provided by React Router, gives us information, wheter we're currently in active transition or there isn't any transition going on.
  This hook have many properties, but the most important is **state** property. This is simply a string which may be in three states:

  1.  **idle**  
      We don't have any active route transitions.
  2.  **loading**  
      We have a active transition and are loading data.
  3.  **submitting**  
      We're submitting data.

  It is important to note, that the loading state would be visible on a page/component that is **ALREADY VISIBLE** on screen when the transition is started.

- Returning respones in `loader()`  
  It's worth noting that loader() functions can actually return a `Response`. Thanks to that we can make use of many properties of this object, like status. Whenever the loader() returns a Response, React Router automatically extract the data from Response when using `useLoaderData()`. There is no need for manually extracting the data from `fetch()` Response.

#### What kind of code goes into loader() function?

It's important to understand that the loader function is still executed in browser, not on the backed. With that, there is a possibility of using all of browser's API, like localStorage and so on. However, because this isn't react component, it means that React Hooks can't be used there - it would violate Rules of Hooks.

#### Error Handling with Custom Errors

When it comes to handling errors in loader() function, we may use one of two approaches:

1.  Simply returning new object and acting accordingly  
    Like, for example, adding boolean "isError" to check if it truly was an error
2.  Throwing an Error  
    `throw {message: "Could not fetch events!"};`
    In this case, React Router will see that the error occured and will render the closest errorElement specified in the Route definition.  
    This is where throwing `<Response>` comes helpful - with that we can set the status prop, so we are able to create generic error Page.

#### json() Utility function

As throwing and creating a `Response` manually may seem useful, React Router provides us with another helper function - `json()` - it creates a Response object for us that includes data in JSON format - the major advantage is that we don't have to use JSON.stringify or other functions in order to get into the data. Usage:

~~`throw new Response(JSON.stringify({message:"Could not fetch events!"}),{status:500})`~~

```javascript
throw json({ message: "Could not fetch events!" }, { status: 500 });
```

### Dynamic Routes and loader()

As using loader() to fetch data from dynamic routes may seem tricky, thanks to React Router it is easy. Every loader() function passes two parameters - request and params

- request - self explainatory, the request data
- params - access to URL params, as in the `useParams()` hooks  

Thanks to that, we can use the params in the url in such way:   
```javascript
export async function EventDetailLoader({request, params}){
  const response=await fetch(`http://localhost:8080/events/${params.eventId}`);
}
```
### Accessing Data From other Routes
Sometimes, we want to access data from other routes without writing the same action over and over again. In order to do so, first - in Route definition we have add property called **id**, so we can access this exact route. Then we have to use hook ```useRouteLoaderData(id)``` which expects route ID as a parameter. **This feature only works if using a data router!**.
### Data sumbission
Up to this point, while managing data sumbission, we imperative navigate to different page, manage loading states and so on. We could use this approach here, but React Router suggest better way to do this. The same way we could add ```loader()```  to load data, we could use actions to manage data submissions.
#### Working with action() functions
Thanks to React Router, we have such tools - First, we have to add ```action``` property to route definition. Then, instead of using default HTML ```<form>``` tag, we have to use built-in React Router ```<Form>``` component. This component will prevent browser's default behaviour of sending request and refreshing and instead will trigger the function listed in the action property. If we want to do this imperatively instead of waiting for form submission, we could use ```useSubmit()``` hook and the simply do ```variable()```

In order to get access to the data from ```<Form>``` in action function, we have to use the request parameter (accessible in those functions) and then use the function formData() like this:
```javascript
export async function submitFormAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
}
```
As seen on example, after accessing formData, we can get the data using the name value from form.

It is important to note, that when using ```<Form>``` component, all inputs have to have "name" prop - otherwise the formData wouldn't include that field's value.
#### Validating User Input
In order to validate the user input, we are sending errors with our backend. When we want to display those data, we could use ```useActionData()``` hook, which returns the serialized data from the most recent route action.
```javascript
const data = useActionData();
{data && data.errors && 
<ul>
  {Object.values(data.errors).map(err=>(
    <li key={err}>{err}</li>
  ))}
</ul>
}
```
#### Reusing Actions via Request Methods
Of course, we can use actions for more than only one route - for example, the Edit Event and Add New Event only differs with the URL the request is being sent to. We can then access the method property from request argument and change routes accordingly, making the action function more flexible.
#### Behind-the-Scenes Work with useFetcher()
When submitting the data using ```useSubmit()``` or ```<Form>``` the issue is, that it always changes page to the place, from where action is being sent. If we want to call a loader or an action without changing URL, we can use ```useFetcher()``` hook to get these data.
```javascript
  const fetcher = useFetcher();
  const {data, state}=fetcher

  useEffect(()=>{
    if(state==="idle" && data && data.message){
      alert(data.message);
    }
  },[data,state])

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
```
As seen in this example, the fetcher  have data and state properties. The states are the same as in ```useNavigation()``` hook. We had to alter the form component making it fetcher.Form instead of just Form. Thanks to this changes, the form will now submit to the backend without causing changes in URL and navigation. 
#### Deferring Data Fetching with defer()
Deferring data fetching means telling React that we want to render component, even that data isn't there yet. We can do this with use of ```defer()``` function provided with React-Router-Dom. Here's an example:
```javascript
export function EventLoader() {
  return defer({
    events: loadEvents(),
  });
}
```
This function wants the object with keys, and function that have to be deferred. However, now that we are deferring data fetching, our return part have to be changed aswell:   
```javascript
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
```
Now, we wrapped the EventsList into Await component [built-in with React Router], which will re-render the data when the resolve Promise will be resolved. The ```<Suspense>``` components is parent to Await component in order to display fallback data, until the Promise is Resolved
##### Controlling which data should be deferred
Sometimes we want to fetch the data from different places and don't always wait for all of them before the navigation starts. In order to do so, we use defer() in such way:
```javascript
  const id = params.eventId;
  return defer({
    event:  await loadEvent(id),
    events:  loadEvents(),
  });
```
In this example, we use await in the loadEvent(), so there wouldn't be a case if the page for event detail would load without details for certain event. That's how we control deferring data with defer(). Worth noting, all deferred data have to have own ```<Suspense>``` because otherwise, Suspense would wait until all of data has been resolved. That's how it looks:
```javascript
  const { event, events } = useRouteLoaderData("eventDetail");
  return (
    <>
      <Suspense fallback={<p>Loading event...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading events...</p>}>
        <Await resolve={events} >
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
```