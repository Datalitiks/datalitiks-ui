import React from 'react';
import '../style.css'

import type { GlobalProvider } from "@ladle/react";

export const Provider: GlobalProvider = ({
  children,
}) => (
  <>
    {children}
  </>
);
