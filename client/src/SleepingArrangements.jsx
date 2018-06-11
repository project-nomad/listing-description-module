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
                      key={index}
                      idx={index}
                      details={room}
                    />)}
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
