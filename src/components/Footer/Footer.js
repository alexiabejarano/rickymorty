import React from "react";
import styles from "./Footer.module.css";
import insta from "../../assets/brand_instagram.svg";
import twitter from "../../assets/brand_twitter.svg";
import tiktok from "../../assets/brand_tiktok.svg"
import youtube from "../../assets/brand_youtube.svg";

const Icon = (props) => {
  return(
    <>
    <img src={props.thumb.img} alt={props.thumb.alt}/>
    </>
  );
};

const Footer = () => {
  const ig = {hrf:"www.instagram.com", img: insta, alt:"twitter"};
  const twttr = {hrf:"www.twitter.com", img: twitter, alt:"twitter"};
  const tktk = {hrf:"www.tiktok.com", img: tiktok, alt:"tiktok"};
  const yt = {hrf:"www.youtube.com", img: youtube, alt:"youtube"};

  return (
    <>
      <footer className={styles['top-gradient-border']}>
        <p>© adb</p>
        <div className={styles['social-media']}>
        <Icon thumb={ig}/>
        <Icon thumb={twttr}/>
        <Icon thumb={tktk}/>
        <Icon thumb={yt}/>
        </div>
      </footer>
    </>
  );
};

export default Footer