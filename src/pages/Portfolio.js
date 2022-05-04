import React from 'react'

import Project from '../components/Project'


export default function Portfolio() {
  return (
    <div className="portfolio">
        <a target="_blank" href="https://github.com/soufianez0uhair/quiz-app">
          <Project img="./img/quiz-app.gif" name="quiz-app" />
        </a>
        <a target="_blank" href="https://github.com/soufianez0uhair/tech-blog">
          <Project img="./img/tech-blog.gif" name="tech-blog" />
        </a>
        <a target="_blank" href="https://github.com/soufianez0uhair/cv-app">
          <Project img="./img/cv-app.gif" name="quiz-app" />
        </a>
        <a target="_blank" href="https://github.com/soufianez0uhair/movie-app">
          <Project img="./img/movie-app.gif" name="movie-app" />
        </a>
    </div>
  )
}
