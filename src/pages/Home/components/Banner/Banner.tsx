import React, { FC } from 'react';
import { t } from '../../../../i18n';
import banner_image from '../../../../utils/images/banner.svg';
import oval_image from '../../../../utils/images/banner-oval.svg';

// imports
import styles from './banner.module.scss';

export interface BannerProps {}

const BannerDescription: FC = () => {
  return (
    <div className={styles.banner_description}>
      <h1 className={styles.banner_description_title}>{t('banner:title')}</h1>
      <p className={styles.banner_description_text}>
        {t('banner:description')}
      </p>
      <div className={styles.banner_description_buttons}>
        <button className={styles.banner_description_getStarted}>
          {t('banner:get_started')}
        </button>
        <button className={styles.banner_description_watchVideo}>
          <span className={styles.banner_description_icon}></span>
          {t('banner:watch_video')}
        </button>
      </div>
    </div>
  );
};

const BannerImage: FC = () => {
  return (
    <figure className={styles.banner_image}>
      <img
        className={styles.banner_image_oval}
        src={oval_image}
        alt={'banner:image_banner'}
        title={'image_banner'}
      />
      <img
        className={styles.banner_image_oval}
        src={banner_image}
        alt={'image_oval'}
        title={'image_oval'}
      />
    </figure>
  );
};

const Banner: FC<BannerProps> = () => {
  return (
    <div className={styles.banner}>
      <BannerDescription />
      <BannerImage />
    </div>
  );
};

export default Banner;
