import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
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
        <p>Segue ai 👌&nbsp;<a href="#">github/Pdro-marqss</a></p>
        <p>
          <a href="#">#React</a>&nbsp;
          <a href="#">#Typescript</a>&nbsp;
          <a href="#">#OuterWilds</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}