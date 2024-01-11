## What is NextJS
NextJS is a React framework for production. It offers a lot of features that makes large scale, production-ready React apps easier. In some kind, it is a fullstack framework to React.
NextJS added features, that would have to be added on your own otherwise - like routing for example.
In most cases it adds the features which will be needed for almost all production-ready React Apps
Key features and benefits of NextJS:
- Built-in Server-side Rendering support
Server-side rendering means that the content is being prepared on server instead of on client. 
Standard React application is being rendered on client-side. In such case it may be an issue, when the data have to be fetched from the server in order to be displayed. In this scenario, user may see website flickering or some loading state, before the data will arive to client. It happens because the data-fetching occurs after the JS code is executed on client. It may not always be an issue, but it can be troublesome if we care about search engine optimization, not speaking about the general User Experience.

If that page would be pre-rendered on server and data-fetching would be done on the server, so the prepared page would be sent to client, we would avoid the flickering state of page and search engines would see our content.
- Simplified file-based routing
In traditional React, there is no Router. Router gives user an illusion of having multiple pages. Router's job is to manage navigation and loading of different pages. Router watches URL and it prevents browser's default of sending a request and renders different components with React.
This routing can be achieved using a React Router, but it is an extra code that have to be written.

NextJS gets rid of that in-code route definition. Instead, with NextJS, you would define **pages and routes with files and folders**. You just create folder named "pages" and then structure of that folder defines routes and paths.

- Fullstack Capabilites
With NextJS it's very easy to add our own backed API into React project using NodeJS code. It helps while adding authentication to React project or storing/getting data from the database.

## File-based Routing 
NextJS uses File-based Routing, in order to execute navigating between pages.
To get started with that, we have to create the "pages" folder, which will act like the URL tree for our project. In order to dive deeper into that tree, you have to create directories, which names will be used as a part of URL. In the [First Next App](https://github.com/KlawyFarfocel/ReactCompleteGuide/tree/main/Section-25-Introduction-to-NextJS/01-first-react-app) in the pages folder we have this structure:
- index.jsx
- news
 - index.jsx
 - [newsId].jsx
So, when the page is default loaded, we would enter the first index.jsx. However, if we wanted to access the news subdomain, we would have to add /news to the URL, for example "localhost:3000/news" - that will guide us the the index.jsx located inside of the "news" directory. The square brackets means that we are managing with the dynamic pages, but about this in a while.
## Dynamic Pages and Extracting Dynamic Values
As seen before, the square brackets implicates that we are using the dynamic path for this file. At this point, it only means, that any other URL will be send inside that file. Let's have a look inside of that file:
```javascript
import {useRouter} from 'next/router';

export default function DetailPage(){
    const router=useRouter();

    
    return(
        <h2>{router.query.newsId}</h2>
    )
}
```
For the first glance, it looks like the standard React code. However we are using here the useRouter method from the next library. It allows us to get into the properties of this router. In this example, the "query" property includes a lot of properies form we can choose. newsId, which we specified in the square brackets means, that no matter what we will write in the URL, it will be displayed as the ```<h2>``` text. 
For example "localhost:3000/news/foo-bar" would result in the text "foo-bar" displayed in h2. It can be useful, when we want to extract some sort of id, and then make request to server with this id, so we can return exactly the one information we needed.
## Linking between pages
To link between pages, we can of course use ```<a>```  element, but that would result in browser making request to the server, which is not ideal. While not traversing to other URL tree branches, we want the page to act like Single Page Application. In order to do so, we use another component built into the next library - Link

```<Link>``` works similiar to the one seen in React, however, these require the "href" prop, which, as it is self-explainatory, have to be path to the file we want. Links prevent default behaviour of browser, so it doesn't send any unnecessary requests. Instead, the Link would change the URL and content on page, so it looks like you changed the page.

## _app.js
_app.js is special file which, when added to /pages directory, act like the wrapper around all content. Thanks to that, we can use it for example, to manage layout on our page, so we don't have to add it manually to every page. Let's have look at this:
```javascript
export default function MyApp({Component, pageProps}){
    return(
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    ) 
}
```
Layout is a custom component built - the function receives two arguments - Component and pageProps.
## Imperative Navigation
Imperative Navigation refers to the proccess in which we directly use the useRouter() built in NextJS to render the other components. Let's have a look:
```javascript
  const router=useRouter()
  function showDetailsHandler(){
    router.push("/"+props.id)
  }
```
In this example, we directly state, that after the button is pressed, we navigate to /{id} page.
## Page Pre-rendering
### Two forms of Pre-Rendering
- Static Generation
With static generation, the page is not pre-rendering when request is sent, but it is pre-rendered when the developer builds the site for production. So, after deployment, the pre-rendered page **does not change**. If the page content has been changed, the build process have to be started again.

getStaticProps()
With this built-in function, we can set-up the Static Generation process. It always have to return an object. The data that we want to send is stored in the "props" property which is also an object.

The issue with the static generation, as mentioned before, is that page is generating during building phase, so it isn't always the newest version of page, especially when the data on page changes frequently. That's then the property called "revalidate" comes into play. revalidate wants a number of seconds, after this it will reload the pre-built page, as long as there will be requests for that page.

### getStaticPaths()
- fallback

- Server-side Rendering
Sometimes, the regular updates are not enough. Sometimes, there is a need for pre-generating page dynamically every time that there is a request for that page. The alternative to getStaticProps function is **getServerSideProps()**
As before, this function returns an object aswell, with similar parameters as before, without the revalidate part, cuz it is not needed, as it is regenerating on every request anyway.

However, the getServerSideProps() function have to be used carefully - mostly with the data that changes all the time, or when you really need the response and request data [stored in the context.req and context.res] for the example, where there is a need for authenticating.

In other cases, the Static Generation is better choice, mostly because there will be no need to wait for regenerating the page for every response, making the website work faster. The pre-built website could be cached on CDN for even faster response.
## API Routes
API Routes are special routes/pages, which don't return HTML code, but are about accepting incoming HTTP requests with JSON data attached to them, do something with the data, and return the JSON data. It allows building own API end points.

In order to add API routes it is necessary to add the api folder inside of pages folder. NextJS will pick the .js files in this folder and convert them into API routes.
The function inside of files there will only be called when there will be a request /api/{name-of-file}