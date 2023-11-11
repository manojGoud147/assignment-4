// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const dataObject = await response.json()
    const data = dataObject.teams
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamData: formattedData})
  }

  render() {
    const {teamData} = this.state
    return (
      <div className="home-container">
        <div className="name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        <div>
          <ul>
            {teamData.map(eachTeam => (
              <li>
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
