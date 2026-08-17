/**
 * PANJAZ — Canal House Heritage
 * Editorial Panamanian hospitality: burgundy architecture, ivory paper, gold route-lines,
 * asymmetric food storytelling, and restrained tropical linework.
 */
import { ArrowDownRight, ArrowUpRight, ChevronDown, MapPin, Sparkles, UtensilsCrossed } from "lucide-react";

const foodAssets = {
  arroz: "/manus-storage/panjaz-arroz-con-pollo_1d8a4786.jpg",
  bistec: "/manus-storage/panjaz-bistec-encebollado_d5cb2914.jpg",
  empanadas: "/manus-storage/panjaz-empanadas-de-res_4641003e.jpg",
  logo: "/manus-storage/panjaz-logo_f3ff55ad.png",
  restaurantInterior: "/manus-storage/panjaz-restaurant-interior-hero_1c0e5897.jpg",
};

const directionsUrl = "https://maps.app.goo.gl/3sBfhZ1GW22NsAYm8";

const menuBoards = [
  {
    number: "01",
    eyebrow: "Start here",
    title: "Pick your rice",
    copy: "Choose the foundation of your plate: coconut rice and guandules, arroz con pollo, or white rice.",
    image: "/manus-storage/panjaz-menu-rice-1920_4346befa.webp",
    alt: "Panjaz build your plate menu board for choosing rice",
  },
  {
    number: "02",
    eyebrow: "Make it yours",
    title: "Pick your protein",
    copy: "Choose one, or mix your favorites—bistec encebollado, ceviche de corvina, and empanadas de res.",
    image: "/manus-storage/panjaz-menu-proteins-1920_ebb9fb6f.webp",
    alt: "Panjaz build your plate menu board for choosing proteins",
  },
  {
    number: "03",
    eyebrow: "Finish strong",
    title: "Pick your sides",
    copy: "Round out your plate with plátano maduro, carimanola, or golden empanadas.",
    image: "/manus-storage/panjaz-menu-sides-1920_a0b07ca5.webp",
    alt: "Panjaz build your plate menu board for choosing sides",
  },
];

const plateSteps = [
  {
    number: "01",
    title: "Choose your rice",
    copy: "Coconut rice with guandules, arroz con pollo, or a clean, simple white rice base.",
  },
  {
    number: "02",
    title: "Pick your protein",
    copy: "From bistec encebollado to bright ceviche, choose the dish that makes your plate yours.",
  },
  {
    number: "03",
    title: "Make it a plate",
    copy: "Round it out with a Panamanian side, then settle in for a generous meal.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <div className="botanical botanical-left" aria-hidden="true" />
      <div className="botanical botanical-right" aria-hidden="true" />

      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Panjaz home">
          <img src={foodAssets.logo} alt="Panjaz Panamanian Cuisine" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu">Menus</a>
          <a href="#story">Our table</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="nav-cta" href={directionsUrl} target="_blank" rel="noreferrer">
          Get directions <ArrowUpRight size={15} strokeWidth={2.2} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section hero-section-interior">
          <div className="hero-interior-media" aria-hidden="true">
            <img src={foodAssets.restaurantInterior} alt="" />
            <div className="hero-interior-wash" />
          </div>
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span /> Panamanian cuisine in San Antonio</p>
            <h1>Pull up hungry.<br /><em>Leave with a story.</em></h1>
            <p className="hero-intro">
              Panjaz brings generous Panamanian plates, bright island flavors, and a table-worth-sharing spirit to every order.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#menu">View the menus <ArrowDownRight size={18} /></a>
              <a className="button-text" href="#story">Meet Panjaz <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-context reveal-up delay-1">
            <span><Sparkles size={15} /> Panjaz, now serving</span>
            <p>Panamanian flavor<br />made right here.</p>
          </div>
        </section>

        <section className="marquee-band" aria-label="Panjaz specialties">
          <div className="marquee-track">
            <span>ARROZ CON POLLO</span><i>◆</i><span>CEVICHE DE CORVINA</span><i>◆</i><span>EMPANADAS DE RES</span><i>◆</i><span>PLÁTANO MADURO</span><i>◆</i>
            <span>ARROZ CON POLLO</span><i>◆</i><span>CEVICHE DE CORVINA</span><i>◆</i><span>EMPANADAS DE RES</span><i>◆</i><span>PLÁTANO MADURO</span><i>◆</i>
          </div>
        </section>

        <section className="plate-section" id="plate">
          <div className="plate-ritual" aria-hidden="true">
            <span>coconut</span><i>✦</i><span>guandules</span><i>✦</i><span>sofrito</span>
          </div>
          <div className="section-intro reveal-up">
            <p className="eyebrow gold"><span /> The Panjaz way</p>
            <h2>A plate has<br /><em>a rhythm.</em></h2>
          </div>
          <div className="plate-steps">
            {plateSteps.map((step, index) => (
              <article className={`step-card reveal-up delay-${index + 1}`} key={step.number}>
                <span className="step-number">{step.number}</span>
                <div className="step-marker"><UtensilsCrossed size={18} /></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className="step-rule" />
              </article>
            ))}
          </div>
        </section>

        <section className="menu-gallery" id="menu" aria-labelledby="menu-gallery-title">
          <div className="menu-gallery-intro reveal-up">
            <div>
              <p className="eyebrow gold"><span /> See the full board</p>
              <h2 id="menu-gallery-title">Three screens.<br /><em>One generous plate.</em></h2>
            </div>
            <p>
              Follow the Panjaz build-your-plate rhythm from rice to protein to sides. Open any board for a closer look.
            </p>
          </div>
          <div className="menu-board-list">
            {menuBoards.map((board, index) => (
              <article className={`menu-board reveal-up delay-${Math.min(index + 1, 3)}`} key={board.number}>
                <div className="menu-board-meta">
                  <span className="menu-index">{board.number}</span>
                  <p className="eyebrow"><span /> {board.eyebrow}</p>
                  <h3>{board.title}</h3>
                  <p>{board.copy}</p>
                  <a href={board.image} target="_blank" rel="noreferrer" className="menu-full-link">
                    View full menu <ArrowUpRight size={17} />
                  </a>
                </div>
                <a href={board.image} target="_blank" rel="noreferrer" className="menu-board-image" aria-label={`Open ${board.title} menu board`}>
                  <img src={board.image} alt={board.alt} loading="lazy" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="food-story" id="story">
          <div className="story-media story-media-large reveal-up">
            <img src={foodAssets.bistec} alt="Bistec encebollado at Panjaz" />
            <p className="photo-caption"><span className="caption-kicker">Panjaz favorite</span>Bistec encebollado<br /><span>smoke, onions, comfort</span></p>
          </div>
          <div className="story-copy reveal-up delay-1">
            <p className="eyebrow gold"><span /> A table with character</p>
            <h2>Food that<br /><em>knows where it’s from.</em></h2>
            <p>
              Every plate at Panjaz starts with the generous, layered flavors of Panama—from savory slow-cooked meats to crisp fried favorites and bright citrus notes.
            </p>
            <p>
              This is food for regulars, first-timers, and anyone who knows that the best meal comes with a little conversation.
            </p>
            <a className="text-link" href="#visit">Come find your favorite <ArrowDownRight size={18} /></a>
          </div>
          <div className="story-media story-media-small reveal-up delay-2">
            <img src={foodAssets.empanadas} alt="Golden Panjaz empanadas" />
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-ornament" aria-hidden="true">P</div>
          <div className="visit-copy reveal-up">
            <p className="eyebrow"><span /> Find your way to Panjaz</p>
            <h2>Bring your appetite.<br /><em>We’ll bring the flavor.</em></h2>
            <p>
              Find us inside Chevron on Judson Road, serving a warm Panamanian plate every evening of the week.
            </p>
          </div>
          <div className="visit-details reveal-up delay-1">
            <div className="detail-card">
              <span className="detail-icon"><MapPin size={20} /></span>
              <div>
                <p className="detail-label">Location</p>
                <p className="detail-value">17510 Judson Rd<br />San Antonio, TX 78247</p>
              </div>
            </div>
            <div className="detail-divider" />
            <div className="detail-card">
              <span className="detail-icon"><ChevronDown size={20} /></span>
              <div>
                <p className="detail-label">Hours</p>
                <p className="detail-value">5:00 PM–11:00 PM<br />Every day</p>
              </div>
            </div>
            <a className="directions-link" href={directionsUrl} target="_blank" rel="noreferrer">
              Open in Google Maps <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">PANJAZ <span>•</span> PANAMANIAN CUISINE</div>
        <p>Made for hungry people and good conversation.</p>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
