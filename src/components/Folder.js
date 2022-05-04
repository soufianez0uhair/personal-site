import React from 'react'

export default function Folder(props) {
  return (
    <div className={`folder ${props.folderClass}`}>
        <img src="./img/folder.png" className="folder__img" />
        <h2 className="folder__name">{props.name}</h2>
    </div>
  )
}
