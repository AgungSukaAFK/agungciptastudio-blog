import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div className="home-container">
      {/* Section pertama */}
      <section className="home-first">
        <div className="title">
          <h1 className={lato.className}>
            <span>AgungCipta</span> Blog Site
          </h1>
        </div>

        <div className="search-container">
          <input
            type="search"
            name="search"
            id="searchInput"
            className="search-input"
            placeholder="Ketikkan pencarian..."
          />
          <button className="search-button">Cari</button>
        </div>

        <div className="description-container">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Ab sint soluta
            inventore beatae, nesciunt,
          </p>
        </div>
      </section>

      {/* Section kedua */}
      <section className="home-second"></section>
    </div>
  );
}
