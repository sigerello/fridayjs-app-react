import * as React from 'react'
import {Route} from 'react-router-dom'
import {MeetupService} from '../lib/MeetupService'
import {TopicsList} from './TopicsList'
import {PhotosList} from './PhotosList'
import {PhotosItem} from './PhotosItem'

export const MeetupsItem = ({match}) => {
  let meetups = MeetupService.findAll()
  let {meetupId} = match.params
  let meetup = meetups.find(el => el.id === parseInt(meetupId))
  let currentUrl = match.url

  return (
    <div className="meetups-item">
      <div className="container">

        <h2 className="section-title">{meetup.title}</h2>
        <div className="date">{meetup.date}</div>

        <h3 className="section-subtitle">Доклады:</h3>
        <TopicsList topics={meetup.topics}/>

        <h3 className="section-subtitle">Фото:</h3>
        <PhotosList photos={meetup.photos} {...{match}}/>

        <Route path={`${match.url}/:photoIdx`} render={
          ({match, location, history}) => <PhotosItem {...{match, location, history}} meetup={meetup} backUrl={currentUrl}/>
        }/>
      </div>
    </div>
  )
}








