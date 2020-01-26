# Koa Local
A news and weather app created to demonstrate the use of the following things. 

1. [Koa] is used as the backend framework. Koa renders the initial page load using a [Pug] template.
After the initial page load a Ajax call is made using the [Fetch] api and Koa responds with a [JSONApi]
response. The ajax request is used to load the data for the page. 
2. [React] is used on the front end with [Reach Router] and [Redux]. 
3. [Serverless Framework] is used to deploy the app to aws lambda.

[Koa]:https://koajs.com/
[Pug]:https://pugjs.org/
[Fetch]:https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[JSONApi]:https://jsonapi.org/
[React]:https://reactjs.org/
[Reach Router]:https://reach.tech/
[Redux]:https://redux.js.org/
[Serverless Framework]:https://serverless.com/
