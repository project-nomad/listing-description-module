import React from 'react';
import Styled from 'styled-components';

const Div_1d6n3ar = Styled.div`
  border: 1px solid #DBDBDB !important;
  border-radius: 4px !important;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05) !important;
  padding: 24px !important;
  box-sizing: border-box;
  display: block;
`;
const Div_5y40cyp = Styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  color: #484848 !important;
  font-weight: normal !important;
  -webkit-font-smoothing: antialiased;
  box-sixing: border-box;
  display: block;
`;
const Div_10k87om = Styled.div`
  color: #767676 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  font-weight: normal !important;
  -webkit-font-smoothing: antialiased;
  box-sixing: border-box;
  display: block;
`;
const Div_qtix31 = Styled.div`
  display: table !important;
  box-sizing: border-box;
`;
const Div_ni9axhe = Styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
`;
const Div_36rlri = Styled.table`
  display: inline-block !important;
  box-sizing: border-box;
`;
const Small_1wk8be92 = Styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  font-weight: 800 !important;
  color: #767676 !important;
  -webkit-font-smoothing: antialiased;
`;
const Span_okqgdgp = Styled.span`
  font-weight: 600 !important;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  display: inline !important;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`;
const Span_jz15f0c = Styled.span`
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-weight: normal !important;
  display: inline !important;
  -webkit-font-smoothing: antialiased;
`;
const Button_aijsh5 = Styled.button`
  -webkit-appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  cursor: pointer !important;
  margin: 0px !important;
  padding: 0px !important;
  text-align: left !important;
  user-select: auto !important;
  color: inherit !important;
  vertical-align: bottom !important;
  font-weight: inherit !important;
  display: inline-block !important;
  font-size: 14px !important;
`;


class Highlights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      h1Hover: false,
      h1HelpHover: false,
      h2Hover: false,
      h2HelpHover: false,
      h3Hover: false,
      h3HelpHover: false,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(event) {
    if (event.target.id === 'h1Helpful') {
      this.setState(prevState => ({
        h1HelpHover: !prevState.h1HelpHover,
      }));
    } else if (event.target.id === 'h1Hover') {
      this.setState(prevState => ({
        h1Hover: !prevState.h1Hover,
      }));
    } else if (event.target.id === 'h2Helpful') {
      this.setState(prevState => ({
        h2HelpHover: !prevState.h2HelpHover,
      }));
    } else if (event.target.id === 'h2Hover') {
      this.setState(prevState => ({
        h2Hover: !prevState.h2Hover,
      }));
    } else if (event.target.id === 'h3Helpful') {
      this.setState(prevState => ({
        h3HelpHover: !prevState.h3HelpHover,
      }));
    } else if (event.target.id === 'h3Hover') {
      this.setState(prevState => ({
        h3Hover: !prevState.h3Hover,
      }));
    }
  }

  render() {
    return (
      <div style={{ marginBottom: '24px' }}>
        <Div_1d6n3ar>
          <Small_1wk8be92>
            <span>HOME HIGHLIGHTS</span>
          </Small_1wk8be92>
          <div style={{ marginTop: '12px' }}>
            <div>
              <div style={{ marginBottom: '8px' }}>
                <Span_okqgdgp>Hot tub</Span_okqgdgp>
                <Span_jz15f0c>
                  <span> · </span>
                  This is one of a few homes in this area that has this feature.
                </Span_jz15f0c>
              </div>
              <Div_5y40cyp>
                <Div_10k87om>
                  <div>
                    <Button_aijsh5 aria-busy="false" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                      <Div_qtix31 id='h1Helpful'>
                        <Div_ni9axhe id='h1Helpful'>
                          {this.state.h1HelpHover ? (
                            <span id='h1Helpful' style={{ color: '#008489' }}>Helpful</span>
                          ) : (
                            <span id='h1Helpful' style={{ color: '#767676' }}>Helpful</span>
                          )}
                        </Div_ni9axhe>
                        <Div_ni9axhe id='h1Helpful'>
                          <div id='h1Helpful' style={{ marginLeft: '4px' }} >
                            {this.state.h1HelpHover ? (
                              <svg  id='h1Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#008489' }}>
                                <path id='h1Helpful' d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11">
                                </path>
                              </svg>) : (
                              <svg  id='h1Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#767676' }}>
                                <path id='h1Helpful' d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63">
                                </path>
                              </svg>
                            )}
                          </div>
                        </Div_ni9axhe>
                      </Div_qtix31>
                    </Button_aijsh5>
                    <Div_36rlri style={{ marginLeft: '4px', marginRight: '4px' }}>
                      <span aria-hidden="true"> · </span>
                    </Div_36rlri>
                    <Button_aijsh5 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                      {this.state.h1Hover ? (
                        <span id='h1Hover' style={{ color: '#008489' }}>Not helpful</span>
                      ) : (
                        <span id='h1Hover' style={{ color: '#767676' }}>Not helpful</span>
                      )}
                    </Button_aijsh5>
                  </div>
                </Div_10k87om>
              </Div_5y40cyp>
            </div>
          </div>
          {/* end of first home highlight 1 of 3 */}
          <div style={{ marginTop: '12px' }}>
            <div>
              <div style={{ marginBottom: '8px' }}>
                <Span_okqgdgp>Sparkling clean</Span_okqgdgp>
                <Span_jz15f0c>
                  <span> · </span>
                  5 recent guests have said that this home was sparkling clean.
                </Span_jz15f0c>
              </div>
              <Div_5y40cyp>
                <Div_10k87om>
                  <div>
                  <Button_aijsh5 aria-busy="false" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                      <Div_qtix31 id='h2Helpful'>
                        <Div_ni9axhe id='h2Helpful'>
                          {this.state.h2HelpHover ? (
                            <span id='h2Helpful' style={{ color: '#008489' }}>Helpful</span>
                          ) : (
                            <span id='h2Helpful' style={{ color: '#767676' }}>Helpful</span>
                          )}
                        </Div_ni9axhe>
                        <Div_ni9axhe id='h2Helpful'>
                          <div id='h2Helpful' style={{ marginLeft: '4px' }} >
                            {this.state.h2HelpHover ? (
                              <svg  id='h2Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#008489' }}>
                                <path id='h2Helpful' d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11">
                                </path>
                              </svg>) : (
                              <svg  id='h2Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#767676' }}>
                                <path id='h2Helpful' d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63">
                                </path>
                              </svg>
                            )}
                          </div>
                        </Div_ni9axhe>
                      </Div_qtix31>
                    </Button_aijsh5>
                    <Div_36rlri style={{ marginLeft: '4px', marginRight: '4px' }}>
                      <span aria-hidden="true"> · </span>
                    </Div_36rlri>
                    <Button_aijsh5 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                      {this.state.h2Hover ? (
                        <span id='h2Hover' style={{ color: '#008489' }}>Not helpful</span>
                      ) : (
                        <span id='h2Hover' style={{ color: '#767676' }}>Not helpful</span>
                      )}
                    </Button_aijsh5>
                  </div>
                </Div_10k87om>
              </Div_5y40cyp>
            </div>
          </div>
          {/* end of the second home highlight */}
          <div style={{ marginTop: '12px' }}>
            <div>
              <div style={{ marginBottom: '8px' }}>
                <Span_okqgdgp>Great location</Span_okqgdgp>
                <Span_jz15f0c>
                  <span> · </span>
                  100% of recent guests gave this home's location a 5-star rating.
                </Span_jz15f0c>
              </div>
              <Div_5y40cyp>
                <Div_10k87om>
                  <div>
                  <Button_aijsh5 aria-busy="false" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
                      <Div_qtix31 id='h3Helpful'>
                        <Div_ni9axhe id='h3Helpful'>
                          {this.state.h3HelpHover ? (
                            <span id='h3Helpful' style={{ color: '#008489' }}>Helpful</span>
                          ) : (
                            <span id='h3Helpful' style={{ color: '#767676' }}>Helpful</span>
                          )}
                        </Div_ni9axhe>
                        <Div_ni9axhe id='h3Helpful'>
                          <div id='h3Helpful' style={{ marginLeft: '4px' }} >
                            {this.state.h3HelpHover ? (
                              <svg id='h3Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#008489' }}>
                                <path id='h3Helpful' d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11">
                                </path>
                              </svg>) : (
                              <svg id='h3Helpful' viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style={{ height: '1em', width: '1em', display: 'block', fill: '#767676' }}>
                                <path id='h3Helpful' d="m8.37 1c-.34 0-.53.43-.64.79l-.04.17c-.17.74-.56 2.47-3.76 3.58-1.97.68-2.93 2.31-2.93 4.96 0 1.68.56 4.5 4.3 4.5h6.2c.3 0 1-.06 1-.63 0-.41-.26-.63-.5-.63a.5.5 0 1 1 0-1c .92 0 1-.31 1-.63 0-.52-.38-.61-.54-.63a.5.5 0 0 1 -.46-.52.5.5 0 0 1 .5-.48c1 0 1-.41 1-.63s0-.62-1-.62a.5.5 0 1 1 0-1c1 0 1-.47 1-.63 0-.58-.77-.63-1-.63h-4.5a1 1 0 0 1 -.83-1.56c.05-.07.16-.19.31-.35.34-.35.92-.93 1.21-1.58.24-.52.35-1.25.28-1.78 0-.01-.12-.74-.62-.74m3.15 15.04h-6.2c-3.32 0-5.3-2.06-5.3-5.5 0-3.09 1.21-5.08 3.61-5.91 2.67-.93 2.97-2.23 3.11-2.86.02-.08.04-.16.05-.22.37-1.31 1.16-1.51 1.6-1.51 1.02 0 1.52.96 1.61 1.61.09.71-.06 1.64-.37 2.32-.37.81-1.02 1.47-1.41 1.86-.09.1-.17.17-.2.21h4.5c1.2 0 2 .65 2 1.63 0 .46-.16.84-.45 1.11.39.37.45.86.45 1.14 0 .34-.09.98-.74 1.35.15.23.24.53.24.9 0 .41-.12 1.01-.74 1.36.15.26.24.56.24.89 0 .97-.8 1.63-2 1.63">
                                </path>
                              </svg>
                            )}
                          </div>
                        </Div_ni9axhe>
                      </Div_qtix31>
                    </Button_aijsh5>
                    <Div_36rlri style={{ marginLeft: '4px', marginRight: '4px' }}>
                      <span aria-hidden="true"> · </span>
                    </Div_36rlri>
                    <Button_aijsh5 onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                      {this.state.h3Hover ? (
                        <span id='h3Hover' style={{ color: '#008489' }}>Not helpful</span>
                      ) : (
                        <span id='h3Hover' style={{ color: '#767676' }}>Not helpful</span>
                      )}
                    </Button_aijsh5>
                  </div>
                </Div_10k87om>
              </Div_5y40cyp>
            </div>
          </div>
        </Div_1d6n3ar>
      </div>
    );
  }
}

export default Highlights;
