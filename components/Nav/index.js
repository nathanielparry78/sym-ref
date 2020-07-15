import React from "react";
import styled from "styled-components";

import CharIcon from "./icons/char-icon-black.png";
import CharIconWhite from "./icons/char-icon-white.png";
import MonIcon from "./icons/monster-icon-black.png";
import MonIconWhite from "./icons/monster-icon-white.png";
import Backpack from "./icons/backpack.png";
import BackpackWhite from "./icons/backpack-white.png";
import Coins from "./icons/coins.png";
import CoinsWhite from "./icons/coins-white.png";
import Book from "./icons/book-cover.png";
import BookWhite from "./icons/book-cover-white.png";
import Spell from "./icons/magic-swirl.png";
import SpellWhite from "./icons/magic-swirl-white.png";
import Code from "./icons/code.png";
import CodeWhite from "./icons/code-white.png";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2vh;
  left: 50%;
  z-index: 1000;
`;

const Items = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  position: absolute;
  bottom: -500px;
  transition: bottom 0.2s;

  ${({ active }) => (active ? `bottom: 85px;` : null)};
`;

const MenuBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #888;
  box-shadow: inset 0px 0px 5px #888;
  color: transparent;
  background-position: -12px -12px;
  position: absolute;
  bottom: 2vh;
  cursor: pointer;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s;
  font-size: 10px;
  user-select: none;

  ${({ active }) =>
    active
      ? `transform: scale(2);
        opacity: 1;
        box-shadow: inset 0px 0px 5px #888;
        border: 1px solid #aaa;
        `
      : null};
`;

const MenuItem = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  opacity: 0;
  line-height: 2.25;
  transition: all 0.25s;
  padding: 10px;
  user-select: none;
  display: block;
  background-color: white;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #999;
  z-index: 30;

  &:hover {
    ${({ activeCategory }) =>
      activeCategory ? null : `transform: scale(2.25);`};
    opacity: 1;
  }

  ${({ active }) => (active ? `transform: scale(1.5); opacity: .8;` : null)};
  ${({ activeCategory, baseState }) =>
    activeCategory && activeCategory !== ""
      ? `background-color: maroon; transform: scale(2.5);`
      : null};
  ${({ img }) => (img ? `background-image: url(${img})` : null)};
`;

const SubMenu = styled.div`
  height: 10em;
  width: 10em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 20;
`;

const SubMenuItem = styled.span`
    width: 30px;
    height: 30px;
    object-fit: cover;
    display: block;
    cursor: pointer;
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #888;
    background-color: white;
    opacity: 0;
    transition: transform .2s, opacity .2s, width .2s, height .2s, background-size .2s;
    background-size: 35px;
    background-position: center;

    ${({ img }) =>
      img
        ? `background-image: url(${img}); background-repeat: no-repeat;`
        : null};

    &:hover {
        width: 40px;
        height: 40px;
        transition: width .2s, height .2s;
        background: #333;

        ${({ hoverImg }) =>
          hoverImg
            ? `background-image: url(${hoverImg});
                background-repeat: no-repeat;
                background-size: 40px;
                background-position: center;
                transition: background-size: .2s;`
            : null}
};

${({ angle, active }) =>
  active && angle === 45
    ? `transform: rotate(-45deg) translate(5.5em) rotate(45deg); opacity: 0.8;`
    : null}

${({ angle, active }) =>
  active && angle === 90
    ? `transform: rotate(-90deg) translate(5.5em) rotate(90deg); opacity: 0.8;`
    : null}

${({ angle, active }) =>
  active && angle === 135
    ? `transform: rotate(-135deg) translate(5.5em) rotate(135deg); opacity: 0.8;`
    : null}

${({ angle, active }) =>
  active && angle === 180
    ? `transform: rotate(-180deg) translate(5.5em) rotate(180deg); opacity: 0.8;`
    : null}

${({ angle, active }) =>
  active && angle === 225
    ? `transform: rotate(-225deg) translate(5.5em) rotate(225deg); opacity: 0.8;`
    : null}
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseState: true,
      active: false,
      activeCategory: "",
    };
  }

  toggleNav = () => {
    this.setState({
      active: !this.state.active,
      activeCategory: "",
    });
  };

  handleNav = (type) => {
    this.state.activeCategory === type
      ? this.setState({
          activeCategory: "",
          // active: !this.state.active
        })
      : this.setState({
          activeCategory: type,
          // active: !this.state.active
        });
  };

  navigate = (type) => {
    this.props.handlePageStatus(type);
  };

  render() {
    let { handlePageStatus } = this.props;
    let { active, activeCategory, baseState } = this.state;

    return (
      <NavContainer>
        <Dot onClick={this.toggleNav} active={active} />
        <Items active={active}>
          <MenuBlock>
            <MenuItem
              img={activeCategory === "char" ? CharIconWhite : CharIcon}
              active={active}
              activeCategory={activeCategory === "char"}
              onClick={() => this.handleNav("char")}
              baseState={baseState}
            />
            <SubMenu>
              <SubMenuItem
                angle={45}
                active={activeCategory === "char" ? true : false}
                onClick={() => this.props.handlePageStatus("charCon")}
                img={Code}
                hoverImg={CodeWhite}
                title="Converter"
              />
              <SubMenuItem
                angle={90}
                active={activeCategory === "char" ? true : false}
                img={Book}
                hoverImg={BookWhite}
                title="Stats"
                onClick={() => this.props.handlePageStatus("char")}
              />
              <SubMenuItem
                angle={135}
                active={activeCategory === "char" ? true : false}
                img={Backpack}
                hoverImg={BackpackWhite}
                title="Equipment"
              />
              <SubMenuItem
                angle={180}
                active={activeCategory === "char" ? true : false}
                img={Coins}
                hoverImg={CoinsWhite}
                title="Currency"
              />
              <SubMenuItem
                angle={225}
                active={activeCategory === "char" ? true : false}
                img={Spell}
                hoverImg={SpellWhite}
                title="Spells"
              />
            </SubMenu>
          </MenuBlock>
          <MenuBlock>
            <MenuItem
              img={activeCategory === "mon" ? MonIconWhite : MonIcon}
              active={active}
              activeCategory={activeCategory === "mon"}
              onClick={() => this.props.handlePageStatus("mon")}
              right
              baseState={baseState}
            />
          </MenuBlock>
        </Items>
      </NavContainer>
    );
  }
}

export default Nav;
