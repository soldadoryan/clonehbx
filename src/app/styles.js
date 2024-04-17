import styled, { css } from "styled-components";

export const Topbar = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary()};
    width: 100%;
    height: 70px;
    position: relative;
    display: flex;
    justify-content: center;
  `}
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  background-image: url("./images/sprite.png");
  width: 197px;
  height: 73px;
  position: absolute;
  top: 12px;
`;

export const WrapLogin = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Login = styled.div`
  ${({ theme }) => css`
    background: #02353c;
    font-size: 16px;
    box-shadow: 0 1px 0 2px rgba(0, 0, 0, 0.3);
    border: 2px solid #267b91;
    border-radius: 3px;
    padding: 5px 12px;
    text-transform: uppercase;
    position: absolute;
    justify-self: flex-end;
    display: flex;
    color: ${theme.colors.shape()};
    gap: 0.3rem;
    font-family: ${theme.typhografy.secondary};
  `}
`;

export const LoginIcon = styled.div`
  background-image: url("./images/sprite.png");
  width: 17px;
  height: 17px;
  background-position: -318px -463px;
`;

export const Menu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape()};
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const MenuContainer = styled.div`
  width: 1200px;
  display: flex;
  gap: 2.5rem;
`;

export const ItemMenu = styled.div`
  ${({ theme }) => css`
    font-size: 24px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-family: ${theme.typhografy.secondary};
    color: #036;
    gap: 0.5rem;
  `}
`;

export const IconMenu = styled.div`
  ${({ pos }) => css`
    background-image: url("./images/sprite.png");
    background-position: ${pos};
    width: 22px;
    height: 22px;
  `}
`;

export const BottomBar = styled.div`
  background-color: #001726;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

export const ContainerBottomBar = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
`;

export const BottomBarItem = styled.div`
  text-transform: uppercase;
  display: block;
  color: #6796b1;
  border-right: 2px solid #406180;
  height: 1em;
  padding: 0 2.5rem 0 0;
  align-items: center;

  &:last-child {
    border-right: 0;
  }

  &.active {
    color: white;
  }
`;

export const Content = styled.div`
  background-color: #0f416d;
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;

  img {
    margin-top: 20rem;
  }
`;

export const WrapContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.typhografy.secondary};
    color: white;
    margin: 2rem 0 2rem;
    font-weight: 400;
    font-size: 32px;
  `}
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #7ecaee;
  width: 700px;
`;

export const List = styled.ul`
  margin-top: 1rem;
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 2rem;
`;

export const Item = styled.li`
  color: #7ecaee;
  & > span {
    color: white;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #0c3a65;
  top: 0;
  opacity: 0.9;
`;

export const WrapModal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 494px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #0b6395;
  border: 3px solid #2685bc;
  border-radius: 10px;
  margin: 2rem auto 0;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  ${({ theme }) => css`
    zoom: 1;
    text-shadow: 0 1px #000;
    background-color: #0e3955;
    border-radius: 8px;
    line-height: 42px;
    margin: 0;
    text-align: center;
    text-transform: initial;
    color: #fff;
    font-family: ${theme.typhografy.secondary};
    font-size: 1.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalContent = styled.div`
  width: 100%;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const P = styled.p`
  color: #fff;
  margin-bottom: 1rem;

  &.center {
    align-self: center;
  }
`;

export const Small = styled.small`
  color: #fff;
  margin-bottom: 1rem;
  align-self: center;
  margin-top: 1rem;
`;

export const SmallModalContent = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
`;

export const Fb = styled.button`
  box-shadow: 0 3px 0 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  line-height: 1.2;
  text-align: center;
  background-color: #4166b2;
  border-color: #6a8ad3;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 12px;
  text-transform: uppercase;
  position: relative;
  min-width: 185px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;

export const Icon = styled.div`
  ${({ pos }) => css`
    background-image: url("./images/sprite.png");
    background-position: ${pos};
    width: 26px;
    height: 26px;
  `}
`;

export const IconEmpty = styled.div``;

export const Google = styled.button`
  box-shadow: 0 3px 0 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  line-height: 1.2;
  text-align: center;
  background-color: #4485f4;
  border-color: #6a8ad3;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 12px;
  text-transform: uppercase;
  position: relative;
  min-width: 185px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;

export const Apple = styled.button`
  box-shadow: 0 3px 0 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  line-height: 1.2;
  text-align: center;
  background-color: #fff;
  border-color: #dfdfdf;
  color: #000;
  padding: 12px 24px 12px 44px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  text-transform: uppercase;
  position: relative;
  font-size: 15px;
  margin-bottom: 0;
  min-width: 185px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
`;

export const Input = styled.input`
  background-color: #ccd8df;
  border: 3px solid #275d8e;
  border-radius: 5px;
  color: #444;
  box-shadow: inset 0 2px 0 0 #9ebecc;
  line-height: 1.2;
  padding: 5px 12px;
  width: 100%;
  font-size: 16px;
  outline: none;
  margin-bottom: 1rem;

  &:focus {
    background-color: white;
  }
`;

export const Divisor = styled.div`
  width: calc(100% - 24px);
  border-top: 1px solid #2a9cde;
  align-self: center;
  height: 1px;
`;

export const Submit = styled.button`
  box-shadow: 0 3px 0 1px rgba(0, 0, 0, 0.3);
  display: inline-block;
  line-height: 1.2;
  text-align: center;
  background-color: #0f7dbc;
  border-color: #2a9cde;
  color: #fff;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
`;

export const Spacing = styled.div`
  margin: 2rem 0;
`;

export const Close = styled.div`
  background: url(https://images.habbo.com/habbo-web/america/pt/assets/images/sprite.0d7e8765.png) -94px -487px;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 1rem;
`;

export const Form = styled.form``;
