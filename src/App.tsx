import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "./components";
import { SWRConfig } from "swr";
import api from "./services/api";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => api.get(url).then((res) => res.data),
        revalidateOnFocus: false,
      }}
    >
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
