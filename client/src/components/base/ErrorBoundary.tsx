import React, { Component, ErrorInfo } from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "../../assets/types/base/ErrorBoundary";

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public state: IErrorBoundaryState = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
        /** @desc Update state so the next render will show the fallback UI. */
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) return <h1>Sorry.. there was an error</h1>;
        return this.props.children;
    }
};