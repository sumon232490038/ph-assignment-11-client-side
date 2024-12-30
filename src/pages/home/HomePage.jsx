import Banner from "../../components/banner/Banner";
import StatsSection from "../../components/StatsSection";
const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="my-5 px-3">
        <Banner></Banner>
      </header>
      <main className="my-20  mx-auto">
        <section>
          <StatsSection></StatsSection>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
