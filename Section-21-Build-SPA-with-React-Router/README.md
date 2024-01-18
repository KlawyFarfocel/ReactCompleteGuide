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
    className={({ isActive }) =>
    isActive ? classes.active : undefined
    }
    end
>
    Home
</NavLink>
```
Worth noting, the "end" property states, that it should only work for the paths that ends with "/". By default it's set to true, but can be set to false if it suits your needs.

#### Imperative Routing
The default way of providing navigation to user is by defining a button or text, which allows user to navigate around website. However, there may be cases, when for example, form is being submitted or some timer has expired, and we have to "manually" navigate user to other page. You can do this by use of **```useNavigate()```** hook.
```javascript
  const navigate=useNavigate();
  const handleNavigation=()=>{
    navigate("/products");
  }
```
In this example, whenever the ```handleNavigation()``` function is called, it will force navigate to "/products" URL.
### Dynamic Routes
Sometimes, more than often, you would have dynamically added entries into project's database, and you want to have page for every entry. Obviously, you can't add multiple routes, because you will never know how many entries you would end up with. In this case "urlParams" could be useful.  
In React Router, you can use urlParams in this way:
```javascript
{ path: "/Products/:productId", element: <ProductDetail /> },
```
The most important part is that colon -> the part after colon is our variable, that we could use, for example, to reach out to API in order to get data of this particular entry.
Next, we have to use useParams() hook, to get the params object, from which we can extract the parameter, we've just set.
```javascript
    const params=useParams()
    return(
        <h1>Product {params.productId} Detail</h1>
    )
```
In this code, the params.productId would be dependent from the URL.
### Understanding of Absolute and Relative Paths
To make long story short,
- If path start with "/" - this path is absolute and goes from the top of the tree and is appended directly after the domain name.
- Path without "/" - the path is relative, it means, that the path is relative to the appended after the wrapper route.
The ```<Link>``` component have a property called "relative" which lets you control if the page you specified have to berelative or not``
### Index Routes
Sometimes, you want to load some component for the exact path you specified, but you also want to include some Navigation and you use "children" property. Of course, you can solve this issue, but there is another approach - index routes. Let's have a look at this example:
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "/Products", element: <ProductsPage /> },
      { path: "/Products/:productId", element: <ProductDetail /> },
    ],
    errorElement:<ErrorPage/>
  },
]);
```
In this example, setting the "index" property to true ensures, that this will work automatically for the path that ends with "/".
## Data Fetching & Submission
### Data Fetching with a loader()
#### Loader() Data Usage
#### Where to store loader() code?
#### When are Loader() functions Executed?
Loader functions are right when user is navigating to the page with the loader property specified. So, the data fetching is initiated as soon as the route transition is initiated. By default, React Router will wait for the loader to be finished before it renders the page with the fetched data. 

Unfortunately, when delay occurs, user may think that something went wrong, because it isn't represented on the UI. However, React Router gives us tools to improve User Experience in this field.
- ```useNavigation()```  
   This hook, provided by React Router, gives us information, wheter we're currently in active transition or there isn't any transition going on.
   This hook have many properties, but the most important is **state** property. This is simply a string which may be in three states:  
   1.  **idle**  
      We don't have any active route transitions.
   2.  **loading**  
      We have a active transition and are loading data.
   3.  **submitting**   
      We're submitting data.  

  It is important to note, that the loading state would be visible on a page/component that is **ALREADY VISIBLE** on screen when the transition is started.
  #### Returning respones in loader()
  It's worth noting that loader() functions can actually return a ```Response```. Thanks to that we can make use of many properties of this object, like status. Whenever the loader() returns a Response, React Router automatically extract the data from Response when using ```useLoaderData()```. There is no need for manually extracting the data from ```fetch()``` Response.

  #### What kind of code goes into loader() function?
  It's important to understand that the loader function is still executed in browser, not on the backed. With that, there is a possibility of using all of browser's API, like localStorage and so on. However, because this isn't react component, it means that React Hooks can't be used there - it would violate Rules of Hooks.
  #### Error Handling with Custom Errors
  When it comes to handling errors in loader() function, we may use one of two approaches:  
    1.  Simply returning new object and acting accordingly    
    Like, for example, adding boolean "isError" to check if it truly was an error
    2. Throwing an Error  
       ```throw {message: "Could not fetch events!"};```
       In this case, React Router will see that the error occured and will render the closest errorElement specified in the Route definition. This is where throwing ```<Response>``` comes helpful - with that we can set  the status prop, so we are able to create generic error Page.
