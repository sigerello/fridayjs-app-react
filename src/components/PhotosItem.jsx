import * as React from 'react'
import {Overlay} from './Overlay'

export const PhotosItem = ({match, history, meetup, backUrl}) => {
  let {photoId} = match.params
  let photo = meetup.photos.find(el => el.id === parseInt(photoId))

  return (
    <div className="photos-item">
      <Overlay {...{history, backUrl}}>
        <div className="image">
          <img src={photo.link} alt=""/>
        </div>
      </Overlay>
    </div>
  )
}
