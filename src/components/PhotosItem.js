import * as React from 'react'
import {Overlay} from './Overlay'

export const PhotosItem = ({match, history, meetup, backUrl}) => {
  let {photoIdx} = match.params
  let photo = meetup.photos[photoIdx]

  return (
    <div className="photos-item">
      <Overlay {...{history, backUrl}}>
        <div className="image">
          <img src={photo} alt=""/>
        </div>
      </Overlay>
    </div>
  )
}
