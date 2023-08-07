import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Cart, Clothing, Contact, Electronics } from "./pages";
import ItemDetails, {
  Loader as itemDetailsLoader,
} from "./components/ItemDetails";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/item-details/:id"
          element={<ItemDetails />}
          loader={itemDetailsLoader}
        />
      </Route>
    )
  );

  return  <RouterProvider router={router} />;
}

export default App;
