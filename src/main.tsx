import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from "@sentry/react";

const sentryDsn = import.meta.env.VITE_SENTRY_DSN;

if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    // setting this option to true will send default PII data to Sentry.
    // for example, automatic IP address collection on events
    sendDefaultPii: true
  });
} else {
  console.warn("VITE_SENTRY_DSN no está definido. Sentry no se inicializó.");
}

createRoot(document.getElementById('root')!).render(
  <App />
)
