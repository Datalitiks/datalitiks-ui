import React from 'react';
import '../src/style.css'

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
}) => (
  <>
    {children}
  </>
);