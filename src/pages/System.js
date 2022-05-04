import React from 'react'

import Folder from '../components/Folder'
import File from '../components/File'
import {Link} from 'react-router-dom'

export default function System() {
  return (
    <div className="system">
      <Link to="/home">
         <Folder folderClass="folder--home" name="home" />
      </Link>
      <a href="https://github.com/soufianez0uhair" target="_blank"><File name="github.exe" fileClass="file--github" /></a>
    </div>
  )
}
