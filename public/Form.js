class Form extends React.Component {
  state= {
    tournament_name: "",
    tournament_type:"",
    tournament_level:"",
    tournament_date: "",
    player_pos1: "",
    player_pos2: "",
    player_pos3: "",
    player_pos4: "",
    player_pos5: "",
    player_pos6: "",
    player_pos7: "",
    player_pos8: "",
    player_pos9: "",
    player_pos10: "",
    player_pos11: "",
    player_pos12: ""
  }
onInputChange = (event) => {
  event.preventDefault()
  this.setState({
    [event.target.name]: event.target.value
  })
}



onFormSubmit = (event) => {
  event.preventDefault()
  axios.post("/tournament",{
    tournament_name:this.state.tournament_name,
    tournament_type:this.state.tournament_type,
    tournament_level:this.state.tournament_level,
    tournament_date:this.state.tournament_date,
    player_pos1: this.state.player_pos1,
    player_pos2: this.state.player_pos2,
    player_pos3: this.state.player_pos3,
    player_pos4: this.state.player_pos4,
    player_pos5: this.state.player_pos5,
    player_pos6: this.state.player_pos6,
    player_pos7: this.state.player_pos7,
    player_pos8: this.state.player_pos8,
    player_pos9: this.state.player_pos9,
    player_pos10: this.state.player_pos10,
    player_pos11: this.state.player_pos11,
    player_pos12: this.state.player_pos12
  })
  .then((response) => {
    console.log(response);
  })
}

  render = () => {
    return (
      <details>
        <form className="form-container" onSubmit= {this.onFormSubmit}>
          <label>
          Tournament Name:
            <input type="text" onChange= {this.onInputChange} name="tournament_name" value= {this.state.tournament_name}/>
          </label>
          <label>
          Tournament Type:
            <input type="text" onChange= {this.onInputChange} name="tournament_type" value= {this.state.tournament_type}/>
          </label>
          <label>
          Tournament Level:
            <input type="text" onChange= {this.onInputChange} name="tournament_level" value= {this.state.tournament_level}/>
          </label>
          <label>
          Tournament Date:
            <input type="text" onChange= {this.onInputChange} name="tournament_date" value= {this.state.tournament_date}/>
          </label>
          <label>
          Player 1:
            <input type="text" onChange= {this.onInputChange} name="player_pos1" value= {this.state.player_pos1}/>
          </label>
          <label>
          Player 2:
            <input type="text" onChange= {this.onInputChange} name="player_pos2" value= {this.state.player_pos2}/>
          </label>
          <label>
          Player 3:
            <input type="text" onChange= {this.onInputChange} name="player_pos3" value= {this.state.player_pos3}/>
          </label>
          <label>
          Player 4:
            <input type="text" onChange= {this.onInputChange} name="player_pos4" value= {this.state.player_pos4}/>
          </label>
          <label>
          Player 5:
            <input type="text" onChange= {this.onInputChange} name="player_pos5" value= {this.state.player_pos5}/>
          </label>
          <label>
          Player 6:
            <input type="text" onChange= {this.onInputChange} name="player_pos6" value= {this.state.player_pos6}/>
          </label>
          <label>
          Player 7:
            <input type="text" onChange= {this.onInputChange} name="player_pos7" value= {this.state.player_pos7}/>
          </label>
          <label>
          Player 8:
            <input type="text" onChange= {this.onInputChange} name="player_pos8" value= {this.state.player_pos8}/>
          </label>
          <label>
          Player 9:
            <input type="text" onChange= {this.onInputChange} name="player_pos9" value= {this.state.player_pos9}/>
          </label>
          <label>
          Player 10:
            <input type="text" onChange= {this.onInputChange} name="player_pos10" value= {this.state.player_pos10}/>
          </label>
          <label>
          Player 11:
            <input type="text" onChange= {this.onInputChange} name="player_pos11" value= {this.state.player_pos11}/>
          </label>
          <label>
          Player 12:
            <input type="text" onChange= {this.onInputChange} name="player_pos12" value= {this.state.player_pos12}/>
          </label>
          <input type="submit" value="Add new tournament"/>
        </form>

      </details>
    )
  }
}
