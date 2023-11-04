## From Development to Production
### Deployment Steps & Pitfalls
1. Test Code
    - Manually
    - With automated tests
You have to make sure that application is thoroughly tested before deployment
2. Optimize code
    - Optimize user experience
    - Optimize performance
There are certain methods and part of your application that can be optimized [Section 13]. There is one more technique that can optimize performance of an App - Lazy Loading.
#### Lazy loading
Lazy loading - load certain pieces of code only when it's needed.

When we use imports, all of these imports must be resolved and loaded before the end piece will be sent to end user. The theorical problem is that every file must be loaded, which could be a problem. It will slow down initial load on more complex application.

That's when Lazy Loading comes into play. The idea behind Lazy Loading is that we load certain components only when they are needed instead of ahead of time.

Example:
In App.js we want to only load the Blog page when it's needed. 

In order to do that, we get rid of the import keyword on the top of page, because it cause the import to be called eagerly [ahead]. Instead of that,as the loader property, we pass and arrow function to the import() function, which returns a promise, with module. With usage of .then() function, we can extract module and module.loader() and execute it. The import function will now be executed only when the try to visit the BlogPage.

The next step to lazily load the <BlogPage> component. In order to do that we use the lazy() function, which comes integrated with React. The function is executed and takes the function with dynamic import as an argument.

Now the issue is, loading <BlogPage> can take some time, but we need it now. In order to resolve this issue, we wrap <BlogPage> with the <Suspense> component provided by React. The <Suspense> is used to wait for the component, before it gets loaded.

3. Build App
    - Run build process to parse, transform and optimize code.
In the build project, in package.json, which is created by create-react-app, there is a "build" script. It works the same in Vite-based projects.
We exectute this script, by running the "npm run build" command. The process will return optimized, minified output that can be moved to server, while keeping application as light as possible.

It produces the "build" folder with all the codes written and all of the js libraries needed to execute that code. The build folder needs to be uploaded to the server.
4. Upload App
    - Upload production code to hosting server
A React SPA is a Static Website - Only HTML, CSS & JavaScript - because of that there is a need for a static site host. 
5. Configure server
    - Ensure app is served securely & as intended
### Server-side Routing vs. Client-side Routing

Currently, the navigation is executed by React Router, so it has no code that executes on the server. That implies that when move between components, the logic is executed in the browser.
When user types and URL browser sends request to server. Server sends back response. The default behaviour is that the server looks through its files, searching for folder or some route based on request. The firebase, which I used in this section, prepares the configuration file [firebase.json] in which it tells Firebase to always send back index.html, no matter what request is being sent.