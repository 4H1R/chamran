import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

import AppLayout from '@/Layouts/AppLayout';
const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default;
    if (!page.layout) {
      page.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
    }
    return page;
  },

  setup({ el, App, props }) {
    const root = createRoot(el);

    return root.render(
      <React.StrictMode>
        <Toaster />
        <HelmetProvider>
          <App {...props} />
        </HelmetProvider>
      </React.StrictMode>
    );
  },
});

InertiaProgress.init({ color: '#2563eb', showSpinner: true });
