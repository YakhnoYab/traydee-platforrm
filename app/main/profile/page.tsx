'use client'

import { ProfileSettings } from '@/widgets/profile-settings/ui/ProfileSettings'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ProfilePage() {
  // const router = useRouter()
  // const searchParams = useSearchParams()
  // const username = searchParams.get('username')

  // useEffect(() => {
  //   if (!username) {
  //     router.push('/main/profile/default')
  //   }
  // }, [username, router])

  return (
    <div>
      <h1>Profile of Name</h1>
      <ProfileSettings />
    </div>
  )
}
