import SideBar from "../components/SideBar";
import Products from "../components/Products";
const Shop = () => {
  return (
    <>
      <main class="pt-90">
        <section class="shop-main container d-flex pt-4 pt-xl-5">
          <SideBar />
          <Products />
        </section>
      </main>
    </>
  );
};
export default Shop;
