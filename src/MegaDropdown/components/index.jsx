import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  background: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 100;
`;

const Link = styled.a`
  padding: 2% 0;
  min-width: 128px;
  text-align: center;
  font-family: sans-serif;
  text-decoration: none;
  transition: all 2s easin-in;
  background: ${(props) => (props.active ? '#fff' : '#000')};
  color: ${(props) => (props.active ? '#000' : '#fff')};
  &:hover {
    background: #fff;
    color: #000;
  }
`;

const DropdownWrapper = styled.div`
  width: 100%;
  height: 500px;
  background: blue;
  transition: transform 0.5s ease-in;
  transform: ${(props) => (props.active ? 'translateY(0)' : 'translateY(-100%)')};
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    padding: 0;
    color: #fff;
  }
`;

class MegaDropdown extends React.Component {
  constructor(props) {
    super();
    this.state = { isOpen: false };
  }

  updateMenuState = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  onClickHandler = () => {
    this.updateMenuState();
  };

  onMouseEnter = () => {
    setTimeout(this.updateMenuState, 500);
  }

  onMouseLeave = () => {
    this.updateMenuState();
  }

  render() {
    return (
      <React.Fragment>
        <MainWrapper>
          <Link href="#">Link</Link>
          <Link
            href="#"
            onClick={this.onClickHandler}
            onMouseLeave={this.onMouseEnter}
            onMouseEnter={this.onMouseEnter}
            active={this.state.isOpen}
          >
            Active link
          </Link>
          <Link href="#">Other Link</Link>
        </MainWrapper>
        <DropdownWrapper active={this.state.isOpen}>
          <h1>ISSA DROPDOWN TRAY</h1>
        </DropdownWrapper>
      </React.Fragment>
    );
  }
}

export default MegaDropdown;
