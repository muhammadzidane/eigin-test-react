// React
import React from "react";

// Ant
import { ConfigProvider } from "antd";

// Theme
import theme from "./theme";

// Interfaces
import { type IAntConfigProviderProps } from "./interfaces";

const AntConfigProvider: React.FC<IAntConfigProviderProps> = ({ children }) => (
  <ConfigProvider theme={theme}>{children}</ConfigProvider>
);

export default AntConfigProvider;
