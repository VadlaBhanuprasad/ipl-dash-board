// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

let bgColor
class TeamMatches extends Component {
  state = {
    latestMatch: '',
    recentPlayedMatches: [],
    bannerImage: '',
    color: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  updatedRecentMatchesList = recentMatches => {
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({recentPlayedMatches: updatedRecentMatches, isLoading: false})
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedMatchData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {recentMatches, latestMatchDetails, teamBannerUrl} = updatedMatchData
    const matches = this.updatedRecentMatchesList(recentMatches)
    this.setState({
      bannerImage: teamBannerUrl,
      latestMatch: latestMatchDetails,
      isLoading: false,
    })

    switch (id) {
      case 'RCB':
        bgColor = 'RCB'
        break
      case 'CSK':
        bgColor = 'CSK'
        break
      case 'KKR':
        bgColor = 'KKR'
        break
      case 'RR':
        bgColor = 'RR'
        break
      case 'MI':
        bgColor = 'MI'
        break
      case 'SH':
        bgColor = 'SH'
        break
      case 'DC':
        bgColor = 'DC'
        break
      case 'KXP':
        bgColor = 'KXP'
        break
      default:
    }
    this.setState({color: bgColor})
  }

  render() {
    const {
      latestMatch,
      recentPlayedMatches,
      bannerImage,
      color,
      isLoading,
    } = this.state

    return (
      <div className={`match-container ${color}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <>
            <img src={bannerImage} alt="team banner" className="banner-image" />
            <p className="latest-matches">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatch} />
            <ul className="matches-card-container">
              {recentPlayedMatches.map(eachItem => (
                <MatchCard matchDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
