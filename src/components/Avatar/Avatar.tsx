import styles from './Avatar.module.css';

interface iAvatarProps {
  src: string,
  hasBorder: boolean
}

export function Avatar({ hasBorder = true, src }: iAvatarProps) {
  const hasBorderProp = hasBorder !== false;

  return (
    <img
      className={hasBorderProp ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt='Imagem de avatar do usuário'
    />
  );
}