import React from 'react';
import Styled from 'styled-components';

const MainDiv = Styled.div`
  font-weight: 600 !important;
  color: #484848 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
`;

const Button = Styled.button`
  color: #008489 !important;
  font: inherit !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-decoration: none !important;
  -webkit-appearance: none !important;
  -webkit-font-smoothing: antialiased;
  background: transparent !important;
  border: 0px !important;
  cursor: pointer !important;
  margin: 0px !important;
  padding: 0px !important;
  user-select: auto !important;
  text-align: left !important;
`;

const TblDiv = Styled.div`
  display: table !important;
`;

const TblCellDiv = Styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
`
const ArrowDiv = Styled.div`
  display: table-cell !important;
  vertical-align: middle !important;
  transition-property: -ms-transform,-webkit-transform,transform !important;
  transition-duration: 250ms !important;
  transition-timing-function: ease-in-out !important;
`
const ButtonInLineStyle = {
  height: '10px',
  width: '10px',
  display: 'block',
  fill: 'currentColor'
}

class HideButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: false,
      arrow: {transform: [{rotate: '0deg'}]}
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler() {
    let expandedState = this.state.expanded
    let arrowDegree = expandedState === false ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'} 
    this.setState({
      expanded: !expandedState,
      arrow: arrowDegree
    }, () => {
      this.props.hideOverview();
    })
  }

  render(){
    return(
      <div style={{marginTop: '8px', marginBottom: '24px'}}>
        <MainDiv>
          <Button type="button" aria-expanded={this.state.expanded} aria-busy="false" onClick={this.clickHandler}>
            <TblDiv>
              <TblCellDiv>
                <span>{this.state.expanded ? 'Hide' : 'Read more about the space' }</span>
              </TblCellDiv>
              <TblCellDiv>
                <div style={{marginLeft: '8px'}}>
                  <ArrowDiv style={this.state.arrow}>
                    <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={ButtonInLineStyle}>
                      <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd"></path>
                    </svg>
                  </ArrowDiv>
                </div>
              </TblCellDiv>
            </TblDiv>
          </Button>
        </MainDiv>
      </div>
    )
  }
}

export default HideButton;
