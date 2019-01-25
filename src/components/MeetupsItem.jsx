import * as React from 'react'
import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {MeetupService} from '../lib/MeetupService'
import {Loading} from './Loading'
import {TopicsList} from './TopicsList'
import {PhotosList} from './PhotosList'
import {PhotosItem} from './PhotosItem'
import {NotFound} from './NotFound'

export class MeetupsItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      meetup: null,
      loading: false,
      error: false,
    }
  }

  componentDidMount() {
    let {meetupId} = this.props.match.params

    this.loadData(meetupId)
  }

  componentDidUpdate(prevProps) {
    let previousMeetupId = prevProps.match.params.meetupId
    let meetupId = this.props.match.params.meetupId

    if (meetupId !== previousMeetupId) {
      this.loadData(meetupId)
    }
  }

  async loadData(meetupId) {
    try {
      this.setState({loading: true, meetup: null})

      let meetup = await MeetupService.findOne(meetupId)
      this.setState({loading: false, meetup})

    } catch(error) {
      this.setState({loading: false, meetup: null, error: true})
    }
  }

  render() {
    let {match, location} = this.props
    let currentUrl = match.url
    let {meetup, loading, error} = this.state

    return (
      <TransitionGroup>
        {error && (
          <NotFound/>
        )}

        {loading && (
          <CSSTransition key="loading" classNames="fade-in" timeout={300} appear={true}>
            <Loading/>
          </CSSTransition>
        )}

        {meetup && (
          <CSSTransition key="meetups-item" classNames="fade-in" timeout={300} appear={true}>
            <div className="meetups-item">
              <div className="container">
                <h2 className="section-title">{this.state.meetup.title}</h2>
                <div className="date">{this.state.meetup.date}</div>

                <h3 className="section-subtitle">Доклады:</h3>
                <TopicsList topics={this.state.meetup.topics}/>

                <h3 className="section-subtitle">Фото:</h3>
                <PhotosList photos={this.state.meetup.photos} {...{match}}/>

                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="overlay-slide" timeout={300} appear={true}>
                    <Switch location={location}>
                      <Route path={`${match.url}/photos/:photoId`}
                             render={({match, history}) => (
                               <PhotosItem {...{match, history}} meetup={this.state.meetup} backUrl={currentUrl}/>
                             )}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    )
  }
}








