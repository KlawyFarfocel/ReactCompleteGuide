import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ErrorPage from "./pages/Error";
import RootLayout from "./pages/Root";
import ProductDetail from "./pages/ProductDetail";

// const routerDef=createRoutesFromElements(
//   <Route>
//       <Route path="/" element={<HomePage/>}/>
//       <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index:true, element: <HomePage /> },
      { path: "/Products", element: <ProductsPage /> },
      { path: "/Products/:productId", element: <ProductDetail /> },
    ],
    errorElement:<ErrorPage/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
