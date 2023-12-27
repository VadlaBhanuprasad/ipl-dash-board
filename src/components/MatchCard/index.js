import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  console.log(matchDetails)
  const {matchStatus} = matchDetails
  const status = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card">
      <img
        src={matchDetails.competingTeamLogo}
        alt={`competing team ${matchDetails.competingTeam}`}
        className="match-image-cart"
      />
      <p className="match-name">{matchDetails.competingTeam}</p>
      <p className="match-result">{matchDetails.result}</p>
      <p className={`match-status ${status}`}>{matchDetails.matchStatus}</p>
    </li>
  )
}
export default MatchCard
