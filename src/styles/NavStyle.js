import styled from "styled-components";

export const NavBar = styled.nav`
  position: sticky;
  top: 0px;
  display: flex;
  width: 100%;
  padding: 8px;
  padding-right: 24px;
  background: #2f2f2f;
  color: white;
  align-items: center;
  z-index: 4;
`;

export const NavLinkCont = styled.li`
  text-decoration: none;
  padding: 0px 16px;

  border-radius: 4px;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const DropDownCont = styled.div`
  z-index: 2;
  @media (max-width: 790px) {
    display: inline;
  }
`;

export const DropDownBtn = styled.button`
  display: none;
  color: white;
  text-decoration: none;
  line-height: 100%;
  font-size: 0.8em;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 790px) {
    display: inline;
  }
`;

export const NavListCont = styled.ul`
  display: flex;
  margin: 0px auto;
  width: auto;
  justify-content: space-around;
  list-style: none;
  @media (max-width: 790px) {
    display: flex;
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    position: absolute;
    background: #2f2f2f;
    width: fit-content;
    top: 30px;
    left: 65px;
    padding-bottom: 8px;
    padding-top: 10px;
    border-radius: 0px 0px 8px 8px;
    transition: all 0.5s;
    &:hover {
      display: flex;
    }
    ${DropDownCont}:hover & {
      opacity: 1;
      pointer-events: auto;
    }
    ${DropDownCont}:focus-within & {
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

export const NavIcon = styled.button`
  margin: auto 32px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
`;

export const Link = styled.button`
  color: white;
  background: none;
  border: none;
  text-decoration: none;
  line-height: 100%;
  font-size: 0.8em;
  cursor: pointer;
`;

export const Vl = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  @media (max-width: 790px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

export const IconCont = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 8px 0px auto;
  position: absolute;
  right: 16px;
`;

export const SearchField = styled.input`
  opacity: 0%;
  background: none;
  border: none;
  outline: none;
  color: white;
  margin-left: 8px;
  pointer-events: none;
  width: 100%;
  &:focus {
    opacity: 100%;
    pointer-events: auto;
  }
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 20px;
  transition: box-shadow 0s;
  z-index: 3;
  &:focus-within {
    transition: box-shadow 0.7s;
    position: absolute;
    margin-left: auto;
    transform: translate(-100%);
    width: 500px;
    max-width: 60vw;
    box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.8),
      inset -2px -2px 2px rgba(117, 117, 117, 0.25);
    border-radius: 4px;
    background: #2f2f2f;
  }
`;

export const SBLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${SearchBar}:focus-within & {
    opacity: 50%;
    scale: 0.7;
  }
`;
