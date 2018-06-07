import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import HideButton from './HideButton.jsx';

const SumDiv = Styled.div`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 22px;
  color: #484848;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
`;
const MainDiv = Styled.div`
  transform: translateY(0px) !important;
  opacity: 1 !important;
  transition: -ms-transform 304ms ease-out, -webkit-transform 304ms ease-out, transform 304ms ease-out, opacity 304ms ease-out !important;
`;
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
const ButtonInLineStyle = {
  marginTop: '8px',
  marginBottom: '24px',
};

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.hideOverview = this.hideOverview.bind(this);
  }

  hideOverview() {
    this.setState(prevState => ({
      display: !prevState.display,
    }));
  }

  render() {
    return (
      <div id="details">
        <SumDiv className='the-intro'>
          {this.props.summary}
        </SumDiv>
        <div style={{ marginTop: '16px' }}>
          <MainDiv style={{ display: this.state.display ? 'block' : 'none' }} >
            <div>
              <Div className='the-space'>
                <span>The space</span>
              </Div>
              <Div className='the-space'>
                {this.props.section1.map((paragraph, idx) => (
                    <Section1
                      key={idx}
                      ltr={paragraph}
                    />
                  ))
                }
              </Div>
              <Div className='the-guest-access'>
                <span>Guest access</span>
              </Div>
              <Div className='the-guest-access'>
                {this.props.section2.map((paragraph, idx) => (
                    <Section2
                      key={idx}
                      ltr={paragraph}
                    />
                  ))
                }
              </Div>
              <Div className='the-interaction-with-guests'>
                <span>Interaction with guests</span>
              </Div>
              <Div className='the-interaction-with-guests'>
                {this.props.section3.map((paragraph, idx) => (
                    <Section3
                      key={idx}
                      ltr={paragraph}
                    />
                  ))
                }
              </Div>
              <Div className='the-other-things-to-note'>
                <span>Other things to note</span>
              </Div>
              <Div className='the-other-things-to-note'>
                {this.props.section4.map((paragraph, idx) => (
                    <Section4
                      key={idx}
                      ltr={paragraph}
                    />
                  ))
                }
              </Div>
            </div>
          </MainDiv>
        </div>
        <div>
          <HideButton style={ButtonInLineStyle} hideOverview={this.hideOverview}/>
        </div>
      </div>
    );
  }
}

export default Overview;

Overview.propTypes = {
  summary: PropTypes.array.isRequired,
  section1: PropTypes.array.isRequired,
  section2: PropTypes.array.isRequired,
  section3: PropTypes.array.isRequired,
  section4: PropTypes.array.isRequired,
};
