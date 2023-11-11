import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <div>
        <li className="listItem">
          <img src={teamImageUrl} alt={name} />
          <h1>{name}</h1>
        </li>
      </div>
    </Link>
  )
}
export default TeamCard
