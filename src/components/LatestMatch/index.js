// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatesLatestMatch = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    id: latestMatchDetails.id,
    firstInnings: latestMatchDetails.first_innings,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    venue: latestMatchDetails.venue,
    umpires: latestMatchDetails.umpires,
  }

  return (
    <div className="latest-match-cart">
      <div className="latest-match-details-container">
        <div className="latest-match-container">
          <div className="match-details-section">
            <p className="match-title">{updatesLatestMatch.competingTeam}</p>
            <p className="match-date">{updatesLatestMatch.date}</p>
            <p className="text-size">{updatesLatestMatch.venue}</p>
            <p className="text-size">{updatesLatestMatch.result}</p>
          </div>
          <img
            src={updatesLatestMatch.competingTeamLogo}
            alt={`latest match ${updatesLatestMatch.competingTeam}`}
            className="match-image"
          />
        </div>
        <hr className="hr-line" />
        <div className="innings-cart">
          <h1 className="innings">First Innings</h1>
          <p className="text-size">{updatesLatestMatch.firstInnings}</p>
          <h1 className="innings">Second Innings</h1>
          <p className="text-size">{updatesLatestMatch.secondInnings}</p>
          <h1 className="match-umpire">Man of The Match</h1>
          <p className="text-size">{updatesLatestMatch.manOfTheMatch}</p>
          <h1 className="match-umpire">Umpires</h1>
          <p className="text-size">{updatesLatestMatch.umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
