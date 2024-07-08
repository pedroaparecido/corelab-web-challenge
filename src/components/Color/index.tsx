import React from 'react';
import styles from './Color.module.scss';

interface IColor {
  color: string;
  setColor: (color: string) => void;
}

const ColorItem: React.FC<IColor> = (props) => (
  <div id='colour' className={styles.colorItem} onClick={() => props.setColor(props.color)} style={{ backgroundColor: props.color }}></div>
);

export default ColorItem;
