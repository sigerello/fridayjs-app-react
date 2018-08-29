import {Link} from 'react-router-dom'
import * as React from 'react'

export const PhotosList = ({photos, match}) => {
  return (
    <div className="photos-list">
      {photos.map((photo, i) => {
        let style = {backgroundImage: `url(${photo})`}

        return (
          <Link to={`${match.url}/${i}`} className="photos-list-item" key={i}>
            <div className="image" style={style}/>
          </Link>
        )
      })}
    </div>
  )
}
