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

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório para postar um comentário.')
  }

  function deleteComment(comment: string) {
    console.log(`Deletar comentário: ${comment}`);

    const commentsWithoutDeletedOne: string[] | undefined = comments.filter(item => item !== comment);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty: boolean = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            hasBorder={true}
            alt="Imagem de avatar do usuário"
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
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
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
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}