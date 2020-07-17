import styled from 'styled-components';

import flourish from "../public/divider.png";
import bottomLine from "../public/bottom-line.png";
import simple from "../public/simple1.png";

const Divider = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-items: center;
  border: red;
  ${({type}) => type === "flourish" && `
    background: url(${flourish}) no-repeat center;
    height: 20px;
    margin: 1rem 0;
  `}
  ${({type}) => type === "bottomLine" && `
    background: url(${bottomLine}) no-repeat center;
    height: 20px;
    margin: 1rem 0;
  `}
  ${({type}) => type === "simple" && `
    background: url(${simple}) no-repeat center;
    height: 7px;
    margin: .5rem 0;
  `}
`
// three
export const Simple = ({ className }) => <Divider type={"simple"} className={className}/>

// two
export const BottomLine = ({ className }) => <Divider type={"bottomLine"} className={className}/>

//one
export const Flourish = ({ className }) => <Divider type={"flourish"} className={className}/>
