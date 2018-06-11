import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import Overview from './Overview.jsx';
import Highlights from './Highlights.jsx';
import Summary from './Summary.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangements from './SleepingArrangements.jsx';

const Div2h22gn = Styled.div`
  margin-left: -8px !important;
  margin-right: -8px !important;
  box-sizing: border-box;
`;
const Div1kzvqab3 = Styled.div`
  padding-left: 8px !important;
  padding-right: 8px !important;
  min-height: 1px !important;
  position: relative !important;
  box-sizing: border-box;
`;
const Div76irmj = Styled.div`
  border-bottom: 1px solid #DBDBDB !important;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: [],
      loc: '',
      ln: '',
      lb: '',
      intro: [],
      s1: [],
      s2: [],
      s3: [],
      s4: [],
      br: '',
      bd: '',
      ba: '',
      gs: '',
      sleep: [],
    };
  }

  componentDidMount() {
    axios.get('/overview/listingId/1')
      .then((results) => {
        const loc = results.data[0].neighborhood;
        const ln = results.data[0].listingName;
        const lb = results.data[0].listingBlurb;
        const intro = results.data[0].summary.split('\n\n');
        const s1 = results.data[0].theSpace.split('\n\n');
        const s2 = results.data[0].guestAccess.split('\n\n');
        const s3 = results.data[0].interactionWithGuests.split('\n\n');
        const s4 = results.data[0].otherThingsToNote.split('\n\n');
        const br = results.data[0].noOfBedrooms;
        const bd = results.data[0].noOfBeds;
        const ba = results.data[0].noOfBaths;
        const gs = results.data[0].noOfGuests;
        const hh1 = results.data[0].homeHighlights1;
        const hh2 = results.data[0].homeHighlights2;
        const hh3 = results.data[0].homeHighlights3;

        this.setState({
          loc,
          ln,
          lb,
          overview: results.data[0],
          intro,
          s1,
          s2,
          s3,
          s4,
          br,
          bd,
          ba,
          gs,
          hh1,
          hh2,
          hh3,
        });
      })
      .catch((error) => {
        throw error;
      });
    axios.get('/sleepingdetails/listingId/1')
      .then((results) => {
        const sleep = results.data;
        this.setState({
          sleep,
        });
      });
  }

  render() {
    return (
      <Div2h22gn className='2h22gn'>
        <Div1kzvqab3 className='1kzvqab3'>
          <div>
            <div>
              <Summary
                listingName={this.state.ln}
                listingBlurb={this.state.lb}
                location={this.state.loc}
                noOfBedrooms={this.state.br}
                noOfBeds={this.state.bd}
                noOfBath={this.state.ba}
                noOfGuests={this.state.gs}
              />
              <Highlights
                homeHighlight1={this.state.hh1}
                homeHighlight2={this.state.hh2}
                homeHighlight3={this.state.hh3}
              />
              <Overview
                intro={this.state.intro}
                section1={this.state.s1}
                section2={this.state.s2}
                section3={this.state.s3}
                section4={this.state.s4}
              />
            </div>
              {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
            <div>
              {/* Amenities */}
              <Amenities />
            </div>
            {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
            <div>
              {/* Sleeping Arrangements */}
              <SleepingArrangements
                sleep={this.state.sleep}
              />
            </div>
            {/* dividing line */}
            <div style={{ marginTop: '24px', marginBottom: '24px' }}>
              <Div76irmj className='76irmj'></Div76irmj>
            </div>
          </div>
        </Div1kzvqab3>
      </Div2h22gn>
    );
  }
}

export default App;
