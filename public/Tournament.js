

const Tournament = (props) => {
    return (
      <div className="tournament-container">
        <h3>{props.tournament_name}</h3>
        <p>Type: {props.tournament_type}</p>
        <p>Level {props.tournament_level}</p>
        <p>Date: {props.tournament_date}</p>
          <select>
            <option>Team Roster</option>
            <option>Player1: {props.player_pos1}</option>
            <option>Player2: {props.player_pos2}</option>
            <option>Player3: {props.player_pos3}</option>
            <option>Player4: {props.player_pos4}</option>
            <option>Player5: {props.player_pos5}</option>
            <option>Player6: {props.player_pos6}</option>
            <option>Player7: {props.player_pos7}</option>
            <option>Player8: {props.player_pos8}</option>
            <option>Player9: {props.player_pos9}</option>
            <option>Player10: {props.player_pos10}</option>
            <option>Player11: {props.player_pos11}</option>
            <option>Player12: {props.player_pos12}</option>
            </select>
      </div>
    )
}
