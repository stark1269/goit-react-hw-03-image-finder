import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,.6);;
`;

export const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 1200px;
height: 800px;
background-color: white;
`;