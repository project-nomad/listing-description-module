import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import TheSpace from './TheSpace.jsx';
import InteractionWithGuests from './InteractionWithGuests.jsx';


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

class Details extends React.Component {
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
              {this.props.theSpaceParagraphs.map( (paragraph, idx) => (
                  <TheSpace 
                    key={idx}
                    ltr={paragraph} 
                  />
                ))
              }
            </Div>
          </div>
          <div style={{marginTop: 16 + 'px'}} >
            <Div className='the-overview'>
              <span>Interaction with guests</span>
            </Div>
            <Div className='the-overview'>
              {this.props.InteractionWithGuests.map( (paragraph, idx) => (
                  <InteractionWithGuests 
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

export default Details;

Details.propTypes = {
  theSpaceParagraphs: PropTypes.array.isRequired,
  InteractionWithGuests: PropTypes.array.isRequired,
};