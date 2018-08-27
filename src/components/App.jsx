import * as React from 'react'
import {Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {MeetupsList} from './MeetupsList'
import {MeetupsItem} from './MeetupsItem'

export const App = () => (
  <Router>
    <Fragment>
      <header>
        <Link to="/" className="logo"/>
        <div className="bar"/>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={MeetupsList}/>
          <Route path="/meetups" exact component={MeetupsList}/>
          <Route path="/meetups/:id" component={MeetupsItem}/>
        </Switch>
      </main>
      <footer>
        <div className="copy">&copy; {(new Date().getFullYear())} FridayJS</div>
      </footer>
    </Fragment>
  </Router>
)
