
class App extends React.Component {
  state = {
    tournaments: []
  }

componentDidMount = () => {
  this.getTournaments()
}

componentDidUpdate = () => {
  this.getTournaments()
}



getTournaments = () => {
  axios.get('/tournament')
  .then((response) => {
    this.setState({
      tournaments: response.data
    })
  })
}

  render = () => {
    return (
      <div className="App">
      <div className="img-header">
        <div style={{display: "flex", flexDirection: "column"}}>
          <h3>Create A New Tournament</h3>
          <Form/>
        </div>
        <img className="main-img" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/80023687_2848551931844740_2060397512421801984_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=-CEjdp4UT-0AX-ijeur&_nc_ht=scontent.fapa1-2.fna&oh=12850b3f6965ece1812a1d5fcc69c9eb&oe=5FBB3CBA" alt=""/>
      </div>
      <List tournaments = {this.state.tournaments}/>
      </div>
    )
  }

}

ReactDOM.render(
   <App></App>,
   document.querySelector('main')
)
