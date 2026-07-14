import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

type Artwork = {
  id: number;
  title: string;
  medium: string;
  year: string;
  img: string;
  featured?: boolean;
  tall?: boolean;
};

type Model = {
  id: number;
  title: string;
  software: string;
  year: string;
  sketchfabId: string;
};

const originalCharacters: Artwork[] = [
  {
    id: 1,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2023",
    img: "src/imports/hmmdunno 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 2,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2024",
    img: "src/imports/Illustration14 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 3,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2023",
    img: "src/imports/school 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 4,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2023",
    img: "src/imports/neeeww 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 5,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2023",
    img: "src/imports/Illustration3 2.png",
    tall: true,
  },

  {
    id: 6,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2023",
    img: "src/imports/ih24h 2.png",
    tall: true,
  },
  {
    id: 7,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/shimtoro 3.png",
    featured: true,
    tall: true,
  },
  {
    id: 8,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/shim_ver2 3.png",
    tall: true,
  },
  {
    id: 9,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/gqasgq 1.png",
    tall: true,
  },
];

const fanArts: Artwork[] = [
  {
    id: 1,
    title: "Nerissa Ravencroft",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/nerissa_ravencroft 3.png",
    featured: true,
  },
  {
    id: 2,
    title: "Frieren",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/frieren 2.png",
    tall: true,
  },
  {
    id: 3,
    title: "Kaffy",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/kaffy_kaffy 2.png",
    tall: true,
  },
  {
    id: 4,
    title: "Seleeeenn",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/seleeeenn 1.png",
    tall: true,
  },
  {
    id: 5,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Illustration17 2.png",
    tall: true,
  },
  {
    id: 6,
    title: "Reihns",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Reihns1 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 7,
    title: "Mxtsukee",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/mxtsukee 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 8,
    title: "Rozettiaday",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/rozettiaday 2.png",
    featured: true,
    tall: true,
  },
  {
    id: 9,
    title: "Mori Calliope",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/moricalliope 2.png",
    featured: true,
    tall: true,
  },
];

const commissions: Artwork[] = [
  {
    id: 1,
    title: "BambiBerries",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/BambiBerries 1.png",
    featured: true,
    tall: true,
  },
  {
    id: 2,
    title: "Tsukee",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/tsukee 1.png",
    featured: true,
    tall: true,
  },
  {
    id: 3,
    title: "Rxnkou",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Rxnkou1 1.png",
    featured: true,
    tall: true,
  },
  {
    id: 4,
    title: "Rxnkou",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Rxnkou 2.png",
    featured: true,
    tall: true,
  },
];

const chibis: Artwork[] = [
  {
    id: 1,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/shimm 3.png",
    featured: true,
  },
  {
    id: 2,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/shimm1 2.png",
    featured: true,
  },
  {
    id: 3,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/3 3.png",
    featured: true,
  },
  {
    id: 4,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/6 2.png",
    featured: true,
  },
  {
    id: 5,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/2 3.png",
  },
  {
    id: 6,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/5 2.png",
  },
  {
    id: 7,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/6 2.png",
  },
  {
    id: 8,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/6.1 2.png",
  },
  {
    id: 9,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/tsukechibi 1.png",
    featured: true,
  },
  {
    id: 9,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/renkou chibi 1.png",
  },
  {
    id: 9,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/REIHSN 1.png",
  },
  {
    id: 9,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/kayze 1.png",
  },
  {
    id: 9,
    title: "Chibi",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/ROZE 1.png",
  },
];

const sketches: Artwork[] = [
  {
    id: 1,
    title: "Binocular Army Girl",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Slice 35.png",
    featured: true,
  },
  {
    id: 2,
    title: "Totoro",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/totoro 2.png",
    featured: true,
  },

  {
    id: 3,
    title: "Original Character",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/asdfg 2.png",
    featured: true,
  },
  {
    id: 3,
    title: "Gordy",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/gordy.png",
    featured: true,
  },
  {
    id: 4,
    title: "Backpack",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/backpack 2.png",
  },
  {
    id: 5,
    title: "Boots",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/boots 2.png",
  },
  {
    id: 6,
    title: "Exotic Bird",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/exotic bird 1.png",
  },
  {
    id: 7,
    title: "Trek",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/trek 2.png",
  },
  {
    id: 8,
    title: "OC Sketch",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/Illustration27 1.png",
    featured: true,
  },
  {
    id: 9,
    title: "Gojo from JJK ",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/GOJO 1.png",
  },
  {
    id: 9,
    title: "Makima from JJK",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/makima 1.png",
  },
  {
    id: 9,
    title: "Ban from TSDS",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/ban 1.png",
  },
  {
    id: 9,
    title: "OC Sketch",
    medium: "Digital Illustration",
    year: "2025",
    img: "src/imports/akira 1.png",
  },
];

const models3d: Model[] = [
  {
    id: 1,
    title: "MUSHROOM",
    software: "Blender",
    year: "2024",
    sketchfabId: "9c40bcfd3984453293ffa21b630eaa76",
  },
  {
    id: 2,
    title: "TULIP",
    software: "Blender",
    year: "2025",
    sketchfabId: "1396a909567f4120bd56581427f4882f",
  },
  {
    id: 3,
    title: "GPU",
    software: "Blender",
    year: "2025",
    sketchfabId: "95f0d6d526ed47d79f14fba9f342e66c",
  },
  {
    id: 4,
    title: "CPU COOLER",
    software: "Blender",
    year: "2025",
    sketchfabId: "20a224cf8dc44a13a85dae2209511b9b",
  },
  {
    id: 5,
    title: "MOTHERBOARD",
    software: "Blender",
    year: "2025",
    sketchfabId: "68eaa94f03304daa873f41457566d56a",
  },
  {
    id: 6,
    title: "PSU",
    software: "Blender",
    year: "2025",
    sketchfabId: "1e58755527ea45fea06cf7766dd11b4d",
  },
  {
    id: 7,
    title: "CASE",
    software: "Blender",
    year: "2025",
    sketchfabId: "ceea8e50d2db4ee6bbfdec8050949134",
  },
  {
    id: 8,
    title: "RAM",
    software: "Blender",
    year: "2025",
    sketchfabId: "f968a90299c040f5ac331931e14d1ae1",
  },
  {
    id: 9,
    title: "CPU",
    software: "Blender",
    year: "2025",
    sketchfabId: "ccce04845b284d3db42636402dffb2e9",
  },
  {
    id: 10,
    title: "SSD",
    software: "Blender",
    year: "2025",
    sketchfabId: "fdfe5c9e4616404dac5d700214c27716",
  },
  {
    id: 11,
    title: "SCREWDRIVER",
    software: "Blender",
    year: "2025",
    sketchfabId: "41233ce1a56e4eaaaf7baf5a069511ae",
  },
  {
    id: 12,
    title: "SCREW",
    software: "Blender",
    year: "2025",
    sketchfabId: "3e68f5567ca9415a8176201f38573337",
  },
  {
    id: 13,
    title: "THERMAL PASTE",
    software: "Blender",
    year: "2025",
    sketchfabId: "1f3d78897bba4bb0a9102263618f346a",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jpclaudio/",
  },
  {
    name: "Behance",
    url: "https://www.behance.net/johnpaulclaudio",
  },
  { name: "X", url: "https://x.com/cldshim" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/cldshim/?hl=en",
  },
];

const NAV_LINKS = [
  "Home",
  "About",
  "Illustration",
  "3D Models",
  "Contact",
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────

function useInView(
  ref: React.RefObject<HTMLDivElement | null>,
) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return visible;
}

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(24px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function ArtworkCard({
  art,
  galleryId,
}: {
  art: Artwork;
  galleryId: string;
}) {
  const [hovered, setHovered] = useState(false);
  const uid = `${galleryId}-${art.id}`;
  return (
    <div
      data-featured={art.featured ? "true" : undefined}
      className="artwork-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#1a1c10",
        cursor: "pointer",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={art.img}
        alt={art.title}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: art.tall ? "contain" : "cover",
          display: "block",
          transform: hovered ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.6s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(34,37,24,0.92) 0%, transparent 55%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          transform: hovered
            ? "translateY(0)"
            : "translateY(10px)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "#F5F5DC",
            fontFamily: "'Fraunces', Georgia, serif",
            marginBottom: 3,
          }}
        >
          {art.title}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(245,245,220,0.6)",
            letterSpacing: "0.06em",
          }}
        >
          {art.medium} · {art.year}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          width: 7,
          height: 7,
          borderRadius: "50%",
          backgroundColor: "#F80101",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      {/* invisible key to silence unused var warning */}
      <span style={{ display: "none" }}>{uid}</span>
    </div>
  );
}

function GalleryGrid({
  artworks,
  galleryId,
}: {
  artworks: Artwork[];
  galleryId: string;
}) {
  return (
    <div className="art-grid">
      {artworks.map((art, i) => (
        <FadeIn
          key={art.id}
          delay={i * 60}
          style={{
            gridColumn: art.featured ? "span 2" : "span 1",
            gridRow: art.featured ? "span 2" : "span 1",
          }}
        >
          <div style={{ height: "100%" }}>
            <ArtworkCard art={art} galleryId={galleryId} />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function GallerySection({
  num,
  title,
  artworks,
  galleryId,
}: {
  num: string;
  title: string;
  artworks: Artwork[];
  galleryId: string;
}) {
  return (
    <div className="gallery-section">
      <FadeIn>
        <div
          style={{
            marginBottom: 40,
            display: "flex",
            alignItems: "baseline",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F80101",
              fontWeight: 600,
            }}
          >
            {num}
          </span>
          <h3
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#F5F5DC",
              margin: 0,
            }}
          >
            {title}
          </h3>
        </div>
      </FadeIn>
      <GalleryGrid artworks={artworks} galleryId={galleryId} />
    </div>
  );
}

function Model3DCard({ model }: { model: Model }) {
  const [loaded, setLoaded] = useState(false);
  if (!model.sketchfabId) return null;
  return (
    <FadeIn>
      <div
        className="model-card"
        onMouseEnter={() => setLoaded(true)}
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "75%",
            backgroundColor: "#111",
          }}
        >
          {loaded ? (
            <iframe
              title={model.title}
              src={`https://sketchfab.com/models/${model.sketchfabId}/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_watermark_link=0&preload=1`}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                color: "rgba(245,245,220,0.35)",
                cursor: "pointer",
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Hover to load 3D model
              </span>
            </div>
          )}
        </div>
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(245,245,220,0.1)",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#F5F5DC",
                fontFamily: "'Fraunces', Georgia, serif",
                marginBottom: 2,
              }}
            >
              {model.title}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(245,245,220,0.55)",
                letterSpacing: "0.06em",
              }}
            >
              {model.software} · {model.year}
            </div>
          </div>
          <a
            href={`https://sketchfab.com/3d-models/${model.sketchfabId}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(245,245,220,0.45)",
              textDecoration: "none",
              fontWeight: 500,
              border: "1px solid rgba(245,245,220,0.2)",
              padding: "5px 12px",
              flexShrink: 0,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              const a = e.currentTarget;
              a.style.color = "#F5F5DC";
              a.style.borderColor = "rgba(245,245,220,0.5)";
            }}
            onMouseLeave={(e) => {
              const a = e.currentTarget;
              a.style.color = "rgba(245,245,220,0.45)";
              a.style.borderColor = "rgba(245,245,220,0.2)";
            }}
          >
            Sketchfab
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) =>
      l.toLowerCase().replace(" ", "-"),
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.25 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', system-ui, sans-serif",
        backgroundColor: "#222518",
        color: "#F5F5DC",
        minHeight: "100vh",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: "rgba(34,37,24,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(245,245,220,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => scrollTo("home")}
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#F5F5DC",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            JP.CLOUD
          </button>

          {/* Desktop links */}
          <div className="nav-desktop">
            {NAV_LINKS.map((link) => {
              const id = link.toLowerCase().replace(" ", "-");
              const active = activeSection === id;
              return (
                <button
                  key={link}
                  onClick={() => scrollTo(id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px 0",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: active
                      ? "#F80101"
                      : "rgba(245,245,220,0.6)",
                    borderBottom: active
                      ? "1px solid #F80101"
                      : "1px solid transparent",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F5F5DC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = active
                      ? "#F80101"
                      : "rgba(245,245,220,0.6)";
                  }}
                >
                  {link}
                </button>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex-end",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  backgroundColor: "#F5F5DC",
                  transition: "transform 0.2s, opacity 0.2s",
                  transform:
                    menuOpen && i === 0
                      ? "translateY(6.5px) rotate(45deg)"
                      : menuOpen && i === 2
                        ? "translateY(-6.5px) rotate(-45deg)"
                        : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              backgroundColor: "rgba(26,28,16,0.98)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() =>
                  scrollTo(link.toLowerCase().replace(" ", "-"))
                }
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "12px 0",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F5F5DC",
                  textAlign: "left",
                  borderBottom:
                    "1px solid rgba(245,245,220,0.06)",
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 40px 80px",
          paddingTop: 60,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "38%",
            bottom: 0,
            backgroundColor: "#F80101",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            background:
              "linear-gradient(105deg, #222518 57%, transparent 57%)",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,245,220,0.45)",
              fontWeight: 400,
              display: "block",
              marginBottom: 16,
            }}
          >
            John Paul Claudio Portfolio — 2026
          </span>
          <h1
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: "clamp(64px, 11vw, 136px)",
              fontWeight: 900,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#F5F5DC",
              margin: "0 0 32px",
            }}
          >
            Art &<br />
            <em
              style={{ fontStyle: "italic", color: "#F80101" }}
            >
              Vision
            </em>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 360,
                color: "rgba(245,245,220,0.7)",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Illustrator and 3D artist crafting worlds at the
              intersection of concept and craft. Open for Work.
            </p>
            <button
              onClick={() => scrollTo("illustration")}
              style={{
                backgroundColor: "#F80101",
                color: "#F5F5DC",
                border: "none",
                padding: "13px 30px",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#cc0000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#F80101";
              }}
            >
              View Work
            </button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 1,
              height: 56,
              backgroundColor: "rgba(245,245,220,0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                backgroundColor: "#F5F5DC",
                animation:
                  "scrollLine 1.8s ease-in-out infinite",
              }}
            />
          </div>
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,245,220,0.35)",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        style={{
          backgroundColor: "#F80101",
          padding: "100px 40px",
        }}
      >
        <div
          className="about-grid"
          style={{ maxWidth: 1280, margin: "0 auto" }}
        >
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#F5F5DC",
                margin: "0 0 8px",
              }}
            >
              About Me
            </h2>
            <div
              style={{
                width: 44,
                height: 2,
                backgroundColor: "rgba(245,245,220,0.4)",
                marginBottom: 28,
              }}
            />
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(245,245,220,0.85)",
                fontWeight: 300,
                margin: "0 0 18px",
              }}
            >
              I'm an independent artist working at the
              crossroads of traditional illustration and digital
              craftsmanship. My work spans hand-drawn
              narratives, concept art, editorial illustration,
              and sculptural 3D renders.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(245,245,220,0.85)",
                fontWeight: 300,
                margin: "0 0 36px",
              }}
            >
              I'm drawn to work that lives between the tangible
              and the imagined — where a brushstroke can become
              a polygon and a model can carry emotion. Open to
              worldwide projects.
            </p>
            <div
              className="tools-wrap"
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {[
                "CLIP STUDIO PAINT",
                "Blender",
                "FIGMA",
                "CAPCUT",
                "DAVINCI RESOLVE",
              ].map((tool) => (
                <span
                  key={tool}
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(245,245,220,0.4)",
                    padding: "5px 10px",
                    color: "rgba(245,245,220,0.7)",
                    fontWeight: 500,
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={140}>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  backgroundColor: "rgba(34,37,24,0.3)",
                }}
              >
                <img
                  src="/src/imports/cc110c82-0ef7-404d-bc7e-b42ba6b50e24-1_all_17252.jpg"
                  alt="John Paul Claudio"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(15%)",
                  }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ARTS & ILLUSTRATION ── */}
      <section
        id="illustration"
        style={{
          backgroundColor: "#222518",
          padding: "100px 40px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section banner */}
          <FadeIn>
            <div
              style={{
                marginBottom: 72,
                paddingBottom: 32,
                borderBottom: "1px solid rgba(245,245,220,0.1)",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#F80101",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                Gallery
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "clamp(48px, 8vw, 96px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#F5F5DC",
                  margin: 0,
                  lineHeight: 0.95,
                }}
              >
                Arts &<br />
                <em style={{ fontStyle: "italic" }}>
                  Illustration
                </em>
              </h2>
            </div>
          </FadeIn>

          {/* Categories */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 96,
            }}
          >
            <GallerySection
              num="01 — "
              title="Original Characters"
              artworks={originalCharacters}
              galleryId="oc"
            />
            <GallerySection
              num="02 — "
              title="Fan Arts"
              artworks={fanArts}
              galleryId="fa"
            />
            <GallerySection
              num="03 — "
              title="Commissions"
              artworks={commissions}
              galleryId="cm"
            />
            <GallerySection
              num="04 — "
              title="Chibis"
              artworks={chibis}
              galleryId="cb"
            />
            <GallerySection
              num="05 — "
              title="Sketches"
              artworks={sketches}
              galleryId="sk"
            />
          </div>
        </div>
      </section>

      {/* ── 3D MODELS ── */}
      <section
        id="3d-models"
        style={{
          backgroundColor: "#F80101",
          padding: "100px 40px",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div
              style={{
                marginBottom: 56,
                paddingBottom: 32,
                borderBottom: "1px solid rgba(245,245,220,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(245,245,220,0.55)",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                Interactive Gallery
              </span>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: "clamp(48px, 8vw, 96px)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#F5F5DC",
                  margin: 0,
                  lineHeight: 0.95,
                }}
              >
                3D Models
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(245,245,220,0.6)",
                  marginTop: 16,
                  fontWeight: 300,
                }}
              >
                Hover over a card to load the interactive 3D
                viewer.
              </p>
            </div>
          </FadeIn>
          <div className="models-grid">
            {models3d.map((model) => (
              <Model3DCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{
          backgroundColor: "#222518",
          padding: "120px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 720,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <FadeIn>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#F80101",
              }}
            >
              Let's collaborate
            </span>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: "clamp(48px, 8vw, 96px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#F5F5DC",
                margin: "14px 0 0",
                lineHeight: 1,
              }}
            >
              Get in
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "#F80101",
                }}
              >
                Touch
              </em>
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(245,245,220,0.6)",
                margin: "24px 0 40px",
                fontWeight: 300,
              }}
            >
              Digital Arts, Illustration, 3D Modeling and Video
              Editing. Response within 48 hours.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=johnpaulclaudio0609@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#F80101",
                color: "#F5F5DC",
                padding: "16px 44px",
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#cc0000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "#F80101";
              }}
            >
              Email me now!
            </a>
          </FadeIn>
          <FadeIn delay={300}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 36,
                marginTop: 56,
                borderTop: "1px solid rgba(245,245,220,0.08)",
                paddingTop: 44,
                flexWrap: "wrap",
              }}
            >
              {socialLinks.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(245,245,220,0.4)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#F80101";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "rgba(245,245,220,0.4)";
                  }}
                >
                  {p.name}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          backgroundColor: "#1a1c10",
          borderTop: "1px solid rgba(245,245,220,0.06)",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 15,
            fontWeight: 700,
            color: "rgba(245,245,220,0.45)",
          }}
        >
          JP.CLOUD
        </span>
        <span
          style={{
            fontSize: 11,
            color: "rgba(245,245,220,0.22)",
            letterSpacing: "0.06em",
          }}
        >
          © 2026 · All rights reserved
        </span>
      </footer>

      <style>{`
        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #222518; }
        ::-webkit-scrollbar-thumb { background: #F80101; }

        /* Scroll animation */
        @keyframes scrollLine {
          0%   { height: 0%;   top: 0; }
          50%  { height: 100%; top: 0; }
          100% { height: 0%;   top: 100%; }
        }

        /* Nav responsive */
        .nav-desktop { display: flex; gap: 28px; align-items: center; }
        .nav-hamburger { display: none; }

        /* About grid */
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

        /* Art grid — desktop: 4 cols, auto rows */
        .art-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 260px;
          gap: 12px;
        }

        /* Artwork card height fill */
        .artwork-card { height: 100%; }

        /* Gallery section dividers */
        .gallery-section { padding-top: 16px; }

        /* 3D models grid — desktop: 3 cols */
        .models-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Model card hover border */
        .model-card { transition: outline 0.2s; }
        .model-card:hover { outline: 1px solid rgba(245,245,220,0.25); }

        /* ── Tablet (≤1024px) — keep desktop nav, shrink grids ── */
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .art-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 220px;
          }
          .models-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile (≤768px) — hamburger replaces nav ── */
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-hamburger { display: flex; }
        }

        /* ── Mobile grid (≤640px) ── */
        @media (max-width: 640px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          section[id="home"] { padding-bottom: 60px !important; }
          .art-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 180px;
            gap: 8px;
          }
          /* On mobile, featured items take only 2 cols (full width) but not extra row */
          [data-featured="true"] {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
          .models-grid { grid-template-columns: 1fr; }
          .tools-wrap { gap: 6px; }
        }

        /* ── Very small (≤380px) ── */
        @media (max-width: 380px) {
          .art-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 260px;
          }
          [data-featured="true"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}