import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'



class TeamMatches extends Component {
  state = {teamMatchesData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }
  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const dataObject = await response.json()
    const fromattedData = {
      teamBannerUrl: dataObject.team_banner_url,
      latestMatch: this.getFormattedData(dataObject.latest_match_details),
      recentMatches: dataObject.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch)
      ),
    }
    this.setState({teamMatchesData: fromattedData , isLoading: false})
  }

  renderRecentMatchesList = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData

    return (
      <ul>
        {recentMatches.map(recentMatch => (
          <MatchCard matchDetails={recentMatch} key={recentMatch.id}/>
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesData

    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatch}/>
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderLoader = () => {
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50}/>
    </div>
  }

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
}

}
export default TeamMatches
