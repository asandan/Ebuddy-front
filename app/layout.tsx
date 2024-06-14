"use client";

import { ThemeProvider } from "@emotion/react";
import { Inter } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

import configureStore from "@/store/store";

import "./globals.css";
// import { initializeFirebase } from "@/util/config";
import { createTheme, Theme } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { store } = configureStore();
  const [theme, setTheme] = useState<Theme | undefined>();

  useEffect(() => {
    const theme = createTheme({
      palette: {
        primary: {
          main: "#dc0d4e",
        },
      },
    });

    setTheme(theme);
    // initializeFirebase();
  }, []);

  return (
    <html lang="en">
      <Provider store={store}>
        <ThemeProvider theme={theme || {}}>
          <body className={inter.className}>
            <main className="flex flex-col w-full">{children}</main>
          </body>
        </ThemeProvider>
      </Provider>
    </html>
  );
}
