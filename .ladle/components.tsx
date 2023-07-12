import '../src/style.css'

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
}) => (
  <div>
    <h1>Test Global</h1>
    {children}
  </div>
);