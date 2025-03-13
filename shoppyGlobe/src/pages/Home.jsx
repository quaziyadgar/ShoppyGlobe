import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to ShoppyGlobe</h1>
      <ProductList />
    </div>
  );
};

export default Home;
