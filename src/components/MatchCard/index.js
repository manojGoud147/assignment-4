const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, venue, matchStatus} = matchDetails
  return (
    <div>
      <li>
        <img src={competingTeamLogo} alt={competingTeam} />
        <h1>{competingTeam}</h1>
        <p>{venue}</p>
        <p>{matchStatus}</p>
      </li>
    </div>
  )
}
export default MatchCard
