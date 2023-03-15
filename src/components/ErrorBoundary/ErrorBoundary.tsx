import { CssBaseline } from "@mui/material";
import React from "react";
import "./errorBoundary.css";

const ErrorBoundary = () => {
  return (
    <div id="error-page">
      <CssBaseline />
      <img
        src="/static/page_doesnt_exist.png"
        alt="you must be lost."
        id="error-palm-img"
      />
    </div>
  );
};

export default ErrorBoundary;
