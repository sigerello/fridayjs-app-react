import * as React from 'react'
import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {MeetupsList} from './MeetupsList'
import {MeetupsItem} from './MeetupsItem'

export const App = () => (
  <Router>
    <Fragment>
      <header>
        <div className="container">
          <Link to="/" className="logo"/>
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={MeetupsList}/>
          <Route path="/meetups" exact component={MeetupsList}/>
          <Route path="/meetups/:meetupId" component={MeetupsItem}/>
        </Switch>
      </main>
    </Fragment>
  </Router>
)
