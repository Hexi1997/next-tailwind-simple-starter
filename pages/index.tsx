import { LanguageSwitcher, useLanguageQuery, useTranslation } from 'next-export-i18n';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div className={styles.container}>
      <p>{t('myKey')}</p>
      <p>{t('nested.key')}</p>
      <p>{t('myTemplate',{count:100})}</p>

      <LanguageSwitcher lang="cn">切换到中文</LanguageSwitcher>
      <br />
      <LanguageSwitcher lang="en">切换到英文</LanguageSwitcher>
    </div>
  )
}
