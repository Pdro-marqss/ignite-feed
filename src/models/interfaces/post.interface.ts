export interface iPost {
  id: number,
  author: iAuthor,
  content: iContent[],
  publishedAt: Date
}

interface iAuthor {
  avatarUrl: string,
  name: string,
  role: string,
}

interface iContent {
  type: string,
  content: string,
}