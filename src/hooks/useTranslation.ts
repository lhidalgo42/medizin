import { useLanguageContext } from '@/app/components';

export const useTranslation = () => {
  const { t } = useLanguageContext();
  return { t };
};