import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "./components";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
