const EditForm = (props) => {
  return (
    <form className="edit-container" onSubmit={props.handleSubmit}>Team Roster
      <option>
      Player1: {props.player_pos1}
      </option>
      <input type="text" value={props.player1} onChange={props.editPlayer} name="player1"/>
      <input type="submit" value="submit"/>

      <option>
      Player2: {props.player_pos2}
      </option>
      <input type="text" value={props.player2} onChange={props.editPlayer} name="player2"/>
      <input type="submit" value="submit"/>

      <option>
      Player3: {props.player_pos3}
      </option>
      <input type="text" value={props.player3} onChange={props.editPlayer} name="player3"/>
      <input type="submit" value="submit"/>

      <option>
      Player4: {props.player_pos4}
      </option>
      <input type="text" value={props.player4} onChange={props.editPlayer} name="player4"/>
      <input type="submit" value="submit"/>

      <option>
      Player5: {props.player_pos5}
      </option>
      <input type="text" value={props.player5} onChange={props.editPlayer} name="player5"/>
      <input type="submit" value="submit"/>

      <option>
      Player6: {props.player_pos6}
      </option>
      <input type="text" value={props.player6} onChange={props.editPlayer} name="player6"/>
      <input type="submit" value="submit"/>

      <option>
      Player7: {props.player_pos7}
      </option>
      <input type="text" value={props.player7} onChange={props.editPlayer} name="player7"/>
      <input type="submit" value="submit"/>

      <option>
      Player8: {props.player_pos8}
      </option>
      <input type="text" value={props.player8} onChange={props.editPlayer} name="player8"/>
      <input type="submit" value="submit"/>

      <option>
      Player9: {props.player_pos9}
      </option>
      <input type="text" value={props.player9} onChange={props.editPlayer} name="player9"/>
      <input type="submit" value="submit"/>

      <option>
      Player10: {props.player_10}
      </option>
      <input type="text" value={props.player10} onChange={props.editPlayer} name="player10"/>
      <input type="submit" value="submit"/>

      <option>
      Player11: {props.player_pos11}
      </option>
      <input type="text" value={props.player11} onChange={props.editPlayer} name="player11"/>
      <input type="submit" value="submit"/>

      <option>
      Player12: {props.player_pos12}
      </option>
      <input type="text" value={props.player12} onChange={props.editPlayer} name="player12"/>
      <input type="submit" value="submit"/>
    </form>
  )
}
