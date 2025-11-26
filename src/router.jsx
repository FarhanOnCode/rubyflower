// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Bouquets from "./pages/Bouquets";
import BridalMandap from "./pages/BridalMandap";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import seo from "../public/seo-meta.json";

const applySEO = (title, desc) => {
    document.title = title;

    let meta = document.querySelector("meta[name='description']");
    if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.append(meta);
    }
    meta.setAttribute("content", desc);
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => {
                    applySEO(seo.title_home, seo.desc_home);
                    return null;
                }
            },
            {
                path: "/bouquets",
                element: <Bouquets />,
                loader: () => {
                    applySEO(seo.title_bouquets, seo.desc_bouquets);
                    return null;
                }
            },
            {
                path: "/bridal-mandap",
                element: <BridalMandap />,
                loader: () => {
                    applySEO(seo.title_mandap, seo.desc_mandap);
                    return null;
                }
            },
            {
                path: "/events",
                element: <Events />,
                loader: () => {
                    applySEO(seo.title_events, seo.desc_events);
                    return null;
                }
            },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> }
        ]
    }
]);
