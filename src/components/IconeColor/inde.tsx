import React from 'react';
import styles from './Icone.module.scss';
import { AiOutlineBgColors } from "react-icons/ai";
import ColorItem from "../Color";

interface IIcone {
  onClick: () => void;
}

const colors = ['red', 'green', 'blue'];

const IconeColor: React.FC<IIcone> = (props) => {

  const setColor = (color: string) => {
    document.documentElement.style.setProperty('--bg-color', color);
  }

  const setTheme = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement
    const currentColor = window.getComputedStyle(target).getPropertyValue('--bg-color')
    console.log(currentColor);
  }

  return (
    <button className={styles.Icone}>
      <div className={styles.list}>
        {colors.map((color, idx) => 
          <ColorItem key={idx} color={color} setColor={setColor} />
        )}
      </div>
      <AiOutlineBgColors />
    </button>
  );
};

export default IconeColor;
