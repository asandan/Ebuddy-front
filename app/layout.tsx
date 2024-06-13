"use client";

import * as adminConfig from "firebase-admin";
import * as service from "../ebuddy-426311-88ddef1e2d32.json";

import { theme } from "@/util";
import { ThemeProvider } from "@emotion/react";
import { cert } from "firebase-admin/app";
import { Inter } from "next/font/google";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";

import configureStore from "@/store/store";

import "./globals.css";
import { initializeFirebase } from "@/util/config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { store } = configureStore();

  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <html lang="en">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <body className={inter.className}>
            <main className="flex flex-col w-full">{children}</main>
          </body>
        </ThemeProvider>
      </Provider>
    </html>
  );
}
