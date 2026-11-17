import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { Language } from "./types";

export { buildHead } from "./seo/head";

/** Server render used at build time to prerender "/" (fr) and "/en". */
export const render = (lang: Language): string =>
  renderToString(
    <React.StrictMode>
      <App initialLang={lang} />
    </React.StrictMode>,
  );
