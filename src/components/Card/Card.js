import React from "react";
import styles from "./Card.module.css";




const Card = ({
  
  character: { name, image, status, species, origin, episode, url, location },
}) => {
  return (
    <section className={styles["card"]}>
      <div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                <a href={url}>{name}</a>
              </p>
            </div>
          </div>

          <div className="content">
            <ul>
              <li>{species} - {status}</li>
              <li>Origin: <a href={origin.url}>{origin.name}</a></li>
              <li>Last location: <a href={location.url}>{location.name}</a></li>
              <li>Episodes: {episode.length}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
