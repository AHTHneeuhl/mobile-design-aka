import { Featured, Navbar, NewArrivals, Search, Topbar } from "components/home";

const Home: React.FC = () => {
  return (
    <main>
      <Topbar />
      <Search />
      <Featured />
      <NewArrivals />
      <Navbar />
    </main>
  );
};

export default Home;
