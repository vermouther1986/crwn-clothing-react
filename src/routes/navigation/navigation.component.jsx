import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectcurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/cart-icon.compontents";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
// import { UserContext } from "../../contexts/user.context";
import {
  NavigationContainer,
  NavLink,
  LogoContainer,
  NavLinksContainer,
} from "./navigation.styles";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
// import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectcurrentUser);
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  const signOutUser = () => dispatch(signOutStart());

  console.log(currentUser);
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
