import Head from '@/Shared/Common/Head';
import React from 'react';

function AboutUs() {
  const title = 'درباره ما';

  return (
    <div className="space-y-4">
      <Head title={title} description={title} />
    </div>
  );
}

export default AboutUs;
