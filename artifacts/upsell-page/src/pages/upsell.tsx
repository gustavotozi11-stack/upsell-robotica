import bookCover from "@assets/1000341327-removebg-preview_1776205382272.png";

export function UpsellPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          padding: "48px 24px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#dcfce7",
            color: "#166534",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Compra confirmada
        </div>

        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 40px)",
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.15,
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Parabéns! Seu acesso foi liberado{" "}
          <span role="img" aria-label="celebração">🎉</span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            margin: "0 0 32px",
            lineHeight: 1.5,
          }}
        >
          Antes de acessar, veja isso rápido{" "}
          <span role="img" aria-label="apontar para baixo">👇</span>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={bookCover}
            alt="Projetos de Robótica com Materiais Recicláveis"
            style={{
              width: "220px",
              maxWidth: "100%",
              height: "auto",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        </div>
      </header>

      <main
        style={{
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "36px 28px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              color: "#78350f",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: "999px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "16px",
            }}
          >
            Oferta exclusiva
          </div>

          <h2
            style={{
              fontSize: "clamp(22px, 5vw, 28px)",
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            Libere ainda mais aprendizado para seu filho
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#64748b",
              lineHeight: 1.6,
              margin: "0 0 28px",
            }}
          >
            Adicione projetos práticos e exclusivos de robótica usando materiais
            recicláveis, feitos com coisas que você já tem em casa.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              marginBottom: "32px",
            }}
          >
            {[
              "Estimula criatividade e foco",
              "Sem precisar comprar materiais",
              "Projetos simples e divertidos",
              "Aprendizado na prática",
            ].map((benefit) => (
              <div
                key={benefit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#dcfce7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#334155",
                    fontWeight: 500,
                  }}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              background: "#f9fafb",
              borderRadius: "16px",
              padding: "24px 20px",
              marginBottom: "24px",
              border: "1px solid #e5e7eb",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "#64748b",
                margin: "0 0 4px",
                fontWeight: 500,
              }}
            >
              Disponível agora por apenas
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#16a34a",
                }}
              >
                R$
              </span>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: 800,
                  color: "#16a34a",
                  lineHeight: 1,
                }}
              >
                9
              </span>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#16a34a",
                }}
              >
                ,90
              </span>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "block",
              width: "100%",
              padding: "18px 24px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "center",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(34, 197, 94, 0.4)",
              transition: "all 0.3s ease",
              animation: "pulse-glow 2s infinite",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 6px 20px rgba(34, 197, 94, 0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 14px rgba(34, 197, 94, 0.4)";
            }}
          >
            Sim, quero liberar agora!
          </a>

          <p
            style={{
              textAlign: "center",
              fontSize: "13px",
              color: "#94a3b8",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Pagamento 100% seguro
          </p>
        </div>
      </main>

      <footer
        style={{
          width: "100%",
          maxWidth: "640px",
          margin: "0 auto",
          padding: "16px 24px 40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "#94a3b8",
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          Você pode acessar seu produto principal normalmente a qualquer momento.
        </p>
      </footer>
    </div>
  );
}
