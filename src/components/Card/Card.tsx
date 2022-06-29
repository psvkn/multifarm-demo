import { FC, ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  children: ReactNode;
};

export const Card: FC<Props> = ({ children }) => (
  <div className={styles.card}>{children}</div>
);
