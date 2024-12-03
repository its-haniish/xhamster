import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        // errorElement: <NotFound />
    },
    {
        path: '/:slug',
        element: <Video />,
    }
]);

export default router;