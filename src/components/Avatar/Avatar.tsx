import styles from './Avatar.module.css';

interface iAvatarProps {
  src: string;
  hasBorder: boolean;
  alt: string;
}

export function Avatar({ hasBorder = true, src, alt }: iAvatarProps) {
  const hasBorderProp = hasBorder !== false;

  return (
    <img
      className={hasBorderProp ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}