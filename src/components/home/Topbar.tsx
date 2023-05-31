import { Avatar, IconButton } from "components/common";

import avatar from "assets/icons/avatar.png";
import menu from "assets/icons/menu.png";

const Topbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <IconButton icon={menu} />
      <Avatar image={avatar} />
    </div>
  );
};

export default Topbar;
