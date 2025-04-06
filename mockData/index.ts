import AutumnImage from '/public/images/autumn.jpg'

import { IBlogPost } from '@/entities/blogPost/model/types'
import { ICourse } from '@/entities/course'
import { IUser, UserRole } from '@/entities/user/model/types'

const initialUser: IUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  role: UserRole.STUDENT,
  level: 2,
  experience: 450,
  maxExperience: 1000,
  gold: 350,
  avatar: 'https://avatars.githubusercontent.com/u/1234567',
  preferences: {
    theme: 'light',
    notifications: true,
  },
}

const coursesList: ICourse[] = [
  {
    id: '1',
    title: 'Basics',
    description:
      'Learn the basics of crypto trading. This course is for very beginners (No prior knowledge is required). During this course you will learn how to make your first trade, how to read charts and how to use different trading tools. Additionally you will learn how to manage your risk and how to set up your trading account in one of the most popular exchanges like.',
    difficulty: 'easy',
    experienceGained: 100, // This should be calculated based on the data from the lessons user have completed within this course
    maxExperiencePoints: 300,
    lessonsCount: 3,
    lessons: [
      {
        id: 'lesson1',
        title: 'Introduction to Crypto Trading',
        description:
          'In this lesson you will learn what is crypto trading and how it works. You will also learn about the most popular exchanges and how to choose the right one for you.',
        stepsAmount: 3,
        stepsCompleted: 0, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 50, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 100,
        status: 'unlocked',
      },
      {
        id: 'lesson2',
        title: 'Technical Analysis',
        description:
          'In this lesson you will learn how to read charts and how to use different trading tools. You will also learn how to make your first trade.',
        stepsAmount: 7,
        stepsCompleted: 0, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 70, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 350,
        status: 'unlocked',
      },
    ],
  },
  {
    id: '3',
    title: 'Indicators',
    description:
      'Learn how to use different indicators to improve your trading. This course is for intermediate traders. During this course you will learn how to use different indicators like RSI, MACD, Bollinger Bands and many more. You will also learn how to create your own trading strategy and how to backtest it.',
    difficulty: 'medium',
    experienceGained: 150, // This should be calculated based on the data from the lessons user have completed within this course
    maxExperiencePoints: 600,
    lessonsCount: 12,
    lessons: [
      {
        id: 'lesson1.2',
        title: 'RSI Indicator',
        description:
          'In this lesson you will learn how to use RSI indicator to improve your trading. You will also learn how to create your own trading strategy using RSI and how to backtest it.',
        stepsAmount: 12,
        stepsCompleted: 3, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 95, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 600,
        status: 'unlocked',
      },
      {
        id: 'lesson2.2',
        title: 'MAO Indicator',
        description:
          'In this lesson you will learn how to use MAO indicator to improve your trading. You will also learn how to create your own trading strategy using MAO and how to backtest it.',
        stepsAmount: 13,
        stepsCompleted: 1, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 60, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 580,
        status: 'unlocked',
      },
    ],
  },
  {
    id: '4',
    title: 'Indicators',
    description:
      'Learn how to use different indicators to improve your trading. This course is for intermediate traders. During this course you will learn how to use different indicators like RSI, MACD, Bollinger Bands and many more. You will also learn how to create your own trading strategy and how to backtest it.',
    difficulty: 'medium',
    experienceGained: 150, // This should be calculated based on the data from the lessons user have completed within this course
    maxExperiencePoints: 600,
    lessonsCount: 12,
    lessons: [
      {
        id: 'lesson1.2',
        title: 'RSI Indicator',
        description:
          'In this lesson you will learn how to use RSI indicator to improve your trading. You will also learn how to create your own trading strategy using RSI and how to backtest it.',
        stepsAmount: 12,
        stepsCompleted: 3, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 95, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 600,
        status: 'unlocked',
      },
      {
        id: 'lesson2.2',
        title: 'MAO Indicator',
        description:
          'In this lesson you will learn how to use MAO indicator to improve your trading. You will also learn how to create your own trading strategy using MAO and how to backtest it.',
        stepsAmount: 13,
        stepsCompleted: 1, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 60, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 580,
        status: 'unlocked',
      },
    ],
  },
  {
    id: '5',
    title: 'Indicators',
    description:
      'Learn how to use different indicators to improve your trading. This course is for intermediate traders. During this course you will learn how to use different indicators like RSI, MACD, Bollinger Bands and many more. You will also learn how to create your own trading strategy and how to backtest it.',
    difficulty: 'medium',
    experienceGained: 150, // This should be calculated based on the data from the lessons user have completed within this course
    maxExperiencePoints: 600,
    lessonsCount: 12,
    lessons: [
      {
        id: 'lesson1.2',
        title: 'RSI Indicator',
        description:
          'In this lesson you will learn how to use RSI indicator to improve your trading. You will also learn how to create your own trading strategy using RSI and how to backtest it.',
        stepsAmount: 12,
        stepsCompleted: 3, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 95, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 600,
        status: 'unlocked',
      },
      {
        id: 'lesson2.2',
        title: 'MAO Indicator',
        description:
          'In this lesson you will learn how to use MAO indicator to improve your trading. You will also learn how to create your own trading strategy using MAO and how to backtest it.',
        stepsAmount: 13,
        stepsCompleted: 1, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 60, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 580,
        status: 'unlocked',
      },
    ],
  },
  {
    id: '6',
    title: 'Indicators',
    description:
      'Learn how to use different indicators to improve your trading. This course is for intermediate traders. During this course you will learn how to use different indicators like RSI, MACD, Bollinger Bands and many more. You will also learn how to create your own trading strategy and how to backtest it.',
    difficulty: 'medium',
    experienceGained: 150, // This should be calculated based on the data from the lessons user have completed within this course
    maxExperiencePoints: 600,
    lessonsCount: 12,
    lessons: [
      {
        id: 'lesson1.2',
        title: 'RSI Indicator',
        description:
          'In this lesson you will learn how to use RSI indicator to improve your trading. You will also learn how to create your own trading strategy using RSI and how to backtest it.',
        stepsAmount: 12,
        stepsCompleted: 3, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 95, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 600,
        status: 'unlocked',
      },
      {
        id: 'lesson2.2',
        title: 'MAO Indicator',
        description:
          'In this lesson you will learn how to use MAO indicator to improve your trading. You will also learn how to create your own trading strategy using MAO and how to backtest it.',
        stepsAmount: 13,
        stepsCompleted: 1, // This should be calculated based on the data from the steps user have completed within this lesson
        experienceGained: 60, // This should be calculated based on the data from the steps user have completed within this lesson
        maxExperience: 580,
        status: 'unlocked',
      },
    ],
  },
]

const initialBlogArticles: IBlogPost[] = [
  {
    id: 'blog-1',
    title: 'Understanding Market Cycles',
    description: 'Learn how markets move in cycles and how to position yourself accordingly',
    dateAdded: '2023-10-15',
    author: 'Sarah Johnson',
    rating: 4.8,
    blogBgImage: AutumnImage,
    alt: 'Chart showing market cycles',
    importance: 'high',
    topic: 'Market Analysis',
  },
  {
    id: 'blog-2',
    title: 'Risk Management for Beginners',
    description: 'Essential rules for protecting your trading capital',
    dateAdded: '2023-10-10',
    author: 'Michael Chen',
    rating: 4.5,
    blogBgImage: AutumnImage,
    alt: 'Graph representing risk management',
    importance: 'high',
    topic: 'Risk Management',
  },
  {
    id: 'blog-3',
    title: 'The Psychology of Trading',
    description: 'How emotions affect your trading decisions',
    dateAdded: '2023-10-05',
    author: 'Emily Williams',
    rating: 4.6,
    blogBgImage: AutumnImage,
    alt: 'Silhouette of a thinking trader',
    importance: 'medium',
    topic: 'Psychology',
  },
]

// const initialNewsItems: NewsItem[] = [
//   {
//     id: 'news-1',
//     title: 'New Educational Series Launch',
//     content: 'We are excited to announce our new series on cryptocurrency trading',
//     type: ContentType.NEWS,
//     dateAdded: '2023-10-17',
//     author: {
//       id: 'author-1',
//       name: 'Sarah Johnson',
//       avatar: 'https://avatars.githubusercontent.com/u/7654321',
//       rating: 4.9,
//     },
//   },
//   {
//     id: 'news-2',
//     title: '50% Discount on Advanced Courses',
//     content: 'Limited time offer: Get 50% off on all advanced trading courses',
//     type: ContentType.PROMOTION,
//     dateAdded: '2023-10-16',
//     author: {
//       id: 'admin',
//       name: 'Trading Academy',
//       avatar: 'https://avatars.githubusercontent.com/u/9876543',
//       rating: 5.0,
//     },
//   },
//   {
//     id: 'news-3',
//     title: 'Market Analysis: Global Trends',
//     content: 'In-depth analysis of current global market trends and opportunities',
//     type: ContentType.ARTICLE,
//     dateAdded: '2023-10-14',
//     author: {
//       id: 'author-2',
//       name: 'Michael Chen',
//       avatar: 'https://avatars.githubusercontent.com/u/2345678',
//       rating: 4.7,
//     },
//   },
// ]

export { initialUser, coursesList, initialBlogArticles }
