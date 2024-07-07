import { ReactNode } from "react";

import styles from './Icone.module.scss'
import { AiOutlineBgColors } from "react-icons/ai";

interface IIcone {
    onClick: () => void,
}
  
  const IconeColor = (props: IIcone) => {
    return (
        <button className={styles.Icone}>
            <AiOutlineBgColors />
        </button>
    )
  };
  
  export default IconeColor;
  