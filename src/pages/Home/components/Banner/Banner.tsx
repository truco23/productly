import React, { FC } from 'react';

// imports
import './banner.scss';

export interface BannerProps { }

const Description = () => {
  return (
    <div className={'banner-descritpiton'}>
      <h1 className={'banner-description-title'}>The Design Thinking superpowers</h1>
      <p className={'banner-description-text'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button className={'banner-description-getStarted'}>Get Started</button>
      <button className={'banner-description-watchVideo'}>
        <span>></span>
        Watch the video
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