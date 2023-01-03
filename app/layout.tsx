import "./styles/globals.css";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
