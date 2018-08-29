import * as React from 'react'
import {Link} from 'react-router-dom'
import {MeetupService} from '../lib/MeetupService'

export const MeetupsList = () => {
  let meetups = MeetupService.findAll()

  let imagesData = require('../assets/pic*.jpg')
  let images = Object.values(imagesData)
  let imagesCount = images.length

  return (
    <div className="meetups-list">
      <div className="container-fluid">
        <h2 className="section-title">Наши события</h2>

        <div className="row">
          {meetups.map((meetup, i) => {
            // let image = meetup.photos[0]
            let image = images[i % imagesCount]
            let style = {backgroundImage: `url(${image})`}

            return (
              <div className="col-12 col-sm-6 col-md-4" key={meetup.id}>
                <Link to={`/meetups/${meetup.id}`} className="meetups-list-item">
                  <div className="image" style={style}/>
                  <div className="info">
                    <div className="title">{meetup.title}</div>
                    <div className="date">{meetup.date}</div>
                  </div>
                  <div className="more-details">Подробнее</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
