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
-
## Why use NextJS
## File-based Routing 
## Page Pre-rendering
## Data Fetching & Adding on API