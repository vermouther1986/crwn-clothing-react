import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.compontents";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  NavLinksContainer,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              signout
            </NavLink>
          ) : (
            <NavLink to="/auth">signin</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
