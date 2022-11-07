import { useTranslation } from 'next-export-i18n';
type TransFunc = (key: string, params?: object) => string;
export function useTranslate() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const t: TransFunc = useTranslation().t;
  return { t };
}
