import React from 'react'
import { useParams } from 'react-router-dom'
const Profile = () => {
  const params = useParams()
  return (
    // for this we have to import useParams
    <div>
     parameter as user into Profile
     user name  : {params.username}
    </div>
  )
}

export default Profile
