import React from 'react'

export default function File(props) {
  return (
    <div className={`file ${props.fileClass}`}>
        <img src="./img/file.png" className="file__img" />
        <h2 className="file__name">{props.name}</h2>
    </div>
  )
}
