

class Tournament extends React.Component {
  state = {
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
    player9: "",
    player10: "",
    player11: "",
    player12: "",
    column: ""
  }

editPlayer = (event) => {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value,
    column: event.target.name
  })
}
deleteTournament = (event) => {
  axios.delete('/tournament/' + event.target.value).then(
    (response) => {
    console.log(response, "hi from delete========");
    })
}


handleSubmit = (event) => {
  event.preventDefault()
  let currentPlayer = this.state.column
  axios.put(`/tournament/${this.props.id}`, {column: this.state.column, player:this.state[currentPlayer]})
  .then((response) => {
    console.log(response.data);
  })
}

  // const [player, setPlayer] = useState("");
    render = () => {


      return (
      <div className="tournament-container">
        <p>
        <h3>{this.props.tournament_name}</h3>
        <p>Type: {this.props.tournament_type}</p>
        <p>Level {this.props.tournament_level}</p>
        <p>Date: {this.props.tournament_date}</p>
        <nav className="level is-mobile">
                   <div class="level-left">
                       <a class="level-item" aria-label="love">
                         <span class="icon is-small">
                           <i class="fa fa-heart" aria-hidden="true"></i>
                         </span>
                       </a>
                         <a class="level-item" aria-label="like">
                           <span class="icon is-small">
                             <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                             </span>
                          </a>
                           <a class="level-item" aria-label="dislike">
                             <span class="icon is-small">
                               <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                             </span>
                           </a>
                           </div>
                         </nav>
                     </p>
                <button className ="delete is-large is-outlined"
                 onClick={this.deleteTournament} value={this.props.id}>
                 </button>
          <details>
            <EditForm
            handleSubmit={this.handleSubmit}
            editPlayer={this.editPlayer}
            player_pos1= {this.props.player_pos1}
            player_pos2= {this.props.player_pos2}
            player_pos3= {this.props.player_pos3}
            player_pos4= {this.props.player_pos4}
            player_pos5= {this.props.player_pos5}
            player_pos6= {this.props.player_pos6}
            player_pos7= {this.props.player_pos7}
            player_pos8= {this.props.player_pos8}
            player_pos9= {this.props.player_pos9}
            player_pos10= {this.props.player_pos10}
            player_pos11= {this.props.player_pos11}
            player_pos12= {this.props.player_pos12}
            // changes state in tournament component
            player1={this.state.player1}
            player2={this.state.player2}
            player3={this.state.player3}
            player4={this.state.player4}
            player5={this.state.player5}
            player6={this.state.player6}
            player7={this.state.player7}
            player8={this.state.player8}
            player9={this.state.player9}
            player10={this.state.player10}
            player11={this.state.player11}
            player12={this.state.player12}/>
          </details>
      </div>
    )
  }
}
