create table tournament (id SERIAL,
tournament_name varchar(255),
tournament_type varchar(255),
tournament_level varchar(255),
tournament_date date,
player_pos1 text,
player_pos2 text,
player_pos3 text,
player_pos4 text,
player_pos5 text,
player_pos6 text,
player_pos7 text,
player_pos8 text,
player_pos9 text,
player_pos10 text,
player_pos11 text,
player_pos12 text);

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('Colorado Ice Breaker', 'SOCO', 'D', '02/20/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('Spring Break Bash', 'SOCO', 'E', '03/21/2021', 'Sean Winter', 'Devon White', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'Hinkle');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('Unlimited Dingers', 'Utrip', 'D', '04/25/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('SOCO de Mayo', 'SOCO', 'D', '05/05/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('Summer Classic', 'USSSA', 'D', '07/02/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('State Wars', 'SOCO', 'D', '08/30/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('SOCO de Mayo', 'SOCO', 'D', '05/05/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('SOCO Food Drive', 'SOCO', 'D', '10/15/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

INSERT INTO tournament (tournament_name, tournament_type, tournament_level, tournament_date,player_pos1,player_pos2,player_pos3,player_pos4,player_pos5,player_pos6,player_pos7,player_pos8,player_pos9,player_pos10,player_pos11,player_pos12 ) VALUES
('**Las Vegas Worlds**', 'Utrip', 'D', '12/03/2021', 'Sean Winter', 'Lane Winter', 'Cody Schawe', 'Ryan Warner', 'Matt Salmons', 'Alex Alstott', 'Zayne Parker', 'RJ', 'Sean Gruis', 'Alan Griep', 'Daniel Della-Rose', 'AJ');

create table players (id SERIAL,
  player_name VARCHAR(255),
  player_number varchar(255),
  player_pos varchar(255));


  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Sean Winter','35','player coach');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Lane Winter','22','right center');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Cody Schawe','31','second base');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Ryan Warner','99','right field');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Matt Salmons','91','short stop');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Alex Alstott','10','left center');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Zayne Parker','9','sub');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('RJ','11','pitcher');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Sean Gruis','5','catcher');
  INSERT INTO players (player_name, player_number, player_pos) VALUES
  ('Alan Griep','2','sub');
