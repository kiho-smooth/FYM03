import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderStyles = styled.div`
  position: sticky;
  flex-shrink: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 32px;

  @media (max-width: 767px) {
    height: 80px;
  }
`;

export const LogoStyles = styled.div`
  flex-shrink: 0;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    height: 40px;
  }
`;

export const NavStyles = styled.nav`
  font-size: 1.4rem;
  font-weight: 600;
  margin-left: 20px;
`;

export const StyledLink = styled(Link)`
  margin-left: 50px;
`;

export const SearchStyled = styled.div``;
