import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './Post.module.css';

import { iPost } from '../../models/interfaces/post.interface';

interface iPostProps {
  author: iPost["author"],
  content: iPost["content"],
  publishedAt: iPost["publishedAt"]
}

export function Post({ author, content, publishedAt }: iPostProps) {
  const [comments, setComments] = useState<string[]>([
    'Post muito bacana, hein ?!',
  ]);
  const [newComment, setNewComment] = useState<string>('');

  const publishedDateFormatted: string = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'");

  const publishedDateRelativeToNow: string = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            hasBorder={true}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if (item.type === 'link') {
            return <p><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newComment}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}