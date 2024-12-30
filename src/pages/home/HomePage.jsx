import Banner from "../../components/banner/Banner";
import CategorySection from "../../components/CategorySection";
import StatsSection from "../../components/StatsSection";
const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="my-5 px-3">
        <Banner></Banner>
      </header>
      <main className="my-10  mx-auto">
        <section>
          <StatsSection></StatsSection>
        </section>
        <section>
          <CategorySection></CategorySection>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
