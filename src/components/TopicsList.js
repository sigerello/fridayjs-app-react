import * as React from 'react'

export const TopicsList = ({topics}) => {
  return (
    <div className="topics-list">
      {topics.map(topic => {
        let showLinks = topic.slides || topic.video
        let showSeparator = topic.slides && topic.video
        let style = {backgroundImage: `url(${topic.photo})`}

        return (
          <div className="topics-list-item" key={topic.id}>
            <div className="image-container d-none d-sm-block">
              <div className="image" style={style}/>
            </div>
            <div className="content">
              <h4 className="title">{topic.title}</h4>
              <h5 className="speaker">{topic.speaker}</h5>

              {showLinks && (
                <div className="links">
                  {topic.slides && <a href={topic.slides} target="_blank">Слайды</a>}

                  {showSeparator && <span className="separator">&middot;</span>}

                  {topic.video && <a href={topic.video} target="_blank">Видео</a>}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
