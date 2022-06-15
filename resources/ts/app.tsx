import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

import AppLayout from '@/Layouts/AppLayout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => {
    const page = require(`./Pages/${name}`).default;
    page.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
    return page;
  },
  setup({ el, App, props }) {
    return render(
      <React.StrictMode>
        <App {...props} />
      </React.StrictMode>,
      el,
    );
  },
});

InertiaProgress.init({ color: '#4B5563' });