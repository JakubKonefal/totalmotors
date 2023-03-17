import styled, { keyframes } from 'styled-components'

const ringAnimation = keyframes`

  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 20px;
  height: 20px;

  &:after {
    content: ' ';
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${ringAnimation} 1.2s linear infinite;
  }
`

export default Spinner
