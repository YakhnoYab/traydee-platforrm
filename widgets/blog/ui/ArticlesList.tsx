import { IBlogPost } from '@/entities/blogPost/model/types'
import { BlogPostCard } from '@/entities/blogPost/ui/BlogPost'

export interface IArticlesListProps {
  articlesList: IBlogPost[]
}

export const ArticlesList = ({ articlesList }: IArticlesListProps) => {
  return articlesList.map((article: IBlogPost, index: number) => {
    return <BlogPostCard blogPost={article} key={article.id} />
  })
}
