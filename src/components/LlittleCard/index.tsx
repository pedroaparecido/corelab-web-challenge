import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card}>
      <h2>Título</h2>
    </div>
  );
};

export default Card;
