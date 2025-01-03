import Banner from "../../components/banner/Banner";
import CategorySection from "../../components/CategorySection";
import ExtraSection1 from "../../components/ExtraSection1";
import ExtraSection2 from "../../components/ExtraSection2";
import ExtraSection3 from "../../components/ExtraSection3";
import ExtraSection4 from "../../components/ExtraSection4";
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
        <section className="p-2 w-full mx-auto">
          <ExtraSection1></ExtraSection1>
        </section>
        <section>
          <CategorySection></CategorySection>
        </section>
        <section>
          <ExtraSection4></ExtraSection4>
        </section>
        <section>
          <ExtraSection2></ExtraSection2>
        </section>
        <section>
          <ExtraSection3></ExtraSection3>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
