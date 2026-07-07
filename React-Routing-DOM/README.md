# Router

    1. Routing means going one page to another page is known as Routing.
    2. React does not have inbuilt routing it is done with help of React Router DOM.

## Steps
    1. Go to the wesite https://reactrouter.com/
    2. insall at terminal npm i react-router-dom

## Types

### 1. Browser Router - 
        1. It is normal and basic router that react router provides.
        2. It is very basic router and commonly used router.
        3. It is render client based.
        4. A declarative <Router> using the browser History API for client-side routing.
        5. Router store in the browser

            
    Ex. 1.  web = web router_name
            web.com       = /
            web.com/home  = /home
            web.com/about = /about 

### 2. HashRouter
        1. A declarative <Router> that stores the location in the hash portion of the URL so it is not sent to the server.

    Ex. 1.  web = web router_name
            web.com       = /#/
            web.com/home  = /#/home
            web.com/about = /#/about 

### 3. MemoryRouter
        1. A declarative <Router> that stores all entries in memory.
        2. That store everything in the memory.

### 4. StaticRouter
        1. A <Router> that may not navigate to any other Location. This is useful on the server where there is no stateful UI.
        2. It is basically helped in the static site generation  like nextjs, remixjs in that staticRouter is used 