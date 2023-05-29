import { GlobalStyles } from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// páginas
import { Home } from "./routes/Home";
import { Details } from "./routes/Details";
import { Favorites } from "./routes/favorites";

import { FloatingButton } from "./components/FloatingButton";
import { TabBar } from "./components/TabBar";
import { Search } from "./routes/Search";
import { About } from "./routes/About";

// router
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/details',
        element: <Details />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
    {
        path: '/search',
        element: <Search />
    },
    {
        path: '/about',
        element: <About />
    },
])

export function App(){
    return (
        <>
        <GlobalStyles />
        <FloatingButton />
        <TabBar />
        <RouterProvider router={router}/>
        </>
    )
}
