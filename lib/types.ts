export interface AELIABlogPost {
  title: string
  date: string
  author: string
  categories: string[]
  excerpt: string
  slug: string
  body: string
}

export interface NewsArticle {
  title: string
  date: string
  author: string
  categories: string[]
  excerpt: string
  slug: string
  body: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  body: string
}

export interface ContactForm {
  name: string
  phone: string
  message: string
}
