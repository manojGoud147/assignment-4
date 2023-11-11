import './index.css'

const LatesMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchDetails
  return (
    <div>
      <div>
        <h1>{competingTeam}</h1>
      </div>
    </div>
  )
}
export default LatesMatch
