import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/config/theme";

import WeddingInvatation from "@/traditionallayout/index";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme} >
      <WeddingInvatation />
    </ChakraProvider>
  );
}

export default App;
