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

    this.state = {meetup: null, error: false}
    this.loadData()
  }

  async loadData() {
    let {match} = this.props
    let {meetupId} = match.params

    try {
      this.setState({meetup: await MeetupService.findOne(meetupId)})
    } catch(error) {
      this.setState({error: true})
    }
  }

  render() {
    let {match, location} = this.props
    let currentUrl = match.url

    return (
      <TransitionGroup>
        {this.state.error && (
          <NotFound/>
        )}

        {!this.state.meetup && !this.state.error && (
          <CSSTransition key="loading" classNames="fade-in" timeout={300} appear={true}>
            <Loading/>
          </CSSTransition>
        )}

        {this.state.meetup && (
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








