import styled from "styled-components";
import iconLogo from "../../../../assets/images/logo.svg";

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

{
  /* <h1 className="logo">
  <a href="">
    <img src="../assets/images/logo.svg" alt="" />
  </a>
</h1>; */
}
