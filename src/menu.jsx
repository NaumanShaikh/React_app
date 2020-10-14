
import React, { Component } from "react";
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

const menuItem = ['new', 'old'];


class Menus extends Component {

    render() {

        const menuItems = menuItem.map((word, i) => {
            return (
              <ul key={i} className='menuitem'>
                <MenuItem className='MyMenuButton-menuItem'>
                  {word}
                </MenuItem>
              </ul>
            );
          });

          return (
            <Wrapper
              onSelection={console.log("menuitem")}
            >
              <Button>
                Menu
              </Button>
              <Menu className='MyMenuButton-menu'>
                {menuItems}<br/>
              </Menu>
            </Wrapper>
          );

    }
}
export default Menus;