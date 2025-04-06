import Image from 'next/image'
import { IBlogPost } from '../model/types'

export interface IBlogPostCardProps {
  blogPost: IBlogPost
}

export const BlogPostCard = ({ blogPost }: IBlogPostCardProps) => {
  return (
    <div className='p-2 rounded-lg hover:bg-slate-400 hover:bg-opacity-10 transition-all duration-300'>
      <div className=''>
        <Image src={blogPost.blogBgImage} alt={blogPost.alt} width={250} height={250} />
      </div>
      <h3 className='text-xl'>{blogPost.title}</h3>
      <p className='text-md font-poppins'>{blogPost.description}</p>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center gap-2'>
          <span>by {blogPost.author}</span>
          <span>Updated {blogPost.dateAdded}</span>
        </div>
        <div className='flex items-center gap-2'>
          <span>{blogPost.topic}</span>
          <span>{blogPost.rating}</span>
          <span>{blogPost.importance}</span>
        </div>
      </div>
    </div>
  )
}
