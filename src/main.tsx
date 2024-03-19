// React redux + toolkit
import { Provider } from "react-redux";

// React Router DOM
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

// Provider
import { AppRouter } from "@/features/app/components/base";

// Plugins
import AntConfigProvider from "@/plugins/ant";
import { persistor, store } from "./plugins/redux";
import "@/plugins/moment";

import { PersistGate } from "redux-persist/integration/react";

// Tailwind CSS
import "@/assets/styles/tailwind/index.css";

// Ant design
import "@/assets/styles/antd/index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AntConfigProvider>
          <AppRouter />
        </AntConfigProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
