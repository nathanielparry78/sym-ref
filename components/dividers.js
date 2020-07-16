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
export const Simple = () => <Divider type={"simple"} />

// two
export const BottomLine = () => <Divider type={"bottomLine"} />

//one
export const Flourish = () => <Divider type={"flourish"} />
