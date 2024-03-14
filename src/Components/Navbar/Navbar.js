import React, { useState } from "react";
import "../Navbar/styles/navbar.css";
import { CustomButton } from "../../theme";
import { Typography, styled } from "@mui/material";
import logo from "../../assets/logo.png";

const DropdownIcon = styled('i')({
  marginLeft: '5px',
  verticalAlign: 'middle',
  transition: 'transform 0.3s',
});

const DropdownContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
});

const DropdownContent = styled('div')({
  position: 'absolute',
  top: '-100%',
});

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState([false, false, false, false, false, false]);

  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
   
        <img src={logo} alt="Logo" className="navbar-logo" />
      

        <ul className="navbar-links">
       
          {["Platform", "Solutions", "Industries", "Customer Success", "Shodat Ai", "About"].map((text, index) => (
            <li className="navbar-dropdown" key={index} onMouseEnter={() => toggleDropdown(index)} onMouseLeave={() => toggleDropdown(index)}>
              <DropdownContainer>
                <a href="#">{text} <DropdownIcon className="material-icons">{dropdownOpen[index] ? 'arrow_drop_up' : 'arrow_drop_down'}</DropdownIcon></a>
                {dropdownOpen[index] && (
                  <DropdownContent className={`dropdown ${dropdownOpen[index] ? 'open' : ''}`}>
                    <a href="#">Tomato Soup</a>
                    <a href="#">Veg Manchow Soup</a>
                    <a href="#">Veg Hot Soup</a>
                  </DropdownContent>
                )}
              </DropdownContainer>
            </li>
          ))}
        </ul>
        <CustomButton>request Demo</CustomButton>
      </nav>
    </div>
  );
};

export default Navbar;
