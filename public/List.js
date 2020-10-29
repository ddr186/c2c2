
const List = (props) => {
    return (
      <div className="list-container">
        {
          props.tournaments.map((item, index) => {
            return <Tournament
              id= {item.id}
              tournament_name={item.tournament_name}
              tournament_type={item.tournament_type}
              tournament_level={item.tournament_level}
              tournament_date={item.tournament_date}
              player_pos1= {item.player_pos1}
              player_pos2= {item.player_pos2}
              player_pos3= {item.player_pos3}
              player_pos4= {item.player_pos4}
              player_pos5= {item.player_pos5}
              player_pos6= {item.player_pos6}
              player_pos7= {item.player_pos7}
              player_pos8= {item.player_pos8}
              player_pos9= {item.player_pos9}
              player_pos10= {item.player_pos10}
              player_pos11= {item.player_pos11}
              player_pos12= {item.player_pos12} key={index}/>
          })
        }
      </div>
    )
}
