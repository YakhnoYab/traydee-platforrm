import { Course, ICourse } from '@/entities/course'

export interface ICoursesListProps {
  courses: ICourse[]
}

export function CoursesList({ courses }: ICoursesListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {courses.map((course: ICourse, index) => {
        return <Course key={index} course={course} />
      })}
    </div>
  )
}
