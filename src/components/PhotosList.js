import {Link} from 'react-router-dom'
import * as React from 'react'

export const PhotosList = ({photos, match}) => {
  return (
    <div className="photos-list">
      <div className="row">
        {photos.map((photo, i) => {
          let style = {backgroundImage: `url(${photo})`}

          return (
            <div className="col-12 col-sm-6 col-md-4" key={i}>
              <Link to={`${match.url}/${i}`} className="photos-list-item">
                <div className="image" style={style}/>
                <div className="more-details">Увеличить</div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
