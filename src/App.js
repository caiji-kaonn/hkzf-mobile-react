import React, { Component, Fragment } from 'react'
import Layout  from './components/Layout/index';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import My from './pages/My'
import News from './pages/News'
export default class App extends Component {
  render () {
    return (
      <Fragment>
        <div>
           <Router>
             <Route path='/' exact render={()=><Layout><Home/></Layout>}></Route>
             <Route path='/List' exact render={()=><Layout><List/></Layout>}></Route>
             <Route path='/News' exact render={()=><Layout><News/></Layout>}></Route>
             <Route path='/My' exact render={()=><Layout><My/></Layout>}></Route>
           </Router>
        </div>
      </Fragment>
    )
  }
}


