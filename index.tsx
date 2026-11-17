import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { languageFromPath } from './seo/config';
import './styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// The language comes from the URL only, so the client matches the prerendered HTML.
const app = (
  <React.StrictMode>
    <App initialLang={languageFromPath(window.location.pathname)} />
  </React.StrictMode>
);

if (rootElement.firstElementChild) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  // Dev server: index.html has no prerendered markup.
  ReactDOM.createRoot(rootElement).render(app);
}
