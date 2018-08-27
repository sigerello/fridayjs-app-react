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
      {meetups.map((meetup, i) => {
        // let image = meetup.photos[0]
        let image = images[i % imagesCount]
        let style = {backgroundImage: `url(${image})`}

        return (
          <Link to={`/meetups/${meetup.id}`} className="meetups-list-item" key={meetup.id}>
            <div className="image" style={style}/>
            <div className="title">{meetup.title}</div>
          </Link>
        )
      })}
    </div>
  )
}
