import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Overview from './Overview.jsx';
import Highlights from './Highlights.jsx';
import Summary from './Summary.jsx';

const Div_2h22gn = Styled.div`
  margin-left: -8px !important;
  margin-right: -8px !important;
  box-sizing: border-box;
`;
const Div_1kzvqab3 = Styled.div`
  padding-left: 8px !important;
  padding-right: 8px !important;
  min-height: 1px !important;
  position: relative !important;
  box-sizing: border-box;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      summary: [],
      s1: [],
      s2: [],
      s3: [],
      s4: [],
      br: 0,
      bd: 0,
      ba: 0,
      gs: 0,
    };
  }

  componentDidMount() {
    axios.get('/overview/listingId/1')
      .then((results) => {
        const summary = results.data[0].summary.split('\n\n');
        const s1 = results.data[0].theSpace.split('\n\n');
        const s2 = results.data[0].guestAccess.split('\n\n');
        const s3 = results.data[0].interactionWithGuests.split('\n\n');
        const s4 = results.data[0].otherThingsToNote.split('\n\n');
        const br = results.data[0].noOfBedrooms;
        const bd = results.data[0].noOfBeds;
        const ba = results.data[0].noOfBaths;
        const gs = results.data[0].noOfGuests;

        this.setState({
          overview: results.data[0],
          summary,
          s1,
          s2,
          s3,
          s4,
          br,
          bd,
          ba,
          gs,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    return (
      <Div_2h22gn className='2h22gn'>
        <Div_1kzvqab3 className='1kzvqab3'>
          <div>
            <div>
              <Summary />
              {/*<Highlights /> */}
              <Overview
                summary={this.state.summary}
                section1={this.state.s1}
                section2={this.state.s2}
                section3={this.state.s3}
                section4={this.state.s4}
              />
            </div>
          </div>
        </Div_1kzvqab3>
      </Div_2h22gn>
    );
  }
}

export default App;
