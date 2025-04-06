import { ICourse } from '@/entities/course'
import { coursesList } from '@/mockData'
import { CoursesList } from '@/widgets/courses-list'

export default function LearnPage() {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>Continue learning</h1>
      <p className='text-md text-csGrey font-poppins'>
        Pick up where you left off with your courses or start something new.
      </p>
      <CoursesList courses={coursesList} />
    </div>
  )
}
