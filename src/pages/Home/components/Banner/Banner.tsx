import React, { FC } from 'react';
import { t } from '../../../../i18n';

// imports
import './banner.scss';

export interface BannerProps { }

const Description = () => {
  return (
    <div className={'banner-descritpiton'}>
      <h1 className={'banner-description-title'}>{t('banner:title')}</h1>
      <p className={'banner-description-text'}>{t('banner:description')}</p>
      <button className={'banner-description-getStarted'}>{t('banner:get_started')}</button>
      <button className={'banner-description-watchVideo'}>
        <span>></span>
        {t('banner:watch_video')}
      </button>
    </div>
  )
}

const Image = () => {
  return (
    <img src="#" alt="Imagem banner" title="Image banner" />

  )
}

const Banner: FC<BannerProps> = () => {
  return <div className={'banner'}>
    <Description />
    <Image />
  </div>;
};

export default Banner;