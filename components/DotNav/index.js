import React from "react";
import styled from "styled-components";
import Link from 'next/link'

// import Spell from "./icons/magic-swirl.png";
// import SpellWhite from "./icons/magic-swirl-white.png";
// import Code from "./icons/code.png";
// import CodeWhite from "./icons/code-white.png";
// import Coins from "./icons/coins.png";
// import CoinsWhite from "./icons/coins-white.png";

import CharIcon from "./icons/char-icon-black.png";
import CharIconWhite from "./icons/char-icon-white.png";
import Character from "./icons/character-black.png";
import CharacterWhite from "./icons/character-white.png";
import Notes from "./icons/book-black.png";
import NotesWhite from "./icons/book-white.png";
import Contacts from "./icons/contacts-black.png";
import ContactsWhite from "./icons/contacts-white.png";
import Backpack from "./icons/backpack.png";
import BackpackWhite from "./icons/backpack-white.png";
import Book from "./icons/book-cover.png";
import BookWhite from "./icons/book-cover-white.png";
import Feats from "./icons/feats-black.png";
import FeatsWhite from "./icons/feats-white.png";
import Maneuvers from "./icons/maneuvers-black.png";
import ManeuversWhite from "./icons/maneuvers-white.png";
import Crits from "./icons/crits-black.png";
import CritsWhite from "./icons/crits-white.png";
import Abilities from "./icons/abilities-black.png";
import AbilitiesWhite from "./icons/abilities-white.png";
import Delete from "./icons/delete-black.png";
import DeleteWhite from "./icons/delete-white.png";

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
  ${({ activeCategory, color }) =>
    activeCategory && activeCategory !== ""
      ? `background-color: ${color}; transform: scale(2.5);`
      : null};
  ${({ img }) => (img && `background-image: url(${img})`)};
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

const SubMenuItem = styled.a`
    width: 30px;
    height: 30px;
    object-fit: cover;
    display: block;
    cursor: pointer;
    padding: 10px;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #888;
    background-color: var(--white);
    opacity: 0;
    transition: transform .2s, opacity .2s;
    background-size: 35px;
    background-position: center;

    ${({ img }) =>
      img
        ? `background-image: url(${img}); background-repeat: no-repeat;`
        : null};

    &:hover {

        height: 40px;
        width: 40px;
        background: #333;

        ${({ hoverImg }) =>
          hoverImg
            ? `background-image: url(${hoverImg});
                background-repeat: no-repeat;
                background-size: 40px;
                background-position: center;
              `
            : null}
    };

      ${({ angle, active }) =>
        active && angle
          ? `transform: rotate(-${angle}deg) translate(5.5em) rotate(${angle}deg); opacity: 0.8;`
          : null
      }
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
              color={"#5a0d0d"}
            />
            <SubMenu>
              <Link href="../character">
                <SubMenuItem
                  angle={45}
                  active={activeCategory === "char" ? true : false}
                  img={Character}
                  hoverImg={CharacterWhite}
                  title="Character"
                  onClick={this.toggleNav}
                />
              </Link>
              <SubMenuItem
                angle={90}
                active={activeCategory === "char" ? true : false}
                img={Backpack}
                hoverImg={BackpackWhite}
                title="Equipment"
                disabled
              />
              <SubMenuItem
                angle={135}
                active={activeCategory === "char" ? true : false}
                img={Contacts}
                hoverImg={ContactsWhite}
                title="Contacts"
                disabled
              />
              <SubMenuItem
                angle={180}
                active={activeCategory === "char" ? true : false}
                img={Notes}
                hoverImg={NotesWhite}
                title="Notes"
                disabled
              />
              <Link href="../character-portal">
                <SubMenuItem
                  angle={225}
                  active={activeCategory === "char" ? true : false}
                  img={Delete}
                  hoverImg={DeleteWhite}
                  title="Delete"
                  onClick={this.toggleNav}
                />
              </Link>

            </SubMenu>
          </MenuBlock>
          <MenuBlock>
            <MenuItem
              img={activeCategory === "ref" ? BookWhite : Book}
              active={active}
              activeCategory={activeCategory === "ref"}
              onClick={() => this.handleNav("ref")}
              right
              baseState={baseState}
              color={"#112e4c"}
            />
            <SubMenu>
              <Link href="../crits">
                <SubMenuItem
                  angle={330}
                  active={activeCategory === "ref" ? true : false}
                  img={Crits}
                  hoverImg={CritsWhite}
                  title="Crits"
                  onClick={this.toggleNav}
                />
              </Link>
              <Link href="../feats">
                <SubMenuItem
                  angle={15}
                  active={activeCategory === "ref" ? true : false}
                  img={Feats}
                  hoverImg={FeatsWhite}
                  title="Feats"
                  onClick={this.toggleNav}
                />
              </Link>
              <Link href="../maneuvers">
                <SubMenuItem
                  angle={60}
                  active={activeCategory === "ref" ? true : false}
                  img={Maneuvers}
                  hoverImg={ManeuversWhite}
                  title="Maneuvers"
                  onClick={this.toggleNav}
                />
              </Link>
              <Link href="../abilities">
                <SubMenuItem
                  angle={105}
                  active={activeCategory === "ref" ? true : false}
                  img={Abilities}
                  hoverImg={AbilitiesWhite}
                  title="Abilities"
                  onClick={this.toggleNav}
                />
              </Link>
            </SubMenu>
          </MenuBlock>
        </Items>
      </NavContainer>
    );
  }
}

export default Nav;
