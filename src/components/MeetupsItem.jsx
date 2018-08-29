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
      <h1 className="title">{meetup.title}</h1>
      <div className="date">
        <span className="label">Дата:</span>
        <span className="value">{meetup.date}</span>
      </div>

      <h2 className="subtitle">Доклады:</h2>
      <TopicsList topics={meetup.topics}/>

      <h2 className="subtitle">Фото:</h2>
      <PhotosList photos={meetup.photos} {...{match}}/>

      <Route path={`${match.url}/:photoIdx`} render={
        ({match, location, history}) => <PhotosItem {...{match, location, history}} meetup={meetup} backUrl={currentUrl}/>
      }/>
    </div>
  )
}








