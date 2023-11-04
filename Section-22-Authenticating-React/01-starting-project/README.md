## What authentication means
Authentication is needed if content should be protected - should not be accessible for everyone
Client send request with user credential to server. Server will check if these credemtials are valid and based on that he will send back response if access is granted or no.

Server must reply with something that can be validated on server, if we really got an access before or not. Simple "yes" could be easily faked. There are two main ways to resolve that issue:
- Server-side Sessions
Very popular in full-stack application with merged front-end and back-end, so not ideal for React. On the server, after user was authenticated we store unique identifier and map that with specific id, which is sent back to client. The id is sent with future request, to ensure that client truly have a permission.
- Authentication Tokens
The idea behind these tokens is that after user was authenticated, we create permission token - a string that is created with some algorithm and is sent back to user. 
The special function of these tokens is that it can only be validated and proven by the backend that created that token - the method in which the key was createn in only known by the backend.
In future request, we attach that token to requests and the backend validates token and sees if the token was created by him, and then grant or deny access based of tym.