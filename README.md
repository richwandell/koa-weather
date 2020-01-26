# Koa Local
A news and weather app created to demonstrate the use of the following things. 

1. [Koa] 
   * Used as the backend framework. Koa renders the initial page load using a [Pug] template.
After the initial page load an Ajax call is made using the [Fetch] api and Koa responds with a [JSONApi]
response. The ajax request is used to load the data for the page. 
2. [React] 
   * Used on the front end with [Reach Router] to create the UI. 
3. [Redux]
   * Used in conjunction with React as a state container. Responds to state changes and updates 
   the React state.  
3. [Service Worker Api] 
   * Used to cache files and create a [Progressive Web App] that can be loaded as an app on the 
   home screen of a device. 
4. [Serverless Framework] is used to deploy the app to aws lambda.


## More interesting things. 
|  |  |
| ---         | ---    | 
[Serverless Config]|[NewsApi Middleware]|
[Local Debugging]|[Service Worker]|
[Webpack Config]|[Using Reach Router]|
[DarkSky Middleware]|[Redux Reducer]|
[MapQuest Forward Geocoding Middleware]|[React Container Component]|
[MapQuest Reverse Geocoding Middleware]|[React Presentation Components]|




[Koa]:https://koajs.com/
[Pug]:https://pugjs.org/
[Fetch]:https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[JSONApi]:https://jsonapi.org/
[React]:https://reactjs.org/
[Reach Router]:https://reach.tech/
[Redux]:https://redux.js.org/
[Serverless Framework]:https://serverless.com/
[Service Worker Api]:https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
[Progressive Web App]:https://developers.google.com/web/progressive-web-apps
[Serverless Config]:https://github.com/richwandell/koa-weather/blob/master/serverless.yml
[Local Debugging]:https://github.com/richwandell/koa-weather/blob/master/local.js
[Webpack Config]:https://github.com/richwandell/koa-weather/blob/master/webpack.common.js
[DarkSky Middleware]:https://github.com/richwandell/koa-weather/blob/master/middleware/DarkSky.js
[MapQuest Forward Geocoding Middleware]:https://github.com/richwandell/koa-weather/blob/master/middleware/MapQuestForward.js
[MapQuest Reverse Geocoding Middleware]:https://github.com/richwandell/koa-weather/blob/master/middleware/MapQuestReverse.js
[NewsApi Middleware]:https://github.com/richwandell/koa-weather/blob/master/middleware/NewsApi.js
[Service Worker]:https://github.com/richwandell/koa-weather/blob/master/public/ServiceWorker.js
[Using Reach Router]:https://github.com/richwandell/koa-weather/blob/master/public/src/js/index.jsx
[Redux Reducer]:https://github.com/richwandell/koa-weather/blob/master/public/src/js/reducers/index.js
[React Container Component]:https://github.com/richwandell/koa-weather/blob/master/public/src/js/components/container/index.jsx
[React Presentation Components]:https://github.com/richwandell/koa-weather/tree/master/public/src/js/components/presentation


