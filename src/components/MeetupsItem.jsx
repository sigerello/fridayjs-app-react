import * as React from 'react'
import {MeetupService} from '../lib/MeetupService'

export const MeetupsItem = (props) => {
  let meetups = MeetupService.findAll()
  let {id} = props.match.params
  let meetup = meetups.find(el => el.id === parseInt(id))
  let topics = meetup.topics

  let imagesData = require('../assets/pic*.jpg')
  let images = Object.values(imagesData)
  let image = images[0]

  return (
    <div className="meetups-item">
      <h1 className="title">{meetup.title}</h1>
      <div className="date">
        <span className="label">Дата:</span>
        <span className="value">{meetup.date}</span>
      </div>
      <div className="topics-list">
        {topics.map(topic => (
          <div className="topics-list-item" key={topic.id}>
            <div className="image">
              <img src={image} alt=""/>
            </div>
            <div className="content">
              <h3 className="title">{topic.title}</h3>
              <div className="speaker">Докладчик: {topic.speaker}</div>

              {(topic.slides || topic.video) && (
                <div className="links">
                  {topic.slides && <a href={topic.slides}>Слайды</a>}
                  {topic.video && <a href={topic.video}>Видео</a>}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
