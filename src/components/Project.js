import React from 'react'

export default function Project(props) {
  return (
    <div className="project">
        <img src={props.img} className="project__img" />
        <h2 className="project__name">{props.name}</h2>
    </div>
  )
}
