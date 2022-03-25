# react-auth-rbac


A utility library for React Router v6 for managing authentication and role-based routing. This library is based on [React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview). The idea of this library is to help developers manage authentication and role-based routing quickly and easily.



## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

```bash
npm i react-auth-rbac
```
For those, who are using [yarn](https://www.npmjs.com/package/yarn):
```bash
yarn add react-auth-rbac
```

## Usage

Firstly, create a file contains the app routes called `routes.tsx`, for example:
```js
import React from "react";
import { IRoutesConfig } from "react-auth-rbac";

// lazy loaded pages
const LazyPublicView = React.lazy(() => import("./views/Public"));
const LazyPrivateView = React.lazy(() => import("./views/Private"));

const routes: IRoutesConfig = {
  publicRedirectRoute: '/login', // redirect to `/login` when unauthorized user access a private route
  privateRedirectRoute: '/', // redirect to `/` when authorized is trying to access public routes
  defaultFallback: <span>Loading...</span>,
  // if the role of the user (`userRole` props) is not contained in the route `roles`
  InvalidUserRoleFallback: ({ currentUserRole, routeRequiredRoles }) => (
    <p>
      USER HAS NO PERMISSION FOR THIS ROUTE, current user role is{" "}
      {currentUserRole}, required roles: {JSON.stringify(routeRequiredRoles)}
    </p>
  ),
  public: [
    {
      path: '/login',
      component: <LazyPublicView />
    },
  ],
  private: [
    {
      path:'/',
      component: <LazyPrivateView />,
      roles: ['User', 'Admin']
    },
  ],
  common: [
    {
      path: "*",
      component: <p>page not found 404</p>,
    },
  ],
};

export default routes

```

Then, use `AppRouterProvider` to configure the app router

```js
import { AppRouter, Routes } from "react-auth-rbac";
import routes from "./routes"
function App() {

  return (
    <BrowserRouter>
      <AppRouter isAuth={false} routes={routes} userRole={'Admin'}>
        // Wrap `Routes` component into a Layout component or add Header
        <Routes />
      </AppRouter>
    </BrowserRouter>
  );
}

export default App;
```

### Nested routes
To add nested routes, come back to the `routes.tsx` file and use add the `children` property.

```js
import React from "react";
import { IRoutesConfig } from "react-auth-rbac";

// lazy loaded layouts
const LazyPublicLayout = React.lazy(() => import("./layout/Public"));

const LazyPrivateLayout = React.lazy(() => import("./layout/Private"));

// lazy loaded pages
const LazyLoginView = React.lazy(() => import("./views/Login"));
const LazyRegisterView = React.lazy(() => import("./views/Register"));

const LazyDashboardView = React.lazy(() => import("./views/Dashboard"));

const routes: IRoutesConfig = {
  // ... the rest configuration
  public: [
    {
      path: '/',
      component: <LazyPublicLayout />,
      children: [
        {
          path: 'login',
          component: <LazyLoginView />
        },
        {
          path: 'register',
          component: <LazySignUpView />
        }
      ]
    },
  ],
  private: [
    {
      path:'/dashboard',
      component: <LazyPrivateLayout />,
      children: [
        {
          path: "", // the index page of the layout
          component: <LazyDashboardView />,
          roles: [] // all users
        },
        {
          path: 'analytics',
          component: <LazyAnalyticsView />,
          roles: ['Admin']
        },
        {
          path: 'customers',
          component: <LazyCustomersView />,
          roles: ['Manager']
        }
      ]
    },
  ],
  common: [
    {
      path: "*",
      component: <p>page not found 404</p>,
    },
  ],
};

export default routes
```

Then, go to your layout files and add `Outlet` component to display your nested routes inside the layout.

`./layouts/Public.tsx`

```js
import { Outlet } from "react-router-dom";

function PublicLayout(){
 return(
  <>
    <header>Header</header>
       <main>
          <Outlet /> // the nested routes will be rendered here
       </main>
    <footer>Footer</footer>
  </>
 )
}
export default PublicLayout
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
