import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from './assets/styles/Global.styles';

import { App } from './App'

import { ErrorBoundary } from "./components/base/ErrorBoundary";
import { MessageDialog } from "./components/core/MessageDialog";

import { ThemeLight } from "./utils/themes/ThemeLight";
import { MessageProvider } from "./utils/context/Message";
import { GlobalProvider } from "./utils/context/Global";
import { AuthProvider } from "./utils/context/Auth";

import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <ErrorBoundary>
            <ThemeProvider theme={ThemeLight}>
                <AuthProvider>
                <GlobalProvider>
                <GlobalStyles />
                <MessageProvider>
                    <MessageDialog />
                    <App />
                </MessageProvider>
                </GlobalProvider>
                </AuthProvider>
              </ThemeProvider>
          </ErrorBoundary>
      </BrowserRouter>
  </React.StrictMode>,
)
