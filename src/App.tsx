import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

import './global.css';
import styles from './App.module.css';

import { iPost } from './models/interfaces/post.interface';

const posts: iPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Pdro-marqss.png',
      name: 'Pedro Marques',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👹' },
      { type: 'paragraph', content: 'To fazendo mais um projeto do curso da róqueti. Samalaleico my friends' },
      { type: 'link', content: 'github/Pdro-marqss' }
    ],
    publishedAt: new Date('2025-03-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guigotheworld.png',
      name: 'Guilherme Brito',
      role: 'Game Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 🐧' },
      { type: 'paragraph', content: 'Fiz um joguinho novo. Da uma conferida aqui e deixa o feedback :D' },
      { type: 'link', content: 'itchio/gatekeeper' }
    ],
    publishedAt: new Date('2025-03-28 19:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
