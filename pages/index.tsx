import cn from 'classnames';
import { LanguageSwitcher } from 'next-export-i18n';

import { useTranslate } from '@/utils/hooks/useTranslate';

import styles from '../styles/Home.module.css';

export default function Home() {
  const { t } = useTranslate();
  return (
    <div className={styles.container}>
      <p className="text-sm text-themeGreen">{t('myKey')}</p>
      <p>{t('nested.key')}</p>
      <p className={cn(styles.redText)}>{t('myTemplate', { count: 100 })}</p>

      <LanguageSwitcher lang="cn">切换到中文</LanguageSwitcher>
      <br />
      <LanguageSwitcher lang="en">切换到英文</LanguageSwitcher>
    </div>
  );
}
