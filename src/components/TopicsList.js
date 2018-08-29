import * as React from 'react'

export const TopicsList = ({topics}) => {
  return (
    <div className="topics-list">
      {topics.map(topic => (
        <div className="topics-list-item" key={topic.id}>
          <div className="image">
            <img src={topic.photo} alt=""/>
          </div>
          <div className="content">
            <h3 className="title">{topic.title}</h3>
            <div className="speaker">Докладчик: {topic.speaker}</div>

            {(topic.slides || topic.video) && (
              <div className="links">
                {topic.slides && <a href={topic.slides} target="_blank">Слайды</a>}
                {topic.video && <a href={topic.video} target="_blank">Видео</a>}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
