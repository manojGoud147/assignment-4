import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ipl/:id" component={TeamMatches} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
