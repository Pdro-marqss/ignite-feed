import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1685883093168-2774d75fd9cf?q=40&w=250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem de capa do usuário"
        width={256}
        height={82}
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/Pdro-marqss.png"
          alt="Imagem de perfil"
          width={60}
          height={60}
        />

        <strong>Pedro Marques</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}