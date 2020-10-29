

class Tournament extends React.Component {
  state = {
    player: "",
    column: ""
  }

editPlayer = (event) => {
  event.preventDefault()
  this.setState({
    player: event.target.value,
    column: event.target.name
  })
}

handleSubmit = (event) => {
  event.preventDefault()
  axios.put(`/tournament/${this.props.id}`, {column: this.state.column, player:this.state.player})
  .then((response) => {
    console.log(response.data);
  })
}

  // const [player, setPlayer] = useState("");
    render = () => {


      return (
      <div className="tournament-container">
        <h3>{this.props.tournament_name}</h3>
        <p>Type: {this.props.tournament_type}</p>
        <p>Level {this.props.tournament_level}</p>
        <p>Date: {this.props.tournament_date}</p>
          <details>
            <form className="form-container" onSubmit={this.handleSubmit}>Team Roster
              <option>
              Player1: {this.props.player_pos1}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos1"/>
              <input type="submit" value="submit"/>

              <option>
              Player2: {this.props.player_pos2}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos2"/>
              <input type="submit" value="submit"/>

              <option>
              Player3: {this.props.player_pos3}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos3"/>
              <input type="submit" value="submit"/>

              <option>
              Player4: {this.props.player_pos4}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos4"/>
              <input type="submit" value="submit"/>

              <option>
              Player5: {this.props.player_pos5}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos5"/>
              <input type="submit" value="submit"/>

              <option>
              Player6: {this.props.player_pos6}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos6"/>
              <input type="submit" value="submit"/>

              <option>
              Player7: {this.props.player_pos7}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos7"/>
              <input type="submit" value="submit"/>

              <option>
              Player8: {this.props.player_pos8}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos8"/>
              <input type="submit" value="submit"/>

              <option>
              Player9: {this.props.player_pos9}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos9"/>
              <input type="submit" value="submit"/>

              <option>
              Player10: {this.props.player_10}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos10"/>
              <input type="submit" value="submit"/>

              <option>
              Player11: {this.props.player_pos11}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos11"/>
              <input type="submit" value="submit"/>

              <option>
              Player12: {this.props.player_pos12}
              </option>
              <input type="text" value={this.state.player} onChange={this.editPlayer} name="player_pos12"/>
              <input type="submit" value="submit"/>
            </form>
          </details>
      </div>
    )
  }
}
