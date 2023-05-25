import { GlobalStyles } from "./styles/GlobalStyles";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// páginas
import { Home } from "./routes/Home";
import { Details } from "./routes/Details";
import { FloatingButton } from "./components/FloatingButton";

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
        <FloatingButton />
        <RouterProvider router={router}/>
        </>
    )
}
