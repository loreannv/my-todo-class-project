import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5ee4e6a1fdcce1466d8eb4dfa17295c8@o4510450093981696.ingest.us.sentry.io/4510450097717248",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

createRoot(document.getElementById('root')!).render(
  <App />
)
