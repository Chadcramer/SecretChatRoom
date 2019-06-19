import React from 'react';
// import ReactDOM from 'react-dom';
import Axios from 'axios';


// import { Row, Col } from 'antd';

// testing

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
          return <div className="box" key={key} onClick={this.handleClick} style={divStyle}> </div>
        })}
    </div>

    )}
}

export default App;