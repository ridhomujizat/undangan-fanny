import {
  extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const ThemeMode = {
  Light: 'light',
  Dark: 'dark',
}

export const mobileBreakpointsMap = {
  base: true,
  md: true,
  lg: true,
  xl: false,
};

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#121212")(props),
    },
  }),
};

const textVariants = {
  emphasis: (props) => ({
    color: mode("teal.500", "cyan.200")(props),
  }),
  description: (props) => ({
    color: mode("gray.800", "gray.400")(props),
  }),
  accent: (props) => ({
    color: mode("black.400", "cyan.200")(props),
  }),
  accentAlternative: (props) => ({
    color: mode("#595959", "#A6A6A6")(props),
  }),
};

const config = {
  initialColorMode: ThemeMode.Light,
  useSystemColorMode: true,
}

const colors = {
  black: "#121212",
  font: {
    gray: "#8f8c8c"
  }
};

const theme = extendTheme({
  config,
  fonts: {
    body: "Roboto Slab",
  },
  colors,
  styles,
  components: {
    Text: {
      variants: textVariants,
    },
  },
});

export default theme