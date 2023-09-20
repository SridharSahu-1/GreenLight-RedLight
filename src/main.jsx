import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Box } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <Box bg="#313131" minHeight="100vh">
        <App />
      </Box>
    </ChakraProvider>
  </Provider>
);
