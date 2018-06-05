import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';


const Div = Styled.div`
    font-weight: 600 !important;
    color: #484848 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    margin: 0px !important;
    word-wrap: break-word !important;
    font-size: 16px !important;
    line-height: 22px !important;
    letter-spacing: normal !important;
`;

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="details" >
        <div>
          <div>
            <Div className='the-overview'>
              <span>The space</span>
            </Div>
            <Div className='the-overview'>
              {this.props.section1.map( (paragraph, idx) => (
                  <Section1 
                    key={idx}
                    ltr={paragraph} 
                  />
                ))
              }
            </Div>
          </div>
          <div style={{marginTop: 16 + 'px'}} >
            <Div className='the-overview'>
              <span>Guest access</span>
            </Div>
            <Div className='the-overview'>
              {this.props.section2.map( (paragraph, idx) => (
                  <Section2 
                    key={idx}
                    ltr={paragraph} 
                  />
                ))
              }
            </Div>
            <Div className='the-overview'>
              <span>Interaction with guests</span>
            </Div>
            <Div className='the-overview'>
              {this.props.section3.map( (paragraph, idx) => (
                  <Section3 
                    key={idx}
                    ltr={paragraph} 
                  />
                ))
              }
            </Div>
            <Div className='the-overview'>
              <span>Other things to note</span>
            </Div>
            <Div className='the-overview'>
              {this.props.section4.map( (paragraph, idx) => (
                  <Section4 
                    key={idx}
                    ltr={paragraph} 
                  />
                ))
              }
            </Div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;

Overview.propTypes = {
  section1: PropTypes.array.isRequired,
  section2: PropTypes.array.isRequired,
  section3: PropTypes.array.isRequired,
  section4: PropTypes.array.isRequired,
};