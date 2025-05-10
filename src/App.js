import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import Test from "./components/Test";
// import PhoneLogin from "./components/PhoneLogin";
const Grocery = lazy(() => import("./components/Grocery"));

// Store
import store, { persistor } from "./utils/appStore";

// Main Layout Component
const AppLayout = () => {
  const [authChecked, setAuthChecked] = React.useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  if (!authChecked) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Outlet />
          </div>
          <Footer />
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </PersistGate>
    </Provider>
  );
};

// Routes Configuration
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<div className="text-center p-8">Loading Grocery...</div>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "/restaurant/:resId", element: <RestaurantMenu /> },
        // ✅ Public Cart Route - no auth required
        { path: "/cart", element: <Cart /> },
        { path: "/test", element: <Test /> },
        // { path: "/auth", element: <PhoneLogin /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
