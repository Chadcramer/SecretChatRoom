import React from 'react';
import Axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { colorArray: [] }
  }

  componentDidMount(){
    // update colorArray state with all colors
    Axios.get('/image')
    .then(response => {
      console.log(response.data);
      this.setState({ colorArray: response.data });
    })
  }

  handleClick () {
    console.log('clickclack');
    // change state to display color
  }


  render () {
    return ( 
      // 84 Rows
      <div className="wrapper">
        {this.state.colorArray.map((color, key) => {
          const divStyle = {
            backgroundColor: color,
          };
          return <span className="box" key={key} onClick={this.handleClick} style={divStyle}> </span>
        })}
    </div>

    )}
}

export default App;