"use client";

import React from "react";

// Minimal ThemeProvider shim.
// The original project may use `next-themes` or a custom provider.
// To avoid build-time errors and preserve server/client parity we export
// a lightweight provider that simply renders children. If you need the
// full theming behavior (class switching, system theme support), replace
// this implementation with your project's ThemeProvider (using next-themes
// or a custom context).

export function ThemeProvider({ children, ..._props }) {
  return <>{children}</>;
}

export default ThemeProvider;
