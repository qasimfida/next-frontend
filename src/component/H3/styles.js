import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  font-weight: 500;
  color: #fff;
  margin-bottom: 40px;
  font-size: 22px;
  text-transform: capitalize;
  text-align: left;
  :before {
    content: "";
    background: #fff;
    width: 40px;
    height: 1px;
    position: absolute;
    bottom: -15px;
    left: 0;
  }
`;
