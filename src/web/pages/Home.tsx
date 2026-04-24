import { useEffect, useRef } from "react";

const WHATSAPP = "5521920018580";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "linear-gradient(180deg, rgba(13,6,24,0.95) 0%, rgba(13,6,24,0) 100%)",
        backdropFilter: "blur(2px)",
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700 }}>
        <span style={{ color: "#c084fc" }}>Nova</span>{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #f5d67b, #d4af37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Supremo
        </span>
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Cardápio", "Sobre", "Entrega", "Contato"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: "#a78bca",
              textDecoration: "none",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 500,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f5d67b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a78bca")}
          >
            {item}
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "linear-gradient(135deg, #8b2fc9, #6b21a8)",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "2rem",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            textDecoration: "none",
            letterSpacing: "0.05em",
            boxShadow: "0 0 20px rgba(139,47,201,0.4)",
            transition: "box-shadow 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 40px rgba(139,47,201,0.7)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 20px rgba(139,47,201,0.4)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Pedir Agora
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0d0618 0%, #1a0a2e 50%, #0d0618 100%)",
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,47,201,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 2rem 4rem",
          width: "100%",
        }}
      >
        {/* Left: Text */}
        <div style={{ animation: "fadeInUp 0.8s ease forwards" }}>
          <div
            style={{
              display: "inline-block",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1.5rem",
              textTransform: "uppercase",
              border: "1px solid rgba(212,175,55,0.3)",
              padding: "0.4rem 1rem",
              borderRadius: "2rem",
            }}
          >
            ✦ Nova Iguaçu · Santa Eugênia
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              fontWeight: 900,
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "#f5f0ff" }}>O Melhor</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc, #8b2fc9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Açaí
            </span>{" "}
            <span style={{ color: "#f5f0ff" }}>da</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              Região
            </span>
          </h1>

          <p
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: "1.1rem",
              color: "#a78bca",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "440px",
              animation: "fadeInUp 0.8s 0.2s ease both",
            }}
          >
            Açaí premium, sorvetes artesanais e muito mais. Sabor de verdade, com entrega na sua porta em Nova Iguaçu.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeInUp 0.8s 0.4s ease both" }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #8b2fc9, #6b21a8)",
                color: "#fff",
                padding: "1rem 2.5rem",
                borderRadius: "3rem",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                boxShadow: "0 0 30px rgba(139,47,201,0.5)",
                transition: "all 0.2s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 0 50px rgba(139,47,201,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(139,47,201,0.5)";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir pelo WhatsApp
            </a>
            <a
              href="#cardápio"
              style={{
                border: "1px solid rgba(192,132,252,0.4)",
                color: "#c084fc",
                padding: "1rem 2rem",
                borderRadius: "3rem",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(192,132,252,0.1)";
                e.currentTarget.style.borderColor = "rgba(192,132,252,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(192,132,252,0.4)";
              }}
            >
              Ver Cardápio
            </a>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(139,47,201,0.2)",
              animation: "fadeInUp 0.8s 0.6s ease both",
            }}
          >
            {[
              { value: "500+", label: "Clientes felizes" },
              { value: "20+", label: "Sabores" },
              { value: "⭐ 5.0", label: "Avaliação" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#a78bca", fontFamily: "'Raleway', sans-serif" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 1s 0.3s ease both",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,47,201,0.4) 0%, transparent 65%)",
              filter: "blur(30px)",
            }}
          />
          <img
            src="/hero-acai.png"
            alt="Açaí Premium Nova Supremo"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "20px",
              objectFit: "cover",
              position: "relative",
              zIndex: 2,
              boxShadow: "0 20px 60px rgba(139,47,201,0.4), 0 0 100px rgba(139,47,201,0.2)",
              animation: "float 5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "#a78bca",
          fontSize: "0.75rem",
          fontFamily: "'Raleway', sans-serif",
          letterSpacing: "0.15em",
          animation: "fadeIn 2s 1s both",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(180deg, #8b2fc9, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────
function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: "7rem 2rem",
        background: "linear-gradient(180deg, #0d0618 0%, #1a0a2e 50%, #0d0618 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Image */}
          <div className="reveal" style={{ position: "relative" }}>
            <img
              src="/acai-bowl.png"
              alt="Açaí Bowl Nova Supremo"
              style={{
                width: "100%",
                borderRadius: "20px",
                boxShadow: "0 20px 60px rgba(139,47,201,0.3)",
                border: "1px solid rgba(139,47,201,0.2)",
              }}
            />
            {/* Floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                background: "linear-gradient(135deg, #8b2fc9, #6b21a8)",
                borderRadius: "50%",
                width: "120px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(139,47,201,0.6)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#f5d67b" }}>✦</span>
              <span style={{ fontSize: "0.65rem", color: "#fff", fontFamily: "'Raleway', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textAlign: "center", padding: "0 8px" }}>PREMIUM</span>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "#d4af37",
                marginBottom: "1rem",
                fontFamily: "'Raleway', sans-serif",
                textTransform: "uppercase",
              }}
            >
              ✦ Sobre Nós
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                color: "#f5f0ff",
              }}
            >
              Uma experiência{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #c084fc, #8b2fc9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontStyle: "italic",
                }}
              >
                única
              </span>{" "}
              em cada colherada
            </h2>
            <p style={{ color: "#a78bca", lineHeight: 1.9, marginBottom: "1rem", fontSize: "1rem" }}>
              A <strong style={{ color: "#c084fc" }}>Nova Supremo</strong> nasceu do amor por sabores autênticos e pela vontade de trazer o melhor açaí para Nova Iguaçu. Estamos localizados no coração de Santa Eugênia, prontos para te servir.
            </p>
            <p style={{ color: "#a78bca", lineHeight: 1.9, marginBottom: "2rem", fontSize: "1rem" }}>
              Usamos ingredientes selecionados, açaí puro e frutos frescos para criar combinações que vão além do comum. Cada tigela é preparada com cuidado, para uma experiência verdadeiramente premium.
            </p>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { icon: "🌿", text: "Ingredientes naturais" },
                { icon: "🏆", text: "Qualidade premium" },
                { icon: "💜", text: "Feito com amor" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(139,47,201,0.1)",
                    border: "1px solid rgba(139,47,201,0.2)",
                    borderRadius: "2rem",
                    padding: "0.5rem 1rem",
                    fontSize: "0.85rem",
                    color: "#c084fc",
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Menu ──────────────────────────────────────────────────────────────────
const menuItems = [
  {
    category: "Açaí",
    emoji: "🫐",
    items: [
      { name: "Açaí Tradicional", desc: "Açaí puro batido na hora, cremoso e fresquinho", price: "A partir de R$ 15" },
      { name: "Açaí com Granola", desc: "Açaí + granola crocante + frutas da estação", price: "A partir de R$ 18" },
      { name: "Açaí Supremo", desc: "Nossa especialidade — açaí premium com cobertura especial", price: "A partir de R$ 25" },
      { name: "Açaí na Tigela", desc: "Bowl completo com toppings à sua escolha", price: "A partir de R$ 22" },
    ],
  },
  {
    category: "Sorvetes",
    emoji: "🍦",
    items: [
      { name: "Casquinha Dupla", desc: "Duas bolas do sabor da sua escolha", price: "R$ 12" },
      { name: "Sundae Especial", desc: "Sorvete com calda quente e chantilly", price: "R$ 18" },
      { name: "Milkshake Supremo", desc: "Batido cremoso com sorvete premium", price: "R$ 22" },
      { name: "Combo Família", desc: "1L de sorvete para levar em casa", price: "R$ 35" },
    ],
  },
];

function Menu() {
  return (
    <section
      id="cardápio"
      style={{
        padding: "7rem 2rem",
        background: "#0d0618",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,47,201,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1rem",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "uppercase",
            }}
          >
            ✦ Nosso Cardápio
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f0ff",
            }}
          >
            Sabores que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              encantam
            </span>
          </h2>
        </div>

        {menuItems.map((cat, ci) => (
          <div key={cat.category} className="reveal" style={{ marginBottom: "3.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ fontSize: "1.8rem" }}>{cat.emoji}</span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #c084fc, #8b2fc9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {cat.category}
              </h3>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(139,47,201,0.5), transparent)" }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {cat.items.map((item) => (
                <a
                  key={item.name}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "linear-gradient(135deg, #1a0a2e, #251040)",
                    border: "1px solid rgba(139,47,201,0.2)",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    textDecoration: "none",
                    transition: "all 0.25s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,47,201,0.6)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,47,201,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(139,47,201,0.2)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "#f5f0ff",
                    }}
                  >
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "#a78bca", lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.75rem",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      fontFamily: "'Raleway', sans-serif",
                      background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.price}
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="reveal" style={{ textAlign: "center", marginTop: "2rem" }}>
          <p style={{ color: "#a78bca", marginBottom: "1.5rem", fontFamily: "'Raleway', sans-serif" }}>
            Cardápio completo e personalizações pelo WhatsApp
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(135deg, #8b2fc9, #6b21a8)",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "3rem",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 0 30px rgba(139,47,201,0.5)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(139,47,201,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(139,47,201,0.5)";
            }}
          >
            Ver cardápio completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Gallery ───────────────────────────────────────────────────────────────
function Gallery() {
  return (
    <section
      id="galeria"
      style={{
        padding: "7rem 2rem",
        background: "linear-gradient(180deg, #0d0618 0%, #1a0a2e 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1rem",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "uppercase",
            }}
          >
            ✦ Galeria
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f0ff",
            }}
          >
            Feito para{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc, #8b2fc9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              impressionar
            </span>
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
        >
          {/* Large featured image */}
          <div
            style={{
              gridColumn: "1 / 3",
              gridRow: "1 / 2",
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/hero-acai.png"
              alt="Açaí Nova Supremo"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 60%, rgba(13,6,24,0.7) 100%)",
              }}
            />
          </div>

          {/* Small image */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <img
              src="/acai-cup.png"
              alt="Açaí no Copo"
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "transform 0.4s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Bottom row */}
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <img
              src="/acai-bowl.png"
              alt="Bowl de Açaí"
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                transition: "transform 0.4s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ borderRadius: "16px", overflow: "hidden" }}>
            <img
              src="/sorvete.png"
              alt="Sorvete Premium"
              style={{
                width: "100%",
                height: "260px",
                objectFit: "cover",
                transition: "transform 0.4s",
                display: "block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #1a0a2e, #251040)",
              border: "1px solid rgba(139,47,201,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "260px",
              gap: "1rem",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
          >
            <span style={{ fontSize: "2.5rem" }}>📸</span>
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
                color: "#c084fc",
                fontSize: "0.9rem",
                textAlign: "center",
              }}
            >
              Veja mais fotos
              <br />
              no WhatsApp
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Delivery ──────────────────────────────────────────────────────────────
function Delivery() {
  return (
    <section
      id="entrega"
      style={{
        padding: "7rem 2rem",
        background: "#0d0618",
        position: "relative",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(139,47,201,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1rem",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "uppercase",
            }}
          >
            ✦ Delivery
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f0ff",
              marginBottom: "1rem",
            }}
          >
            Na sua porta em{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              minutos
            </span>
          </h2>
          <p style={{ color: "#a78bca", fontSize: "1.05rem", lineHeight: 1.8 }}>
            Entregamos em Nova Iguaçu e região. Faça seu pedido pelo WhatsApp e receba fresquinho em casa.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { icon: "🛵", title: "Entrega Rápida", desc: "Seu pedido chega fresquinho e com toda qualidade" },
            { icon: "📍", title: "Santa Eugênia", desc: "Localizado no coração de Nova Iguaçu, RJ" },
            { icon: "💬", title: "Pedido Fácil", desc: "Peça pelo WhatsApp em poucos segundos" },
            { icon: "🕐", title: "Horário", desc: "Seg–Sex 12h–22h | Sáb–Dom 11h–23h" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "linear-gradient(135deg, rgba(26,10,46,0.8), rgba(37,16,64,0.8))",
                border: "1px solid rgba(139,47,201,0.2)",
                borderRadius: "16px",
                padding: "1.75rem",
                textAlign: "center",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,47,201,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,47,201,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,47,201,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#c084fc",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "0.875rem", color: "#a78bca", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="reveal"
          style={{
            background: "linear-gradient(135deg, #1a0a2e, #2e1450)",
            border: "1px solid rgba(139,47,201,0.3)",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
            boxShadow: "0 0 60px rgba(139,47,201,0.15)",
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              fontWeight: 700,
              color: "#f5f0ff",
            }}
          >
            Pronto para pedir?
          </h3>
          <p style={{ color: "#a78bca", maxWidth: "500px", lineHeight: 1.8 }}>
            Clique abaixo e fale diretamente com a gente. Atendimento rápido e personalizado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "3rem",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              boxShadow: "0 0 30px rgba(37,211,102,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 50px rgba(37,211,102,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(37,211,102,0.3)";
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fazer Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Ana Paula S.",
    text: "O açaí da Nova Supremo é simplesmente incrível! Nunca comi algo tão cremoso e saboroso aqui em Nova Iguaçu.",
    stars: 5,
  },
  {
    name: "Carlos M.",
    text: "Entrega rápida e o produto chegou perfeito. O açaí Supremo é demais, vale cada centavo!",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "Atendimento excelente e os sabores são maravilhosos. Virei cliente fiel da Nova Supremo!",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section
      style={{
        padding: "7rem 2rem",
        background: "linear-gradient(180deg, #0d0618 0%, #1a0a2e 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1rem",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "uppercase",
            }}
          >
            ✦ Depoimentos
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f0ff",
            }}
          >
            O que nossos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc, #8b2fc9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              clientes
            </span>{" "}
            dizem
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: "linear-gradient(135deg, #1a0a2e, #251040)",
                border: "1px solid rgba(139,47,201,0.2)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,47,201,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(139,47,201,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,47,201,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}>
                {Array(t.stars)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} style={{ color: "#d4af37", fontSize: "1.1rem" }}>
                      ★
                    </span>
                  ))}
              </div>
              <p
                style={{
                  color: "#c9b8e8",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                  fontSize: "0.95rem",
                }}
              >
                "{t.text}"
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8b2fc9, #6b21a8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {t.name[0]}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 600,
                    color: "#c084fc",
                    fontSize: "0.9rem",
                  }}
                >
                  {t.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Hours & Contact ────────────────────────────────────────────────────────
function Contact() {
  return (
    <section
      id="contato"
      style={{
        padding: "7rem 2rem",
        background: "#0d0618",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              color: "#d4af37",
              marginBottom: "1rem",
              fontFamily: "'Raleway', sans-serif",
              textTransform: "uppercase",
            }}
          >
            ✦ Contato
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              color: "#f5f0ff",
            }}
          >
            Fale{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f5d67b, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontStyle: "italic",
              }}
            >
              conosco
            </span>
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Hours */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a0a2e, #251040)",
              border: "1px solid rgba(139,47,201,0.2)",
              borderRadius: "20px",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#c084fc",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              🕐 Horário de Funcionamento
            </h3>
            {[
              { day: "Segunda – Sexta", time: "12h às 22h" },
              { day: "Sábado", time: "11h às 23h" },
              { day: "Domingo", time: "11h às 22h" },
            ].map((h) => (
              <div
                key={h.day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(139,47,201,0.1)",
                }}
              >
                <span style={{ color: "#a78bca", fontFamily: "'Raleway', sans-serif", fontSize: "0.9rem" }}>{h.day}</span>
                <span style={{ color: "#f5d67b", fontFamily: "'Raleway', sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Info */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a0a2e, #251040)",
              border: "1px solid rgba(139,47,201,0.2)",
              borderRadius: "20px",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#c084fc",
              }}
            >
              📍 Onde Estamos
            </h3>
            <div style={{ color: "#a78bca", fontSize: "0.95rem", lineHeight: 1.8 }}>
              <strong style={{ color: "#f5f0ff" }}>Nova Supremo</strong>
              <br />
              Santa Eugênia, Nova Iguaçu – RJ
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#a78bca",
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a78bca")}
            >
              <span style={{ fontSize: "1.3rem" }}>📱</span>
              <span>(21) 92001-8580</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "0.9rem 1.5rem",
                borderRadius: "2rem",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "auto",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(37,211,102,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "#07030f",
        borderTop: "1px solid rgba(139,47,201,0.15)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700 }}>
          <span style={{ color: "#c084fc" }}>Nova</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f5d67b, #d4af37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Supremo
          </span>
        </div>
        <p style={{ color: "#a78bca", fontSize: "0.85rem", fontFamily: "'Raleway', sans-serif" }}>
          Açaí & Sorvetes Premium · Santa Eugênia, Nova Iguaçu – RJ
        </p>
        <div
          style={{
            height: "1px",
            width: "100%",
            background: "linear-gradient(90deg, transparent, rgba(139,47,201,0.3), transparent)",
          }}
        />
        <p style={{ color: "#6b4f8a", fontSize: "0.78rem", fontFamily: "'Raleway', sans-serif" }}>
          © {new Date().getFullYear()} Nova Supremo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float Button ─────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 100,
        background: "#25D366",
        borderRadius: "50%",
        width: "58px",
        height: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        textDecoration: "none",
        transition: "all 0.2s",
        animation: "pulse-glow-wa 2s ease-in-out infinite",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.15)";
        e.currentTarget.style.boxShadow = "0 6px 30px rgba(37,211,102,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)";
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Delivery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
