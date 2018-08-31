import * as React from 'react'
import {Link} from 'react-router-dom'
import {BgImage} from './BgImage'

export const PhotosList = ({photos, match}) => {
  return (
    <div className="photos-list">
      <div className="row">
        {photos.map((photo, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <Link to={`${match.url}/photos/${photo.id}`} className="photos-list-item">
              <div className="image-container">
                <BgImage src={photo.link}/>
              </div>
              <div className="more-details">Увеличить</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
