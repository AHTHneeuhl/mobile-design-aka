import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as NotificationIcon } from "assets/icons/notification.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";

const navigation = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
  },
  {
    label: "Cart",
    icon: CartIcon,
    path: "/cart",
  },
  {
    label: "Notifications",
    icon: NotificationIcon,
    path: "/notifications",
  },
  {
    label: "Profile",
    icon: ProfileIcon,
    path: "/profile",
  },
];

export default navigation;
