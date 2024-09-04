import "@mantine/core/styles.css";
import colors from "@/utils/theme/colors";
import { createTheme, DEFAULT_THEME, MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { jakartaSans } from ".";

const theme = createTheme({
  primaryColor: "primary",
  colors: colors,
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    twoXl: "32px",
    threeXl: "36px",
    fourXl: "40px",
    fiveXl: "72px",
  },
  fontFamily: jakartaSans.style.fontFamily,
  headings: {
    fontFamily: `${jakartaSans.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
