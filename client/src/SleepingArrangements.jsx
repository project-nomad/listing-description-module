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
const Div1johmo39 = Styled.div`
  width: 33.333333333333336% !important;
  display: inline-block !important;
  vertical-align: top !important;
  white-space: normal !important;
  flex: none !important;
  box-sizing: border-box;
`;
const Div699th3t = Styled.div`
  padding-left: 8px !important;
  padding-right: 8px !important;
  padding-bottom: 0px !important;
  width: 100% !important;
  height: 100% !important;
  box-sizing: border-box;
  display: block;
`;
const Div1ocrz96 = Styled.div`
  border: 1px solid #DBDBDB !important;
  border-radius: 4px !important;
  height: 100% !important;
  padding: 24px !important;
  width: 100% !important;
  box-sizing: border-box;
  display: block;
`;
const Div152qbzi = Styled.div`
  margin-bottom: 24px !important;
  box-sizing: border-box;
  display: block;
`;
const Div157yfd15 = Styled.div`
  font-weight: 600 !important;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  box-sizing: border-box;
  display: block;
`;
const Div1fcn46ls = Styled.div`
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-weight: normal !important;
  box-sizing: border-box;
  display: block;
`;
const Span14tkmhr = Styled.div`
  margin-right: 8px !important;
  box-sizing: border-box;
  display: inline-block !important;
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

const SleepingArrangements = props => (
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
              <Div11iocrd2>
                <Div1w8hgual>
                  {props.sleep.map((room, index) =>
                    <SleepingDetails
                      idx={index}
                      details={room}
                    />)}
                    {/* <Div1johmo39>
                      <Div699th3t>
                        <Div1ocrz96>
                          <Div152qbzi aria-hidden="true">
                            <Span14tkmhr>
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'currentcolor' }}>
                              <path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fillRule="evenodd">
                              </path>
                            </svg>
                            </Span14tkmhr>
                          </Div152qbzi>
                          <Div157yfd15>Bedroom 1</Div157yfd15>
                          <Div1fcn46ls>1 King Bed</Div1fcn46ls>
                        </Div1ocrz96>
                      </Div699th3t>
                    </Div1johmo39>
                    
                    <Div1johmo39>
                      <Div699th3t>
                        <Div1ocrz96>
                          <Div152qbzi aria-hidden="true">
                            <Span14tkmhr>
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'currentcolor' }}>
                              <path d="m23.96 14.81-2.96-7.41v-5.02a1.39 1.39 0 0 0 -1.39-1.38h-15.22c-.77 0-1.39.62-1.39 1.38v5.02l-2.96 7.41-.04.19v5.61c0 .64.43 1.17 1.01 1.33 0 .02-.01.04-.01.06v1.5a.5.5 0 0 0 1 0v-1.5h20v1.5a.5.5 0 0 0 1 0v-1.5c0-.02-.01-.04-.01-.06a1.39 1.39 0 0 0 1.01-1.33v-5.61zm-19.96-12.43c0-.21.17-.38.39-.38h15.22a.39.39 0 0 1 .39.39v4.61h-1v-1.61c0-.77-.62-1.39-1.39-1.39h-3.21c-.78 0-1.4.62-1.4 1.39v1.61h-2v-1.61c0-.77-.62-1.39-1.39-1.39h-3.22c-.77 0-1.39.62-1.39 1.39v1.61h-1zm14 3.01v3.21a.39.39 0 0 1 -.39.39h-3.21a.39.39 0 0 1 -.4-.38v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-8 0v3.21a.39.39 0 0 1 -.39.4h-3.22a.39.39 0 0 1 -.39-.39v-3.22a.39.39 0 0 1 .39-.39h3.21a.39.39 0 0 1 .39.39zm-6.16 2.61h1.16v.61c0 .77.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h2v .61c0 .78.62 1.39 1.39 1.39h3.21c.78 0 1.4-.62 1.4-1.39v-.61h1.16l2.8 7h-21.92zm19.16 12.61c0 .21-.18.39-.39.39h-21.22a.39.39 0 0 1 -.39-.39v-4.61h22z" fillRule="evenodd">
                              </path>
                            </svg>
                            </Span14tkmhr>
                          </Div152qbzi>
                          <Div157yfd15>Bedroom 2</Div157yfd15>
                          <Div1fcn46ls>1 double bed</Div1fcn46ls>
                        </Div1ocrz96>
                      </Div699th3t>
                    </Div1johmo39>
                    
                    <Div1johmo39>
                      <Div699th3t>
                        <Div1ocrz96>
                          <Div152qbzi aria-hidden="true">
                            <Span14tkmhr>
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'currentcolor' }}>
                              <path d="m22.95 16.29v-.01l-.95-1.9-.01-5.38c0-1.47-1.46-2.77-2.99-2.97v-1.53a2.5 2.5 0 0 0 -2.51-2.5h-9.98a2.5 2.5 0 0 0 -2.51 2.5v1.55c-1.57.21-3 1.48-3 2.96v5.38l-.95 1.89v.01a.49.49 0 0 0 -.05.21v3a .5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0v-1.5h19v1.5a.5.5 0 0 0 1 0v-1.5h.5a.5.5 0 0 0 .5-.5v-3a .49.49 0 0 0 -.05-.21zm-3.95-9.25c1.02.19 1.99 1.08 1.99 1.97v3.37l-1.99-4zm-7-4.04h4.49c.83 0 1.51.67 1.51 1.5v3.5h-6zm0 6h6.19l3.5 7h-20.38l3.5-7zm-7-4.5a1.5 1.5 0 0 1 1.51-1.5h4.49v5h-6zm-3 4.51c0-.89.94-1.76 2-1.96v1.33l-2 4zm20 9.99h-21v-2h21z" fillRule="evenodd">
                              </path>
                            </svg>
                            </Span14tkmhr>
                            <Span14tkmhr>
                            <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: '24px', width: '24px', fill: 'currentcolor' }}>
                              <path d="m22.95 16.29v-.01l-.95-1.9-.01-5.38c0-1.47-1.46-2.77-2.99-2.97v-1.53a2.5 2.5 0 0 0 -2.51-2.5h-9.98a2.5 2.5 0 0 0 -2.51 2.5v1.55c-1.57.21-3 1.48-3 2.96v5.38l-.95 1.89v.01a.49.49 0 0 0 -.05.21v3a .5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0v-1.5h19v1.5a.5.5 0 0 0 1 0v-1.5h.5a.5.5 0 0 0 .5-.5v-3a .49.49 0 0 0 -.05-.21zm-3.95-9.25c1.02.19 1.99 1.08 1.99 1.97v3.37l-1.99-4zm-7-4.04h4.49c.83 0 1.51.67 1.51 1.5v3.5h-6zm0 6h6.19l3.5 7h-20.38l3.5-7zm-7-4.5a1.5 1.5 0 0 1 1.51-1.5h4.49v5h-6zm-3 4.51c0-.89.94-1.76 2-1.96v1.33l-2 4zm20 9.99h-21v-2h21z" fillRule="evenodd">
                              </path>
                            </svg>
                            </Span14tkmhr>
                          </Div152qbzi>
                          <Div157yfd15>Common spaces</Div157yfd15>
                          <Div1fcn46ls>2 sofa beds</Div1fcn46ls>
                        </Div1ocrz96>
                      </Div699th3t>
                    </Div1johmo39> */}
                </Div1w8hgual>
              </Div11iocrd2>
            </Div6htn2u>
          </section>
        </div>
      </div>
    </div>
  </div>

);

export default SleepingArrangements;
