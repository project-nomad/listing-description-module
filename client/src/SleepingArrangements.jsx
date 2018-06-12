import React from 'react';
import Styled from 'styled-components';
import SleepingDetails from './SleepingDetails.jsx';

const Div1wt9k7hn = Styled.div`
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-weight: 800 !important;
  -webkit-font-smoothing: antialiased;
`;
const Div6htn2u = Styled.div`
  position: relative !important;
  z-index: 0 !important;
  box-sizing: border-box;
  display: block;
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
`;
const Div11iocrd2 = Styled.div`
  margin-top: 0px !important;
  margin-left: -8px !important;
  margin-right: -8px !important;
  overflow: hidden !important;
  box-sizing: border-box;
  display: block;
`;
const Div1w8hgual = Styled.div`
  margin-bottom: 0px !important;
  padding: 0px !important;
  overflow: visible !important;
  white-space: nowrap !important;
  display: flex !important;
  transition: -ms-transform 0.5s, -webkit-transform 0.5s, transform 0.5s !important;
  box-sizing: border-box;
`;
const Divyse9z9 = Styled.div`
  position: absolute !important;
  top: 50% !important;
  display: block !important;
  transform: translateY(-50%) !important;
  z-index: 1 !important;
  box-sizing: border-box;
`;
const H21xu9tpch = Styled.h2`
  color: inherit !important;
  font-size: 1em !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  margin: 0px !important;
  padding: 0px !important;
  display: inline !important;
`;
const Button1is458mm = Styled.button`
  display: inline-block !important;
  cursor: pointer !important;
  text-align: center !important;
  line-height: 1 !important;
  position: relative !important;
  touch-action: manipulation !important;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;
  border-radius: 50% !important;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: transparent !important;
  background: rgb(255, 255, 255) !important;
  box-sizing: border-box;
`;
const Span6qyxk5k = Styled.span`
  display: inline-block !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  color: rgb(72, 72, 72) !important;
  box-sizing: border-box;
  cursor: pointer !important;
  text-align: center !important;
  line-height: 1 !important;
`;

class SleepingArrangements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftClicksAvail: 0,
      rightClicksAvail: 0,
      scrollSize: 0,
    };
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (this.props.rightClicksAvailable !== newProps.rightClicksAvailable) {
      this.setState({
        rightClicksAvail: newProps.rightClicksAvailable,
      });
    }
  }
  leftClick() {
    this.setState(prevState => ({
      leftClicksAvail: prevState.leftClicksAvail - 1,
      rightClicksAvail: prevState.rightClicksAvail + 1,
      scrollSize: prevState.scrollSize + 33.3333,
    }));
  }
  rightClick() {
    this.setState(prevState => ({
      rightClicksAvail: prevState.rightClicksAvail - 1,
      leftClicksAvail: prevState.leftClicksAvail + 1,
      scrollSize: prevState.scrollSize - 33.3333,
    }));
  }

  render() {
    const leftButton = this.state.leftClicksAvail ? (
      <Divyse9z9 style={{ left: '-16px' }}>
        <span style={{ top: '50%' }}>
          <Button1is458mm type='button' aria-busy='false' style={{ width: '40px', height: '40px' }} onClick={this.leftClick}>
            <Span6qyxk5k style={{ fontSize: '20px' }}>
              <svg viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'currentcolor' }}>
                <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd">
                </path>
              </svg>
            </Span6qyxk5k>
          </Button1is458mm>
        </span>
      </Divyse9z9>
    ) : (null);
    const rightButton = this.state.rightClicksAvail ? (
      <Divyse9z9 style={{ right: '-16px' }}>
        <span style={{ top: '50%' }}>
          <Button1is458mm type='button' aria-busy='false' style={{ width: '40px', height: '40px' }} onClick={this.rightClick}>
            <Span6qyxk5k style={{ fontSize: '20px' }}>
              <svg viewBox="0 0 18 18" role="img" aria-label="Next" focusable="false" style={{ height: '24px', width: '24px', display: 'block', fill: 'currentcolor' }}>
                <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd">
                </path>
              </svg>
            </Span6qyxk5k>
          </Button1is458mm>
        </span>
      </Divyse9z9>
    ) : (null);

    return (
      <div>
        <div>
          <div>
            <div style={{ marginBottom: '0px' }}>
              <section>
                <div style={{ marginBottom: '16px' }}>
                  <H21xu9tpch>
                    <Div1wt9k7hn>
                      <span>Sleeping arrangments</span>
                    </Div1wt9k7hn>
                  </H21xu9tpch>
                </div>
                <Div6htn2u>
                  {leftButton}
                  <Div11iocrd2>
                    <Div1w8hgual style={{ transform: `translateX(${this.state.scrollSize}%)` }}>
                      {this.props.sleep.map((room, index) =>
                        <SleepingDetails
                          key={index}
                          idx={index}
                          details={room}
                        />)}
                    </Div1w8hgual>
                  </Div11iocrd2>
                  {rightButton}
                </Div6htn2u>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SleepingArrangements;
