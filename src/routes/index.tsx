import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCascadaImg from "@/assets/hero-cascada.jpg";
import heroAereoAsset from "@/assets/hero-aereo.jpg.asset.json";
import logoAsset from "@/assets/logo-la-florida.jpg.asset.json";
const heroImg = heroAereoAsset.url;
const heroImgCascada = heroCascadaImg;
import senderosImg from "@/assets/senderos.jpg";
import filosofiaAsset from "@/assets/filosofia-puente.jpg.asset.json";
import campingAsset from "@/assets/camping-pradera.jpg.asset.json";
import meliponaAsset from "@/assets/cabana-melipona-real.jpg.asset.json";
import trigonaAsset from "@/assets/cabana-trigona-real.jpg.asset.json";
import ecologicaAsset from "@/assets/cabana-ecologica-real.jpg.asset.json";
const rioImg = filosofiaAsset.url;
const campingImg = campingAsset.url;
const meliponaImg = meliponaAsset.url;
const trigonaImg = trigonaAsset.url;
const ecologicaImg = ecologicaAsset.url;
import {
  Waves, TreePine, Tent, MapPin, Phone, Clock, Users,
  Wifi, Dog, Music, Flame, Ban, MessageCircle, Star, ArrowUpRight, Plus, Minus,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Florida Paraíso Ecoturístico — Río, cascadas y cabañas en Chiapas" },
      { name: "description", content: "Centro ecoturístico familiar en La Independencia, Chiapas. Río, cascadas, senderos, camping y cabañas en un espacio hecho con amor." },
      { property: "og:title", content: "La Florida Paraíso Ecoturístico" },
      { property: "og:description", content: "Río, cascadas, senderos y cabañas para reconectar con la naturaleza en Chiapas." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/529631370265?text=" + encodeURIComponent(
  "Hola, quiero información para visitar La Florida Paraíso Ecoturístico. Me interesa: entrada de día / hospedaje / camping / evento. Fecha: ____. Número de personas: ____."
);

// Thin-stroke icon defaults
const ICON = { strokeWidth: 1.25 } as const;

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Experiencia />
      <Entrada />
      <Cabanas />
      <Actividades />
      <Servicios />
      <ComoLlegar />
      <Reglas />
      <Reseñas />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const items = [
    ["Experiencia", "#experiencia"],
    ["Entrada", "#entrada"],
    ["Cabañas", "#cabanas"],
    ["Cómo llegar", "#como-llegar"],
    ["FAQ", "#faq"],
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.235_0.018_160/0.72)] border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-soft flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logoAsset.url} alt="La Florida" className="size-10 rounded-full object-cover bg-white/90 ring-1 ring-white/30" />
          <div className="leading-tight text-white">
            <div className="font-display text-lg tracking-tight">La Florida</div>
            <div className="text-[9px] uppercase tracking-[0.32em] text-white/60">Paraíso Ecoturístico</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {items.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-[11px] uppercase tracking-[0.24em] font-medium text-white/75 hover:text-white transition-all duration-500 ease-in-out"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] text-white hover:bg-white hover:text-[var(--forest)] transition-all duration-500 ease-in-out"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-[var(--forest)]">
      <img
        src={heroImg}
        alt="Vista aérea de La Florida, Chiapas"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-95"
      />
      {/* Subtle dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      <div className="container-soft relative z-10 pb-24 md:pb-32 pt-36 text-white">
        <div className="eyebrow text-white/70 flex items-center gap-3">
          <span className="h-px w-10 bg-white/40" /> La Independencia · Chiapas
        </div>
        <h1 className="mt-8 text-[clamp(2.75rem,8vw,7.5rem)] font-display font-light max-w-5xl leading-[0.98]">
          Río, cascadas y selva<br />
          para <em className="italic font-light text-white/90">reconectar</em>.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg font-light text-white/80 leading-relaxed">
          Un refugio ecoturístico familiar para nadar en el río, recorrer senderos,
          acampar o descansar en cabañas — en un espacio hecho con amor.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-3 rounded-md bg-white text-[var(--forest)] px-7 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-[var(--bronze)] hover:text-white transition-all duration-500 ease-in-out"
          >
            Reservar por WhatsApp
            <ArrowUpRight {...ICON} className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#cabanas"
            className="inline-flex items-center gap-3 rounded-md border border-white/40 px-7 py-4 text-[12px] uppercase tracking-[0.22em] font-medium text-white hover:bg-white/10 transition-all duration-500 ease-in-out"
          >
            Ver cabañas
          </a>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 max-w-3xl border-t border-white/15 pt-10">
          {[
            ["8+", "años cuidando"],
            ["3", "cabañas únicas"],
            ["$25", "entrada de día"],
            ["8–17h", "abierto a diario"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl font-light text-white">{n}</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-white/55 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section id="experiencia" className="py-28 md:py-40">
      <div className="container-soft grid md:grid-cols-2 gap-20 items-center">
        <div>
          <Eyebrow>Nuestra filosofía</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl font-light italic max-w-xl">
            “Cuidar la tierra, cuidar la gente y compartir con equidad.”
          </h2>
          <div className="mt-8 h-px w-16 bg-[var(--bronze)]/60" />
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-[1.85] font-light">
            La Florida nació hace más de 8 años con una idea sencilla: crear un espacio
            donde la gente viva experiencias inolvidables, mientras protegemos y conservamos
            el entorno natural que nos rodea.
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-[1.85] font-light">
            Aquí no buscamos lujo. Buscamos verdad: el sonido del río, la sombra de los árboles,
            la convivencia familiar y la calma que solo da la naturaleza.
          </p>
        </div>
        <div className="relative group">
          <div className="overflow-hidden rounded-lg relative shadow-[var(--shadow-soft)]">
            <img
              src={rioImg}
              alt="Puente sobre el río de aguas cristalinas en La Florida"
              width={1280}
              height={1600}
              loading="lazy"
              className="img-natural aspect-[4/5] object-cover w-full transition-transform duration-[1200ms] ease-in-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[oklch(0.45_0.05_90/0.10)] to-[oklch(0.235_0.018_160/0.22)] mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[oklch(0.235_0.018_160/0.35)] via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -left-4 md:-left-10 bg-background rounded-lg p-6 max-w-[240px] shadow-[var(--shadow-soft)]">
            <Waves {...ICON} className="size-5 text-[var(--bronze)]" />
            <div className="mt-3 font-display text-xl leading-tight">Río con aguas seguras</div>
            <div className="text-xs text-muted-foreground mt-2 font-light leading-relaxed">
              Sin zonas profundas identificadas. Apto para familias.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Entrada() {
  return (
    <section id="entrada" className="py-28 md:py-36 bg-[var(--forest)] text-[var(--sand)]">
      <div className="container-soft">
        <div className="grid md:grid-cols-[1fr_auto] gap-14 items-end">
          <div>
            <Eyebrow light>Day Pass</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-6xl font-light max-w-2xl">
              Ven a pasar el día <em className="italic">junto al río</em>.
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl font-light leading-relaxed">
              Disfruta el río, las cascadas, los senderos y las áreas verdes.
              Trae a tu familia, tus alimentos y olvídate del mundo por un día.
            </p>
          </div>
          <div className="border border-white/15 rounded-lg p-10 min-w-[280px]">
            <div className="eyebrow text-white/55">Entrada general</div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-7xl font-light">$25</span>
              <span className="text-xs uppercase tracking-[0.2em] text-white/55">MXN / adulto</span>
            </div>
            <div className="mt-4 text-sm text-white/65 font-light">Menores de 6 años no pagan.</div>
          </div>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden">
          {[
            [Clock, "Horario", "Todos los días, 8:00 a 17:00"],
            [Users, "Sin reserva", "No necesitas reservar para day pass"],
            [Waves, "Acceso al río", "Cascadas y áreas naturales incluidas"],
            [TreePine, "Senderos", "Caminatas de hasta 45 minutos"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Clock;
            return (
              <div key={t as string} className="bg-[var(--forest)] p-8">
                <I {...ICON} className="size-5 text-[var(--bronze)]" />
                <div className="mt-5 font-display text-xl font-light">{t as string}</div>
                <div className="text-sm text-white/60 mt-2 font-light leading-relaxed">{d as string}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const cabanas = [
  {
    img: meliponaImg, name: "Melipona", subtitle: "Cabaña grande familiar",
    price: "$700 — $1,500", capacity: "Hasta 15 personas",
    features: ["2 cuartos privados", "Tapanco con colchonetas", "Balcón para casas de campaña", "Baño privado"],
  },
  {
    img: trigonaImg, name: "Trigona", subtitle: "Cabaña pequeña",
    price: "$500", capacity: "Hasta 4 personas",
    features: ["Planta baja con cama matrimonial", "Planta alta con cama matrimonial", "Balcón", "Baño privado"],
  },
  {
    img: ecologicaImg, name: "Ecológica", subtitle: "Cabaña económica",
    price: "$300", capacity: "Hasta 2 personas",
    features: ["Cama matrimonial", "Balcón", "Baño compartido", "Esencial y natural"],
  },
];

function Cabanas() {
  return (
    <section id="cabanas" className="py-28 md:py-40">
      <div className="container-soft">
        <div className="max-w-2xl">
          <Eyebrow>Hospedaje</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl font-light">
            Tres cabañas, una sola intención: <em className="italic">dormir cerca del río</em>.
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Espacios sencillos, naturales y cálidos. Con Wi-Fi y electricidad, sin aire acondicionado
            ni agua caliente — porque aquí el lujo es escuchar el agua al amanecer.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {cabanas.map((c) => (
            <article key={c.name} className="group flex flex-col">
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
                <img
                  src={c.img}
                  alt={`Cabaña ${c.name}`}
                  width={1280}
                  height={1600}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-8 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl font-light">{c.name}</h3>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Desde</div>
                    <div className="font-display text-lg text-[var(--bronze)] mt-1">{c.price}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-light">{c.subtitle} · {c.capacity}</div>
                <div className="mt-6 h-px w-full bg-border" />
                <ul className="mt-6 space-y-3 text-sm font-light text-foreground/80 flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <span className="mt-2 size-1 rounded-full bg-[var(--bronze)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="mt-8 inline-flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.24em] font-medium text-foreground hover:text-[var(--bronze)] transition-all duration-500 ease-in-out border-t border-border pt-5"
                >
                  Reservar {c.name}
                  <ArrowUpRight {...ICON} className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 rounded-lg border border-border p-8 text-sm text-muted-foreground flex flex-wrap gap-x-10 gap-y-3 font-light">
          <span><span className="text-foreground font-medium">Check-in:</span> 14:00</span>
          <span><span className="text-foreground font-medium">Check-out:</span> 13:00</span>
          <span><span className="text-foreground font-medium">Anticipo:</span> 50%</span>
          <span><span className="text-foreground font-medium">Wi-Fi:</span> Sí</span>
          <span><span className="text-foreground font-medium">Mascotas:</span> Bienvenidas</span>
        </div>
      </div>
    </section>
  );
}

function Actividades() {
  const items = [
    { img: rioImg, title: "Río y cascadas", desc: "Nada, refréscate y déjate llevar por el sonido del agua." },
    { img: senderosImg, title: "Senderos en la selva", desc: "Caminatas guiadas hasta 45 minutos entre flora y fauna." },
    { img: campingImg, title: "Camping bajo las estrellas", desc: "Espacios para casas de campaña y fogatas permitidas." },
  ];
  return (
    <section className="py-28 md:py-36 bg-[var(--forest)] text-white">
      <div className="container-soft">
        <div className="flex items-end justify-between flex-wrap gap-8">
          <div className="max-w-xl">
            <Eyebrow light>Experiencias</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-6xl font-light">
              Lo que puedes <em className="italic">vivir aquí</em>.
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm font-light leading-relaxed">
            Sesiones de fotos, recorridos de flora y fauna, y eventos privados con reservación previa.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {items.map((i, idx) => (
            <article key={i.title} className="rounded-lg overflow-hidden relative aspect-[3/4] group">
              <img
                src={i.img}
                alt={i.title}
                width={1280}
                height={1700}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-in-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.28em] text-white/70 font-medium">
                0{idx + 1}
              </div>
              <div className="absolute bottom-0 inset-x-0 p-8">
                <h3 className="font-display text-3xl font-light">{i.title}</h3>
                <div className="mt-2 h-px w-10 bg-white/40" />
                <p className="mt-4 text-sm text-white/75 font-light leading-relaxed">{i.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-soft">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Antes de venir</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-6xl font-light">
              Sencillo, natural, <em className="italic">real</em>.
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-[1.85] font-light">
              La Florida es un espacio rural. <span className="text-foreground">No contamos con restaurante formal, agua caliente,
              regaderas ni vestidores.</span> Puedes traer tus alimentos y bebidas, o consultar previamente
              por la posibilidad de alimentos preparados.
            </p>
            <p className="mt-5 text-base text-muted-foreground font-light leading-[1.85]">
              Te recomendamos traer ropa cómoda, repelente, toalla, cambio de ropa y llevarte
              tu basura al salir. Así cuidamos juntos este lugar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {[
              [Wifi, "Wi-Fi disponible", true],
              [Flame, "Fogatas permitidas", true],
              [Dog, "Pet-friendly", true],
              [Music, "Música y bocinas", true],
              [Ban, "Sin caza ni pesca", false],
              [Waves, "Cocinas tu comida", true],
            ].map(([Icon, label, ok]) => {
              const I = Icon as typeof Wifi;
              return (
                <div key={label as string} className="bg-background p-7 hover:bg-secondary/60 transition-all duration-500 ease-in-out">
                  <I {...ICON} className={`size-5 ${ok ? "text-[var(--bronze)]" : "text-muted-foreground"}`} />
                  <div className="mt-5 text-sm font-light text-foreground">{label as string}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComoLlegar() {
  const distancias = [
    ["Comitán", "85 km", "1h 30min"],
    ["San Cristóbal", "170 km", "3h"],
    ["Tuxtla Gutiérrez", "225 km", "4h"],
  ];
  return (
    <section id="como-llegar" className="py-28 md:py-36 bg-secondary/40">
      <div className="container-soft grid md:grid-cols-2 gap-16">
        <div>
          <Eyebrow>Cómo llegar</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-6xl font-light">
            Carretera pavimentada,<br /><em className="italic">todo el camino</em>.
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            Carretera Francisco I. Madero a Río Blanco km 5.1,<br />
            Ranchería La Florida, La Independencia, Chiapas.
          </p>
          <p className="mt-5 text-muted-foreground font-light leading-relaxed">
            Puede llegar cualquier vehículo, incluyendo carros compactos. También hay transporte público
            cada hora desde Comitán (combis con ruta hacia Lagos de Montebello).
          </p>
          <div className="mt-10">
            <a
              href="https://maps.app.goo.gl/RJXWYrEmvxCbSGU39?g_st=aw"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.24em] font-medium text-foreground hover:text-[var(--bronze)] transition-all duration-500 ease-in-out border-b border-foreground/40 hover:border-[var(--bronze)] pb-2"
            >
              <MapPin {...ICON} className="size-4" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
        <div className="bg-background rounded-lg p-10">
          <div className="eyebrow text-muted-foreground">Distancias aproximadas</div>
          <div className="mt-8 divide-y divide-border">
            {distancias.map(([city, km, t]) => (
              <div key={city} className="flex items-center justify-between py-5">
                <div>
                  <div className="font-display text-xl font-light">{city}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{km}</div>
                </div>
                <div className="font-display text-2xl text-[var(--bronze)] font-light">{t}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground font-light leading-relaxed">
            No hay señalización específica hacia La Florida. Recomendamos guardar la ruta antes de salir.
          </p>
        </div>
      </div>
    </section>
  );
}

function Reglas() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-soft max-w-3xl text-center">
        <Eyebrow center>Cuida La Florida</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-6xl font-light">
          Este lugar existe gracias <br />a quienes <em className="italic">lo cuidan</em>.
        </h2>
        <div className="mt-8 mx-auto h-px w-16 bg-[var(--bronze)]/60" />
        <p className="mt-8 text-base md:text-lg text-muted-foreground font-light leading-[1.85]">
          Disfruta el río, las cascadas y las áreas verdes. Te pedimos llevarte tu basura,
          respetar la vida silvestre y evitar la caza y la pesca. Mascotas, fogatas y música son bienvenidas — siempre con consciencia.
        </p>
      </div>
    </section>
  );
}

function Reseñas() {
  const r = [
    { name: "Familia Hernández", text: "Un lugar mágico. El río es cristalino y las cascadas espectaculares. Volveremos.", stars: 5 },
    { name: "Mariana T.", text: "Acampamos una noche y fue inolvidable. Don Omero muy atento. Espacio limpio y natural.", stars: 5 },
    { name: "Carlos R.", text: "La cabaña Trigona es preciosa. Despertarse con el sonido del agua no tiene precio.", stars: 5 },
  ];
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-soft">
        <Eyebrow>Reseñas</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-6xl font-light max-w-2xl">
          Lo que dicen <em className="italic">nuestros visitantes</em>.
        </h2>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {r.map((re) => (
            <figure key={re.name} className="bg-background rounded-lg p-10 hover-lift hover:shadow-[var(--shadow-soft)]">
              <div className="flex gap-1 text-[var(--bronze)]">
                {Array.from({ length: re.stars }).map((_, i) => (
                  <Star key={i} {...ICON} className="size-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl font-light italic text-foreground/90 leading-snug">
                “{re.text}”
              </blockquote>
              <figcaption className="mt-8 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                — {re.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  ["¿Se puede entrar solo a pasar el día?", "Sí. La entrada general cuesta $25 MXN por adulto y menores de 6 años no pagan."],
  ["¿Cuál es el horario para visitantes de día?", "De 8:00 a 17:00, todos los días."],
  ["¿Hay restaurante?", "No hay restaurante formal. Puedes traer tus alimentos o consultar previamente si hay disponibilidad para preparar comida."],
  ["¿Se puede nadar en el río?", "Sí. No hay zonas profundas identificadas, pero el visitante debe cuidar siempre a niños y mascotas."],
  ["¿Aceptan mascotas?", "Sí. Las mascotas pueden entrar al río."],
  ["¿Todas las cabañas tienen baño privado?", "Melipona y Trigona sí. La Cabaña Ecológica no tiene baño privado."],
  ["¿Hay agua caliente?", "No."],
  ["¿Hay Wi-Fi?", "Sí."],
  ["¿Se puede acampar y hacer fogatas?", "Sí, ambas cosas están permitidas."],
  ["¿Qué está prohibido?", "La caza y la pesca."],
];

function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36">
      <div className="container-soft grid md:grid-cols-[1fr_2fr] gap-16">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-6 text-4xl md:text-5xl font-light">
            Antes de venir,<br />esto <em className="italic">te ayudará</em>.
          </h2>
        </div>
        <div className="divide-y divide-border border-t border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-7">
              <summary className="flex justify-between items-center gap-6 cursor-pointer list-none font-display text-xl md:text-2xl font-light hover:text-[var(--bronze)] transition-all duration-500 ease-in-out">
                <span>{q}</span>
                <span className="shrink-0 relative size-5">
                  <Plus {...ICON} className="size-5 absolute inset-0 group-open:opacity-0 transition-opacity duration-300" />
                  <Minus {...ICON} className="size-5 absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity duration-300" />
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground font-light leading-[1.85] max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-soft">
        <div className="relative rounded-lg overflow-hidden p-12 md:p-24 text-white">
          <img
            src={heroImgCascada}
            alt=""
            aria-hidden
            width={1920}
            height={1080}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[oklch(0.235_0.018_160/0.78)]" />
          <div className="relative max-w-2xl">
            <Eyebrow light>Reserva</Eyebrow>
            <h2 className="font-display text-4xl md:text-7xl font-light leading-[1.02] mt-6">
              ¿Listo para <em className="italic">escuchar el río</em>?
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/80 font-light leading-relaxed">
              Pregunta disponibilidad, reserva tu cabaña o avísanos que llegas a pasar el día.
              Te responde Omero, en cualquier horario.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 rounded-md bg-white text-[var(--forest)] px-7 py-4 text-[12px] uppercase tracking-[0.22em] font-medium hover:bg-[var(--bronze)] hover:text-white transition-all duration-500 ease-in-out"
              >
                <MessageCircle {...ICON} className="size-4" />
                Escribir por WhatsApp
              </a>
              <a
                href="tel:+529631370265"
                className="inline-flex items-center gap-3 rounded-md border border-white/40 px-7 py-4 text-[12px] uppercase tracking-[0.22em] font-medium text-white hover:bg-white/10 transition-all duration-500 ease-in-out"
              >
                <Phone {...ICON} className="size-4" />
                963 137 0265
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--forest)] text-white/70 pt-20 pb-10">
      <div className="container-soft grid md:grid-cols-3 gap-12 text-sm font-light">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="La Florida" className="size-12 rounded-full object-cover bg-white/90" />
            <div>
              <div className="font-display text-xl text-white">La Florida</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/50">Paraíso Ecoturístico</div>
            </div>
          </div>
          <p className="mt-6 max-w-xs leading-relaxed">
            Paraíso ecoturístico familiar en La Independencia, Chiapas. Cuidar la tierra, cuidar la gente.
          </p>
        </div>
        <div>
          <div className="eyebrow text-white/45">Contacto</div>
          <ul className="mt-5 space-y-3">
            <li>WhatsApp: 963 137 0265</li>
            <li>Atiende: Omero Guillén</li>
            <li>Carretera F.I. Madero a Río Blanco km 5.1</li>
            <li>La Independencia, Chiapas</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-white/45">Síguenos</div>
          <ul className="mt-5 space-y-3">
            <li><a href="https://www.facebook.com/share/p/18d9p2KAxA/" target="_blank" rel="noopener" className="hover:text-white transition-all duration-500 ease-in-out">Facebook</a></li>
            <li><a href="https://instagram.com/la.floridaparaiso" target="_blank" rel="noopener" className="hover:text-white transition-all duration-500 ease-in-out">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@floridaparaiso" target="_blank" rel="noopener" className="hover:text-white transition-all duration-500 ease-in-out">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="container-soft mt-16 pt-8 border-t border-white/10 text-[11px] uppercase tracking-[0.24em] text-white/40 flex justify-between flex-wrap gap-3">
        <span>© {new Date().getFullYear()} La Florida</span>
        <span>Hecho con amor para compartir</span>
      </div>
    </footer>
  );
}

function Eyebrow({
  children,
  light,
  center,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-3 eyebrow",
        light ? "text-white/60" : "text-[var(--bronze)]",
        center ? "justify-center" : "",
      ].join(" ")}
    >
      <span className={`h-px w-10 ${light ? "bg-white/30" : "bg-[var(--bronze)]/50"}`} />
      {children}
    </div>
  );
}
