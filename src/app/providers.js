"use client";
import { ThemeProvider } from "acme-theme";
import { AuthProvider } from "acme-auth";

export function Providers() {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
