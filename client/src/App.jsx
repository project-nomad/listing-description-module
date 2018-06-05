import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      s1: [],
      s2: [],
      s3: [],
      s4: []
    };
  }

  componentDidMount() {

    axios.get('/overview/listingId/1')
    .then((results) => {
      let s1 = results.data[0].theSpace.split('\n\n');
      let s2 = results.data[0].guestAccess.split('\n\n');
      let s3 = results.data[0].interactionWithGuests.split('\n\n');
      let s4 = results.data[0].otherThingsToNote.split('\n\n');

      this.setState({
        overview: results.data[0],
        s1: s1,
        s2: s2,
        s3: s3,
        s4: s4,
      })
    })
    .catch((error) => {
      throw error;
    })
  }

  render() {
    return ( 
      <div>
        <div>
          <div>
            <Overview 
              overview={this.state.overview} 
              section1={this.state.s1} 
              section2={this.state.s2}
              section3={this.state.s3}
              section4={this.state.s4}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
