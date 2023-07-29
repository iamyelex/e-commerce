import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Cart, Clothing, Contact, Electronics, Header } from "./pages";
import Homepage from "./pages/Homepage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
