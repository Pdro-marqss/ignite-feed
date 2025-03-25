import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.Post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/Pdro-marqss.png" alt="Imagem de avatar do usuário" />
          <div className={styles.authorInfo}>
            <strong>Pedro Marques</strong>
            <span>Software Enginner</span>
          </div>
        </div>

        <time title='23 de março ás 23:00h' dateTime="2025-03-23 23:00:30">Publicado há 1 dia</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👹</p>
        <p>To fazendo mais um projeto do curso da róqueti. Samalaleico my friends</p>
        <p><a href="#">segue ai 👌 github/Pdro-marqss</a></p>
        <p><a href="#">#React #Typescript #OuterWilds</a></p>
      </div>
    </article>
  )
}