import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface iAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export function Avatar({ hasBorder = true, ...props }: iAvatarProps) {
  const hasBorderProp = hasBorder !== false;

  return (
    <img
      className={hasBorderProp ? styles.avatarWithBorder : styles.avatar}
      // Aqui dentro das props temos o src e alt já. Ele esta dentro da extensão de ImgHtmlAttributes
      {...props}
    />
  );
}