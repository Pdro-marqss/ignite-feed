import { iPost } from "../models/interfaces/post.interface"

export const posts: iPost[] = [
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
    publishedAt: new Date('2025-03-31 20:00:00'),
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