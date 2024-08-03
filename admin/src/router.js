import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddVideo from "./pages/AddVideo";
import AllVideos from "./pages/AllVideos";
import EditProduct from "./pages/EditProducts";
import FeaturedProducts from "./pages/FeaturedProducts";
import Categories from "./pages/Categories";
import Creators from "./pages/Creators";
import Home from "./pages/Home";
import UpdateVideo from "./pages/UpdateVideo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/orders',
        element: <Orders />
    },
    {
        path: '/add-video',
        element: <AddVideo />
    },
    {
        path: '/all-videos',
        element: <AllVideos />
    },
    {
        path: '/edit-video/:slug',
        element: <UpdateVideo />
    },
    {
        path: '/featured-products',
        element: <FeaturedProducts />
    },
    {
        path: '/categories',
        element: <Categories />
    },
    {
        path: '/creators',
        element: <Creators />
    }
]);

export default router;