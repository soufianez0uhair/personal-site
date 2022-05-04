import React from 'react'

import Folder from '../components/Folder'

import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <Link to="/portfolio">
        <Folder name="portfolio" />
      </Link>
        <Folder name="about" />
        <Folder name="contact" />
    </div>
  )
}
