import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

interface ICard {
  onChange: (e: any) => any
}

const Card = (props: ICard) => {



  return (
    <div className={styles.Card}>
      <input type="text" placeholder="Título" onChange={e => e.target.value}></input>
      <textarea typeof="text" placeholder="Clique ou arraste o arquivopara esta área para fazer upload" onChange={e => e.target.value}></textarea>
    </div>
  );
};

export default Card;
