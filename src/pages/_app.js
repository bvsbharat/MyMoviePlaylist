import React from "react";
import { ToastProvider, useToasts } from "react-toast-notifications";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import { wrapper } from "../redux";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <ToastProvider>
                <Component {...pageProps} />;
            </ToastProvider>
        </div>
    );
}

export default wrapper.withRedux(MyApp);
