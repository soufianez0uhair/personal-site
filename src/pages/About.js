import React from 'react'

import {Link} from 'react-router-dom'

export default function About() {
  return (
    <div className="about">
        <p className="about__text">
            I'm Soufiane ZOUHAIR, a web developer focusing on frontend engineering. I'm a FSAC computer science student but driven by passion and most of my knowledge is self-taught as I know being a self-learner in this industry is crucial. I'm open for work opportunities as I value team work experience so I can improve my skills and participate in a company's growth. <Link to="/contact" className="btn--contact">Contact me.</Link>
        </p>
    </div>
  )
}
