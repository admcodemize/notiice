import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from './assets/styles/Global.styles';

import { App } from './App'

import { ThemeLight } from "./utils/themes/ThemeLight";
import {ErrorBoundary} from "./components/base/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <ErrorBoundary>
            <ThemeProvider theme={ThemeLight}>
                <GlobalStyles />
                <App />
              </ThemeProvider>
          </ErrorBoundary>
      </BrowserRouter>
  </React.StrictMode>,
)
