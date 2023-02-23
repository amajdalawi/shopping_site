import "./styles/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Index from "./components/Index";
import Error from "./components/Error";
import Store from "./components/Store";
import Item, { loader as itemLoader } from "./components/Item";

import { useState } from "react";

const RoutesJSX = (
  <Route element={<Root />} path="/" errorElement={<Error />}>
    <Route index={true} element={<Index />}></Route>
    <Route element={<Store />} path="/store"></Route>
    <Route element={<Item />} path="/store/:id" loader={itemLoader}></Route>
  </Route>
);

const routes = createRoutesFromElements(RoutesJSX);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Root />} path="/" errorElement={<Error />}>
//           <Route index={true} element={<Index />}></Route>
//           <Route element={<Store />} path="/store"></Route>
//           <Route
//             element={<Item />}
//             path="/store/:id"
//             loader={itemLoader}
//           ></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     // <div>

//     //   <NavbarDefault />
//     //   <Hero />
//     //   <Features />
//     //   {/* <p>Home Page</p> */}
//     // </div>
//   );
// }

export default App;
