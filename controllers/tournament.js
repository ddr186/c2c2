const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM tournament ORDER BY id ASC;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
  // console.log(req.body, "======");
    postgres.query(`INSERT INTO tournament (tournament_name, tournament_type,tournament_level,tournament_date, player_pos1, player_pos2, player_pos3, player_pos4, player_pos5, player_pos6, player_pos7, player_pos8, player_pos9, player_pos10, player_pos11, player_pos12) VALUES ('${req.body.tournament_name}', '${req.body.tournament_type}', '${req.body.tournament_level}', '${req.body.tournament_date}', '${req.body.player_pos1}', '${req.body.player_pos2}', '${req.body.player_pos3}', '${req.body.player_pos4}', '${req.body.player_pos5}', '${req.body.player_pos6}', '${req.body.player_pos7}', '${req.body.player_pos8}', '${req.body.player_pos9}', '${req.body.player_pos10}', '${req.body.player_pos11}', '${req.body.player_pos12}')`, (err, results) => {
        postgres.query('SELECT * FROM tournament ORDER BY id ASC;', (err, results) => {
          // console.log(results);
          if (err){
            res.status(404).send('err message')
          }else{
            res.json(results.rows)
          }

        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM tournament WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM tournament ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    let column;
    let player;
    switch(req.body.column){
      case "player1":
        column="player_pos1";
        player=req.body.player
        break;
      case "player2":
        column="player_pos2";
        player=req.body.player
        break;
      case "player3":
        column="player_pos3";
        player=req.body.player
        break;
      case "player4":
        column="player_pos4";
        player=req.body.player
        break;
      case "player5":
        column="player_pos5";
        player=req.body.player
        break;
      case "player6":
        column="player_pos6";
        player=req.body.player
        break;
      case "player7":
        column="player_pos7";
        player=req.body.player
        break;
      case "player8":
        column="player_pos8";
        player=req.body.player
        break;
      case "player9":
        column="player_pos9";
        player=req.body.player
          break;
      case "player10":
        column="player_pos10";
        player=req.body.player
        break;
      case "player11":
        column="player_pos11";
        player=req.body.player
        break;
      case "player12":
        column="player_pos12";
        player=req.body.player
        break;  
      default:
        column= "";
    }
    console.log(req.body, "hi from edit===========");
    postgres.query(`UPDATE tournament SET ${column} = '${player}' WHERE id = ${req.params.id};`, (err, results) => {
      if (err){
        res.status(404).send('update error')
      }else{
        postgres.query('SELECT * FROM tournament ORDER BY id ASC;', (err, results) => {
          if (err){
            res.status(404).send('select error')
          }else{
            console.log(results.rows, "successful update");
            res.json(results.rows)
          }

        });
      }

    })
});

module.exports = router;

// , PLAYER_POS2 = '${req.body.player_pos2}', PLAYER_POS3 = '${req.body.player_pos3}', PLAYER_POS4 = '${req.body.player_pos4}', PLAYER_POS5 = '${req.body.player_pos5}', PLAYER_POS6 = '${req.body.player_pos6}', PLAYER_POS7 = '${req.body.player_pos7}', PLAYER_POS8 = '${req.body.player_pos8}', PLAYER_POS9 = '${req.body.player_pos9}', PLAYER_POS10 = '${req.body.player_pos10}', PLAYER_POS11 = '${req.body.player_pos11}', PLAYER_POS12 = '${req.body.player_pos12}')
