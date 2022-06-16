import { usePage as useMainUsePage } from '@inertiajs/inertia-react';
import { IPageProps } from '@/App/interfaces';
import { Page } from '@inertiajs/inertia';

function usePage<PageProps extends IPageProps>() {
  return useMainUsePage<Page<PageProps>>();
}

export default usePage;
