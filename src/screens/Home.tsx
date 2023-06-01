import { Featured, Navbar, NewArrivals, Search, Topbar } from "components/home";
import { Fragment } from "react";

const Home: React.FC = () => {
  return (
    <Fragment>
      <div className="px-4 md:px-8 lg:px-12 xl:px-16">
        <Topbar />
        <Search />
        <Featured />
        <NewArrivals />
      </div>
      <Navbar />
    </Fragment>
  );
};

export default Home;
