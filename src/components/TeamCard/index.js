// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCart} = props
  const {id, name, teamImageUrl} = teamCart
  return (
    <li className="team-container">
      <Link to={`/team-matches/${id}`} className="link-card">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
