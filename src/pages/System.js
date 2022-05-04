import React from 'react'

import Folder from '../components/Folder'

import {Link} from 'react-router-dom'

export default function System() {
  return (
      <Link to="/home">
         <Folder folderClass="folder--home" name="home" />
      </Link>
  )
}
