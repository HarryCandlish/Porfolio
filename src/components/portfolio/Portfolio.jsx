import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
  id: 1,
  image: IMG1,
  title: 'BOOKS',
  description: 'Lorem Ipsum is simply dummy text of the printing and typese',
  github: 'https://github.com',
  demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ANIMALS',
    description: 'Lorem Ipsum is simply dummy text of the printing and typese',
    github: 'https://github.com',
    demo: '#'
    },
    {
      id: 3,
      image: IMG3,
      title: 'WRITING',
      description: 'Lorem Ipsum is simply dummy text of the printing and typese',
      github: 'https://github.com',
      demo: '#'
      }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>The</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
          {
            data.map(({id, image, title, github, demo, description}) => {
             return (
              <article className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title}/>
              </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="portfolio_item-cta">
                  <a href={github}>Github</a>
                  <p>|</p>
                  <a href={demo}>Website</a>
                  </div>
            </article>
            )
          }
        )
        }
      </div>
    </section>
  )
}

export default Portfolio