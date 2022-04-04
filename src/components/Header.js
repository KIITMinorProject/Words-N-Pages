import React from "react";
import "./Header.css";
import { auth } from "./firebase";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded"
import {Link} from "react-router-dom";
import {useStateValue} from "../context/StateProvider";
import Logo from "./logo.png";

function Header() {  
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthenticaton = () => {
      if (user) {
        auth.signOut();
      }
    }
    const handleClick = () => {
    <Product />
  }
    return (
      <div className="header" style={{ justifyContent: "space-between" }}>
          <Link to="/">
            <img className="header__logo" src={Logo} alt="words-n-pages"/>
          </Link>
  
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
  
        <div className="header__nav">
            <Link to='/product'>
          <div onClick={handleClick} className="header__option">
            <span className="header__optionLineOne">View</span>
            <span className="header__optionLineTwo">Items</span>
          </div>
        </Link>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

            {/*<div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <span className="header__optionLineTwo">Sign In</span>
  </div>*/}
          
  
          
            {/*<div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
    </div>*/}
          
          
  
          {/*<div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
  </div>*/}
  
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartRoundedIcon />
                <div className="header__option">
              <span className="header__optionLineOne">Cart</span>
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
               </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Header;
