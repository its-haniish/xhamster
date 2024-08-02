import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/AllProducts";
import EditProduct from "./pages/EditProducts";
import FeaturedProducts from "./pages/FeaturedProducts";
import ManageCategory from "./pages/ManageCategory";
import ManageCreators from "./pages/ManageCreators";
import ResetPassword from "./pages/ResetPassword";
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
        path: '/add-product',
        element: <AddProduct />
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
        path: '/manage-category',
        element: <ManageCategory />
    },
    {
        path: '/manage-creators',
        element: <ManageCreators />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    }
]);

export default router;