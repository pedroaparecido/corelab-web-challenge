import { ReactNode } from "react";

import styles from './Icone.module.scss'
import { AiFillStar } from "react-icons/ai";

interface IIcone {
    onClick: () => void,
}
  
  const IconeStar = (props: IIcone) => {
    return (
        <button onClick={props.onClick} className={styles.Icone}>
            <AiFillStar />
        </button>
    )
  };
  
  export default IconeStar;
  