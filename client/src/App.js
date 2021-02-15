import React, { Component } from "react"
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentDidMount() {
    let url = `http://localhost:5000/slides`
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let slides = data.map((slide, index) => {
          return (
            <Carousel.Item interval={1000} key={index}>
              <img
                className="d-block w-100 img"
                src={slide.image}
                alt="First slide"
              />
              <Carousel.Caption className="black">
                <p>{slide.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>

          )
        })
        this.setState({slides: slides});
      })
  }
 
  render() {
  return (
    <div className="App" style={{backgroundColor: "darkgrey"}}>
      <Carousel nextLabel='Next' prevLabel='Previous'>
        {this.state.slides}
      </Carousel>
    </div>
  )
}
}

export default App;