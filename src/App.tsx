import { GlobalStyles } from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// páginas
import { Home } from "./routes/Home";
import { Details } from "./routes/Details";

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
])

export function App(){
    return (
        <>
        <GlobalStyles />
        <RouterProvider router={router}/>
        </>
    )
}
