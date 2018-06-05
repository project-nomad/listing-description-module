import React from 'react';
import axios from 'axios';
import Details from './Details.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      theSpace: [],
      guestAccess: [],
      interactionWithGuests: [],
      otherThingsToNote: []
    };
  }

  componentDidMount() {

    axios.get('/overview/listingId/1')
    .then((results) => {
      let theSpacePg = results.data[0].theSpace.split('\n\n');
      let guestAccessPg = results.data[0].guestAccess.split('\n\n');
      let interactionWithGuestsPg = results.data[0].interactionWithGuests.split('\n\n');
      let otherThingsToNotePg = results.data[0].otherThingsToNote.split('\n\n');

      this.setState({
        overview: results.data[0],
        theSpace: theSpacePg,
        guestAccess: guestAccessPg,
        interactionWithGuests: interactionWithGuestsPg,
        otherThingsToNote: otherThingsToNotePg,
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
            <Details 
              overview={this.state.overview} 
              theSpaceParagraphs={this.state.theSpace} 
              guestAccess={this.state.guestAccess}
              interactionSection={this.state.interactionWithGuests}
              otherThingsToNote={this.state.otherThingsToNote}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
