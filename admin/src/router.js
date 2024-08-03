import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddVideo from "./pages/AddVideo";
import AllProducts from "./pages/AllProducts";
import EditProduct from "./pages/EditProducts";
import FeaturedProducts from "./pages/FeaturedProducts";
import Categories from "./pages/Categories";
import Creators from "./pages/Creators";
import Home from "./pages/Home";

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
        path: '/all-products',
        element: <AllProducts />
    },
    {
        path: '/edit-product/:id',
        element: <EditProduct />
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