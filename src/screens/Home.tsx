import { Featured, NewArrivals, Search, Topbar } from "components/home";

const Home: React.FC = () => {
  return (
    <main>
      <Topbar />
      <Search />
      <Featured />
      <NewArrivals />
    </main>
  );
};

export default Home;
