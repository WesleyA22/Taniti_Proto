import { useState } from "react";
import {
  Waves, Menu, X, Star, MapPin, DollarSign,
  Shield, Stethoscope, Bus, Car, Bike, Navigation,
  CheckCircle, Clock,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

type Page = "home" | "attractions" | "lodging" | "transportation" | "contact";

const IMGS = {
  hero: "https://images.unsplash.com/photo-1760884464232-16171454c670?w=1600&h=900&fit=crop&auto=format",
  beach: "https://images.unsplash.com/photo-1759674950524-4dd2aaec63ee?w=800&h=500&fit=crop&auto=format",
  rainforest: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&h=500&fit=crop&auto=format",
  volcano: "https://images.unsplash.com/photo-1475598322381-f1b499717dda?w=800&h=500&fit=crop&auto=format",
  resort: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=800&h=600&fit=crop&auto=format",
  hotel: "https://images.unsplash.com/photo-1771992457539-a65d4a32ae37?w=500&h=350&fit=crop&auto=format",
  bnb: "https://images.unsplash.com/photo-1618111415065-c20b4e1afd41?w=500&h=350&fit=crop&auto=format",
  transport: "https://images.unsplash.com/photo-1772457898979-097daf96de22?w=800&h=500&fit=crop&auto=format",
  resortBeach: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=350&fit=crop&auto=format",
};

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar({ current, onNav }: { current: Page; onNav: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const nav = (p: Page) => { onNav(p); setOpen(false); window.scrollTo({ top: 0 }); };
  const links: { key: Page; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "attractions", label: "Attractions" },
    { key: "lodging", label: "Lodging" },
    { key: "transportation", label: "Transportation" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm shadow-sm border-b border-[#0077B6]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => nav("home")} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#0077B6] to-[#48CAE4]">
            <Waves size={15} className="text-white" />
          </div>
          <span
            className="text-[#1D3557] font-bold text-lg tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Taniti
          </span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => nav(l.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                current === l.key
                  ? "bg-[#0077B6] text-white"
                  : "text-[#1D3557] hover:bg-[#F4E7D0]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden p-2 rounded-lg text-[#1D3557]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-sky-100 px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.key}
              onClick={() => nav(l.key)}
              className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                current === l.key
                  ? "bg-[#0077B6] text-white"
                  : "text-[#1D3557] hover:bg-[#F4E7D0]"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Page header helper ──────────────────────────────────────────────────────

function PageHeader({
  eyebrow,
  title,
  subtitle,
  gradient,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  gradient: string;
}) {
  return (
    <div
      className="py-16 px-4 text-center text-white"
      style={{ background: gradient }}
    >
      <p className="text-white/70 text-xs font-semibold tracking-[0.25em] uppercase mb-2">
        {eyebrow}
      </p>
      <h1
        className="text-4xl sm:text-5xl font-bold"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {title}
      </h1>
      <p className="mt-3 text-white/80 max-w-lg mx-auto text-base">{subtitle}</p>
    </div>
  );
}

// ─── Home ────────────────────────────────────────────────────────────────────

function HomePage({ onNav }: { onNav: (p: Page) => void }) {
  const navigate = (p: Page) => { onNav(p); window.scrollTo({ top: 0 }); };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[580px] overflow-hidden">
        <img
          src={IMGS.hero}
          alt="Turquoise ocean meets a white sand beach on Taniti"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#1D3557]/45 to-[#1D3557]/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#48CAE4] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            A Small Island in the Pacific
          </p>
          <h1
            className="text-white text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-5 drop-shadow-lg"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Welcome to Taniti
          </h1>
          <p className="text-white/85 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Sandy beaches, lush rainforests, a lively harbor, and an active volcano — all within less than 500 square miles of Pacific paradise.
          </p>
          <button
            onClick={() => navigate("attractions")}
            className="px-9 py-4 rounded-full text-white font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{ background: "#FF6B6B" }}
          >
            Plan Your Trip →
          </button>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="bg-[#F9F6F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1D3557] mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Begin Your Adventure
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              From white sandy beaches encircling Yellow Leaf Bay to the island's active volcano — Taniti has something for every traveler.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: "attractions" as Page,
                title: "Explore Attractions",
                desc: "Swim at Yellow Leaf Bay, zip-line through the rainforest, visit the active volcano, or explore Merriton Landing's growing entertainment scene.",
                img: IMGS.beach,
                alt: "White sandy beach on Taniti encircling Yellow Leaf Bay",
                btn: "See Attractions",
                color: "#0077B6",
              },
              {
                key: "lodging" as Page,
                title: "Find Lodging",
                desc: "From Taniti's single four-star resort to cozy family-owned hotels and a budget hostel — all lodging is regulated and inspected by the Tanitian government.",
                img: IMGS.resort,
                alt: "Tropical resort with palm trees and pool",
                btn: "Browse Lodging",
                color: "#2A9D8F",
              },
              {
                key: "transportation" as Page,
                title: "Getting Around",
                desc: "Public buses run daily in Taniti City, taxis are available, and rental cars can be picked up near the airport. Bikes and helmets are also available to rent.",
                img: IMGS.transport,
                alt: "Scooter and bike rentals available on Taniti",
                btn: "Transportation",
                color: "#48CAE4",
              },
            ].map((card) => (
              <div
                key={card.key}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(card.key)}
              >
                <div className="h-52 overflow-hidden bg-sky-100">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1D3557] mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{card.desc}</p>
                  <button
                    className="px-5 py-2.5 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ background: card.color }}
                  >
                    {card.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D3557] text-white/60 text-center text-sm py-8">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Waves size={14} className="text-[#48CAE4]" />
          <span
            className="text-white font-semibold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Taniti Tourism Board
          </span>
        </div>
        <p>© 2025 · info@visittaniti.com · Taniti City, Pacific</p>
      </footer>
    </div>
  );
}

// ─── Attractions ─────────────────────────────────────────────────────────────

const attractionDetails = {
  beaches: {
    title: "Beaches & Yellow Leaf Bay",
    img: IMGS.beach,
    highlights: [
      "White sandy beaches encircle Yellow Leaf Bay near Taniti City",
      "Both sandy and rocky beaches are found around the island",
      "Snorkeling in the warm, clear Pacific waters",
      "Chartered fishing tours depart from the small harbor",
      "Boat tours of the island available from Yellow Leaf Bay",
    ],
    hours: "Beaches open year-round · Sunrise to sunset",
    price: "Free beach access · Charters and snorkel tours from $30/person",
    tips: "Taniti City's beaches are the most popular — arrive early on weekends.",
  },
  rainforest: {
    title: "Tropical Rainforest",
    img: IMGS.rainforest,
    highlights: [
      "Lush tropical rainforest covers much of Taniti's interior",
      "Guided hikes through diverse jungle terrain",
      "Zip-lining available through the rainforest canopy",
      "Rich wildlife including tropical birds and native flora",
      "Bus tours of the island include rainforest stops",
    ],
    hours: "Tours depart daily · Zip-line open 8:00 AM – 4:00 PM",
    price: "Guided hikes from $20/person · Zip-line from $45/person",
    tips: "Check national holiday schedules — some operators close on holidays.",
  },
  volcano: {
    title: "Active Volcano",
    img: IMGS.volcano,
    highlights: [
      "Taniti's mountainous interior includes a small, active volcano",
      "Guided volcano tours depart from Taniti City",
      "Helicopter rides offer aerial views of the volcano and coastline",
      "The rugged terrain makes for dramatic photography",
      "Tours are conducted safely with licensed local guides",
    ],
    hours: "Tours depart 7:00 AM & 12:00 PM · Weather permitting",
    price: "Ground tour from $55/person · Helicopter rides from $120/person",
    tips: "Book helicopter rides in advance — slots fill quickly in peak season.",
  },
  merriton: {
    title: "Merriton Landing",
    img: IMGS.beach,
    highlights: [
      "Rapidly developing entertainment district on the north side of Yellow Leaf Bay",
      "Several pubs and a local microbrewery",
      "A new dance club and movie theater",
      "Art galleries showcasing local Tanitian artists",
      "Arcade and bowling alley for family-friendly fun",
    ],
    hours: "Varies by venue · Most open from noon until late evening",
    price: "Free to explore · Individual venue admission varies",
    tips: "Alcohol is not served between midnight and 9:00 a.m. Drinking age is 18.",
  },
};

type AttractionKey = keyof typeof attractionDetails;

function AttractionsPage() {
  const [active, setActive] = useState<AttractionKey | null>(null);
  const detail = active ? attractionDetails[active] : null;

  const cards: { key: AttractionKey; title: string; img: string; alt: string; desc: string }[] = [
    {
      key: "beaches",
      title: "Beaches & Yellow Leaf Bay",
      img: IMGS.beach,
      alt: "White sandy beaches encircling Yellow Leaf Bay on Taniti",
      desc: "White sandy beaches encircle Yellow Leaf Bay near Taniti City. Snorkel the reef, join a chartered fishing tour, or simply enjoy the warm Pacific waters.",
    },
    {
      key: "rainforest",
      title: "Tropical Rainforest",
      img: IMGS.rainforest,
      alt: "Lush tropical jungle interior on Taniti",
      desc: "Taniti's lush interior rainforest is perfect for guided hikes or an exhilarating zip-line tour above the jungle canopy.",
    },
    {
      key: "volcano",
      title: "Active Volcano",
      img: IMGS.volcano,
      alt: "Taniti's small active volcano with lava flows",
      desc: "Taniti's mountainous interior is home to a small but active volcano. Join a guided ground tour or take a helicopter ride for breathtaking aerial views.",
    },
    {
      key: "merriton",
      title: "Merriton Landing",
      img: IMGS.beach,
      alt: "Merriton Landing entertainment district on Yellow Leaf Bay",
      desc: "The north side of Yellow Leaf Bay is rapidly developing into Taniti's top entertainment hub — pubs, a microbrewery, dance club, art galleries, and more.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <PageHeader
        eyebrow="What to See & Do"
        title="Attractions"
        subtitle="Beaches, rainforest, a live volcano, and a thriving entertainment district — Taniti has it all."
        gradient="linear-gradient(135deg, #0077B6 0%, #2A9D8F 100%)"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.key}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative bg-sky-100">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-bold text-[#1D3557] mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>
                <button
                  onClick={() => setActive(card.key)}
                  className="w-full py-2.5 rounded-xl text-white font-medium text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: "#0077B6" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional activities */}
        <div className="mt-14 bg-white rounded-2xl p-8 shadow-md">
          <h2
            className="text-2xl font-bold text-[#1D3557] mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            More to Do on Taniti
          </h2>
          <p className="text-gray-500 text-sm mb-5 leading-relaxed">
            Beyond the beaches, rainforest, and volcano, Taniti offers a growing range of activities for every kind of traveler.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Local History Museum",
              "Chartered Fishing Tours",
              "Snorkeling",
              "Zip-lining",
              "Microbrewery",
              "Dance Club",
              "Movie Theater",
              "Helicopter Rides",
              "Arcade",
              "Art Galleries",
              "Bowling",
              "Nine-Hole Golf Course (Opening Soon)",
            ].map((a) => (
              <span
                key={a}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[#1D3557]"
                style={{ background: "#F4E7D0" }}
              >
                {a}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Many activities are located in Merriton Landing on the north side of Yellow Leaf Bay. Note that many attractions and restaurants close on national holidays — plan accordingly.
          </p>
        </div>
      </div>

      <Dialog.Root open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[calc(100%-2rem)] max-w-lg max-h-[90vh] overflow-y-auto focus:outline-none">
            {detail && (
              <>
                <Dialog.Title className="sr-only">{detail.title}</Dialog.Title>
                <Dialog.Description className="sr-only">Details about {detail.title} on Taniti.</Dialog.Description>
                <div className="relative h-52 overflow-hidden rounded-t-2xl bg-sky-100">
                  <img
                    src={detail.img}
                    alt={detail.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h2
                      className="text-white text-2xl font-bold"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {detail.title}
                    </h2>
                  </div>
                  <Dialog.Close className="absolute top-3 right-3 w-8 h-8 bg-white/25 rounded-full flex items-center justify-center text-white hover:bg-white/45 transition-colors">
                    <X size={15} />
                  </Dialog.Close>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1D3557] mb-3 text-sm uppercase tracking-wider">
                    Highlights
                  </h3>
                  <ul className="space-y-2.5 mb-5">
                    {detail.highlights.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span
                          className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                          style={{ background: "#2A9D8F" }}
                        >
                          ✓
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-[#F4E7D0] rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center gap-2 text-sm text-[#1D3557]">
                      <Clock size={14} className="text-[#0077B6] flex-shrink-0" />
                      <span>{detail.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#1D3557]">
                      <DollarSign size={14} className="text-[#0077B6] flex-shrink-0" />
                      <span>{detail.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#1D3557]">
                      <MapPin size={14} className="text-[#0077B6] flex-shrink-0" />
                      <span>{detail.tips}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="mt-5 w-full py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90"
                    style={{ background: "#FF6B6B" }}
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

// ─── Lodging ─────────────────────────────────────────────────────────────────

const lodgingSections = [
  {
    category: "Resort",
    items: [
      {
        name: "Taniti Grand Resort",
        img: IMGS.resort,
        price: "$$$$  · Four-Star",
        stars: 4,
        desc: "Taniti's only large, four-star resort. Enjoy premium amenities, beachfront access on Yellow Leaf Bay, full-service dining, and a spa — all regulated and inspected by the Tanitian government.",
        amenities: ["Beachfront", "Full-Service Spa", "Restaurant & Bar", "Pool", "Concierge"],
        bookUrl: "#",
      },
    ],
  },
  {
    category: "Family-Owned Hotels",
    items: [
      {
        name: "Yellow Leaf Bay Hotel",
        img: IMGS.hotel,
        price: "$$  · Mid-Range",
        stars: 3,
        desc: "A well-loved family-owned hotel close to Taniti City's beaches. Comfortable rooms, friendly local staff, and easy access to the harbor and Merriton Landing.",
        amenities: ["Free WiFi", "Breakfast Available", "Harbor Views", "Parking", "AC"],
        bookUrl: "#",
      },
      {
        name: "Taniti City Inn",
        img: IMGS.resortBeach,
        price: "$$  · Mid-Range",
        stars: 3,
        desc: "A charming family-run hotel in the heart of Taniti City, within walking distance of native architecture, restaurants, and the bay. All rooms are government-inspected.",
        amenities: ["Free WiFi", "City Views", "Local Restaurant", "Walkable Location", "AC"],
        bookUrl: "#",
      },
    ],
  },
  {
    category: "Bed & Breakfasts",
    items: [
      {
        name: "Palm Cove B&B",
        img: IMGS.bnb,
        price: "$  · Budget-Friendly",
        stars: 4,
        desc: "One of Taniti's growing number of bed and breakfasts. Warm island hospitality, homemade breakfasts, and a relaxed atmosphere — strictly regulated by the Tanitian government.",
        amenities: ["Homemade Breakfast", "Garden", "Free WiFi", "Local Tips", "Airport Pickup"],
        bookUrl: "#",
      },
    ],
  },
  {
    category: "Hostel",
    items: [
      {
        name: "Taniti Traveler's Hostel",
        img: IMGS.resort,
        price: "$  · Budget",
        stars: 2,
        desc: "Taniti's inexpensive hostel option for budget-conscious travelers. Clean, safe, and government-inspected — a great base for exploring the island without breaking the bank.",
        amenities: ["Shared Kitchen", "Free WiFi", "Lockers", "Common Area", "Walking Distance to Beach"],
        bookUrl: "#",
      },
    ],
  },
];

function LodgingPage() {
  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <PageHeader
        eyebrow="Where to Stay"
        title="Lodging"
        subtitle="From Taniti's only four-star resort to budget hostels — all lodging is strictly regulated and regularly inspected by the Tanitian government."
        gradient="linear-gradient(135deg, #2A9D8F 0%, #48CAE4 100%)"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-14">
        {lodgingSections.map((section) => (
          <div key={section.category}>
            <h2
              className="text-2xl font-bold text-[#1D3557] mb-6 flex items-center gap-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="w-8 h-0.5 bg-[#2A9D8F] inline-block" />
              {section.category}
            </h2>
            <div className="space-y-5">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
                >
                  <div className="sm:w-56 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-sky-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-1.5">
                        <h3
                          className="text-xl font-bold text-[#1D3557]"
                          style={{ fontFamily: "Playfair Display, serif" }}
                        >
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-0.5 ml-3 flex-shrink-0">
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <Star
                              key={i}
                              size={13}
                              className="text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[#0077B6] font-semibold text-sm mb-2">{item.price}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.amenities.map((a) => (
                          <span
                            key={a}
                            className="px-2.5 py-1 bg-[#F4E7D0] text-[#1D3557] text-xs rounded-full font-medium"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={item.bookUrl}
                      className="inline-block px-6 py-2.5 rounded-xl text-white text-sm font-medium text-center transition-all hover:opacity-90 w-full sm:w-auto"
                      style={{ background: "#FF6B6B" }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Transportation ──────────────────────────────────────────────────────────

const transportData = {
  bus: {
    icon: Bus,
    name: "Public Bus",
    color: "#0077B6",
    summary: "Daily service throughout Taniti City",
    details: {
      Routes: [
        "Public buses serve Taniti City and surrounding areas",
        "Private buses serve the rest of the island",
        "Bus tours of the full island are available for tourists",
      ],
      Schedule: "Daily 5:00 AM – 11:00 PM, every day of the week.",
      Fare: "Fare varies by route. Bus tours of the island available — ask at your hotel.",
    },
  },
  taxi: {
    icon: Navigation,
    name: "Taxi",
    color: "#FF6B6B",
    summary: "Available throughout Taniti City",
    details: {
      Availability: "Taxis are available in Taniti City. Hail on the street or ask your hotel to call one.",
      Rates: "Metered fares. Rates are set by the Tanitian government. Always confirm the fare before departure.",
      Notes: "Taniti City is fairly flat and very walkable — many visitors find taxis only necessary for longer trips.",
    },
  },
  rental: {
    icon: Car,
    name: "Rental Car",
    color: "#2A9D8F",
    summary: "Pick up near the Taniti airport",
    details: {
      Location: "Rental cars are available from a local agency located near the Taniti airport.",
      Access: "Almost all visitors arrive by air. The airport accommodates small jets and propeller planes. Airport expansion for larger jets is underway.",
      Notes: "A valid driver's license is required. Rental cars give you the most flexibility for exploring the full island.",
    },
  },
  bike: {
    icon: Bike,
    name: "Bike Rental",
    color: "#2A9D8F",
    summary: "Explore Taniti City and Merriton Landing",
    details: {
      Locations: [
        "Several vendors offer bikes and helmets for rent around Taniti City",
        "Merriton Landing area is easy to explore on foot or by bike",
        "Ask your hotel or hostel for the nearest rental vendor",
      ],
      "Helmet Law": "Helmets are required by law when riding a bike on Taniti. All rental vendors provide helmets.",
      Notes: "Taniti City is fairly flat and very bikeable. Merriton Landing on Yellow Leaf Bay is also easy to explore by bike.",
    },
  },
};

type TransportKey = keyof typeof transportData;

function TransportationPage() {
  const [active, setActive] = useState<TransportKey | null>(null);
  const keys: TransportKey[] = ["bus", "taxi", "rental", "bike"];
  const detail = active ? transportData[active] : null;

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <PageHeader
        eyebrow="Getting Around"
        title="Transportation"
        subtitle="Almost all visitors arrive by air. Once on the island, buses, taxis, rental cars, and bikes make getting around easy."
        gradient="linear-gradient(135deg, #0077B6 0%, #48CAE4 100%)"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        {/* Arrival note */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#48CAE4]/20 mb-10 flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#0077B6" + "18" }}>
            <Navigation size={18} style={{ color: "#0077B6" }} />
          </div>
          <div>
            <p className="font-semibold text-[#1D3557] text-sm mb-0.5">Arriving on Taniti</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Almost all visitors arrive by air at Taniti's small airport (small jets and propeller planes). A small cruise ship also docks in Yellow Leaf Bay one night per week. Airport expansion for larger jets is currently underway.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {keys.map((key) => {
            const t = transportData[key];
            const Icon = t.icon;
            return (
              <div
                key={key}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setActive(key)}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: t.color + "18" }}
                  >
                    <Icon size={26} style={{ color: t.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#1D3557]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {t.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">{t.summary}</p>
                  </div>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: t.color }}
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog.Root open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />
          <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[calc(100%-2rem)] max-w-md max-h-[85vh] overflow-y-auto focus:outline-none">
            {detail && active && (
              <div className="p-6">
                <Dialog.Title className="sr-only">{detail.name} — Transportation Details</Dialog.Title>
                <Dialog.Description className="sr-only">Details about {detail.name} transportation options on Taniti.</Dialog.Description>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: detail.color + "18" }}
                    >
                      {(() => {
                        const Icon = detail.icon;
                        return <Icon size={22} style={{ color: detail.color }} />;
                      })()}
                    </div>
                    <h2
                      className="text-2xl font-bold text-[#1D3557]"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {detail.name}
                    </h2>
                  </div>
                  <Dialog.Close className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                    <X size={15} />
                  </Dialog.Close>
                </div>
                <div className="space-y-3">
                  {Object.entries(detail.details).map(([k, v]) => (
                    <div key={k} className="bg-[#F4E7D0] rounded-xl p-4">
                      <h4 className="font-semibold text-[#1D3557] mb-2 text-sm">{k}</h4>
                      {Array.isArray(v) ? (
                        <ul className="space-y-1.5">
                          {v.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span
                                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                style={{ background: detail.color }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-600">{v}</p>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="mt-5 w-full py-3 rounded-xl text-white font-medium transition-opacity hover:opacity-90"
                  style={{ background: detail.color }}
                >
                  Got it
                </button>
              </div>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

type FormData = { name: string; email: string; subject: string; message: string };

function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#48CAE4] focus:border-transparent transition-all bg-white";

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <PageHeader
        eyebrow="Visitor Information"
        title="Contact & Visitor Info"
        subtitle="Practical information to help you have a safe, smooth, and memorable visit to Taniti."
        gradient="linear-gradient(135deg, #1D3557 0%, #0077B6 100%)"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: DollarSign,
              color: "#2A9D8F",
              title: "Currency & Money",
              items: [
                "Taniti uses the U.S. dollar as its official currency",
                "Many businesses also accept euros and yen",
                "Several banks offer currency exchange services",
                "Most businesses accept major credit cards",
                "Power outlets are 120 volts (same as the United States)",
              ],
            },
            {
              icon: Shield,
              color: "#0077B6",
              title: "Safety",
              items: [
                "Violent crime is very rare on Taniti",
                "As tourism grows, petty theft and pickpocketing are increasing — stay alert in crowded areas",
                "Alcohol is not served or sold between midnight and 9:00 a.m.",
                "Drinking age is 18 and is not strictly enforced",
                "Many national holidays — check schedules before visiting attractions",
              ],
            },
            {
              icon: Stethoscope,
              color: "#FF6B6B",
              title: "Hospital & Medical",
              items: [
                "Taniti has one hospital with multilingual employees",
                "Several clinics are available across the island",
                "The hospital can handle most tourist medical needs",
                "Travel health insurance is strongly recommended",
                "Many younger Tanitians speak English; less English in rural areas",
              ],
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="bg-white rounded-2xl p-6 shadow-md">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: card.color + "18" }}
                >
                  <Icon size={22} style={{ color: card.color }} />
                </div>
                <h3
                  className="text-xl font-bold text-[#1D3557] mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: card.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 max-w-2xl mx-auto">
          <h2
            className="text-3xl font-bold text-[#1D3557] mb-1"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact the Tourism Board
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Our team is available 7 days a week to answer your questions about visiting Taniti.
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "#2A9D8F1A" }}
              >
                <CheckCircle size={34} style={{ color: "#2A9D8F" }} />
              </div>
              <h3
                className="text-xl font-bold text-[#1D3557] mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Message Sent!
              </h3>
              <p className="text-gray-500 text-sm">
                Thank you for reaching out. The Taniti Tourism Board will respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 px-6 py-2.5 rounded-xl text-white font-medium text-sm transition-opacity hover:opacity-90"
                style={{ background: "#0077B6" }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1D3557] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1D3557] mb-1.5">Subject</label>
                <select
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Select a subject...</option>
                  <option value="attractions">Attractions & Activities</option>
                  <option value="lodging">Lodging & Accommodation</option>
                  <option value="transportation">Transportation & Getting Here</option>
                  <option value="safety">Safety & Travel Advisories</option>
                  <option value="dining">Dining & Restaurants</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1D3557] mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us how we can help you plan your visit to Taniti..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.99]"
                style={{ background: "#FF6B6B" }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1D3557] text-white/60 text-center text-sm py-8 mt-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Waves size={14} className="text-[#48CAE4]" />
          <span
            className="text-white font-semibold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Taniti Tourism Board
          </span>
        </div>
        <p>© 2025 · info@visittaniti.com · Taniti City, Pacific</p>
      </footer>
    </div>
  );
}

// ─── App root ────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-[#F9F6F0]" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar current={page} onNav={setPage} />
      {page === "home" && <HomePage onNav={setPage} />}
      {page === "attractions" && <AttractionsPage />}
      {page === "lodging" && <LodgingPage />}
      {page === "transportation" && <TransportationPage />}
      {page === "contact" && <ContactPage />}
    </div>
  );
}
