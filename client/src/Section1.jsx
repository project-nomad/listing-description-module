import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const P = Styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
`;
const Span = Styled.span`
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

const Section1 = props => (
  <div dir='ltr'>
    <P>
      <Span>
        <Span>{props.ltr}</Span>
      </Span>
    </P>
  </div>
);

export default Section1;

Section1.propTypes = {
  ltr: PropTypes.string.isRequired,
};
