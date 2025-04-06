import { StaticImageData } from 'next/image'

export interface IBlogPost {
  id: string
  title: string
  description: string
  dateAdded: string
  author: string
  rating: number
  importance: 'low' | 'medium' | 'high'
  topic: string
  blogBgImage: string | StaticImageData
  alt: string
}
