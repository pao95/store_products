import { PrincipalLayout } from "@/components/layout/PrincipalLayout";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

const darkTheme = createTheme({
  /**Move to another folder */
  palette: {
    mode: "dark",
    secondary: {
      main: "#7b1fa2",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <PrincipalLayout>
          <>
            <CssBaseline />
            <Component {...pageProps} />
          </>
        </PrincipalLayout>
      </SWRConfig>
    </ThemeProvider>
  );
}
