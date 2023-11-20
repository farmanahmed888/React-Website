import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
  function toggleMenu() {
    var MenuItems = document.getElementById("MenuItems");
    MenuItems.style.maxHeight = "0px";
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  }

  useEffect(() => {
    toggleMenu();
  }, []);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require('./img/logo.jpeg')} alt="logo" width="200" />
        </Link>
      </div>
      <nav>
        <ul id="MenuItems">
          {/*use this id in js*/}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/Account">Account</Link>
          </li>
        </ul>
      </nav>
      <Link to="/Cart">
        <img src={require('./img/cart.png')} alt="cart" width="30px" height="30px" />
      </Link>
    </div>
  );
}

export default Navbar;