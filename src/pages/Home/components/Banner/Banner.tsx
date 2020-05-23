import React, { FC } from 'react';
import { t } from '../../../../i18n';
import banner_image from '../../../../utils/images/banner.svg';
import oval_image from '../../../../utils/images/banner-oval.svg';

// imports
import './banner.scss';

export interface BannerProps { }

const BannerInternal = () => {
  return <div className={'banner'}>
    <Description />
    <Image />
  </div>;
};

const Description = () => {
  return (
    <div className={'banner-description'}>
      <h1 className={'banner-description-title'}>{t('banner:title')}</h1>
      <p className={'banner-description-text'}>{t('banner:description')}</p>
      <div className={'banner-description-buttons'}>
        <button className={'banner-description-getStarted'}>{t('banner:get_started')}</button>
        <button className={'banner-description-watchVideo'}>
          <span className={'banner-description-icon'}></span>
          {t('banner:watch_video')}
        </button>
      </div>
    </div>
  )
}

const Image = () => {
  return (
    <figure className={'banner-image'}>
      <img className={'banner-image-oval'} src={oval_image} alt={'banner:image_banner'} title={'image_banner'} />
      <img className={'banner-imagem-people'} src={banner_image} alt={'image_oval'} title={'image_oval'} />
    </figure>
  )
}

const Banner: FC<BannerProps> = () => {
  return (
    <BannerInternal />
  )
}

export default Banner;