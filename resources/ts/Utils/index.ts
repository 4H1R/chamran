import { APP_URL } from '@/App/config';

function asset(path: string) {
  return `${APP_URL}/assets/${path}`;
}

export { asset };
