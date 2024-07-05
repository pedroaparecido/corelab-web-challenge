import React, { ReactNode, useState } from "react";
import styles from "./Card.module.scss";
import Icone from "../Icone/inde";

import { AiFillStar } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineBgColors } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

interface IGranCard {
}

const GranCard = (props: IGranCard) => {
  const [stateColor , setStateColor] = useState(false)

  return (
    <div className={styles.GranCard}>
      <div className={styles.div1}>
        <h2>Título</h2>
        <Icone onClick={() => setStateColor(false)}>
          <AiFillStar />
        </Icone>
      </div>
      <div className={styles.div2}>
        <div className={styles.div3}>
          <Icone onClick={() => {}}>
            <AiFillEdit />
          </Icone>
          <Icone onClick={() => {}}>
            <AiOutlineBgColors />
          </Icone>
        </div>
        <div>
          <Icone onClick={() => {}}>
            <AiOutlineClose />
          </Icone>
        </div>
      </div>
    </div>
  );
};

export default GranCard;
