import { initialBlogArticles } from '@/mockData'
import { ArticlesList } from '@/widgets/blog'

export default function BlogPage() {
  return (
    <>
      <ArticlesList articlesList={initialBlogArticles} />
    </>
  )
}
