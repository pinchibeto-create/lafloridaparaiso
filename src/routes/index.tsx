import { createFileRoute } from "@tanstack/react-router";
import heroCascadaImg from "@/assets/hero-cascada.jpg";
import heroAereoAsset from "@/assets/hero-aereo.jpg.asset.json";
import logoAsset from "@/assets/logo-la-florida.jpg.asset.json";
const heroImg = heroAereoAsset.url;
const heroImgCascada = heroCascadaImg;
import rioImg from "@/assets/rio.jpg";
import senderosImg from "@/assets/senderos.jpg";
import campingImg from "@/assets/camping.jpg";
import meliponaImg from "@/assets/cabana-melipona.jpg";
import trigonaImg from "@/assets/cabana-trigona.jpg";
import ecologicaImg from "@/assets/cabana-ecologica.jpg";
import {
  Leaf, Waves, TreePine, Tent, MapPin, Phone, Clock, Users,
  Wifi, Dog, Music, Flame, Ban, MessageCircle, Star, ChevronRight,
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="container-soft flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="La Florida" className="size-11 rounded-full object-cover bg-white" />
          <div className="leading-tight">
            <div className="font-display text-base">La Florida</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Paraíso Ecoturístico</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {items.map(([l, h]) => (
            <a key={h} href={h} className="text-foreground/70 hover:text-foreground transition">{l}</a>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
          <MessageCircle className="size-4" /> Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
      <img src={heroImg} alt="Cascada en La Florida, Chiapas" width={1920} height={1080}
           className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container-soft relative z-10 pb-24 pt-32 text-primary-foreground">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em]">
          <Leaf className="size-3" /> La Independencia · Chiapas
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-display max-w-4xl leading-[0.95]">
          Río, cascadas <br /> y selva para <em className="text-[var(--sun)] not-italic">reconectar</em>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Un centro ecoturístico familiar para nadar en el río, recorrer senderos,
          acampar o descansar en cabañas, en un espacio hecho con amor.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--sun)] text-[oklch(0.25_0.05_50)] px-6 py-3.5 font-medium hover:scale-[1.02] transition shadow-[var(--shadow-soft)]">
            <MessageCircle className="size-4" /> Reservar por WhatsApp
          </a>
          <a href="#cabanas" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-6 py-3.5 font-medium hover:bg-white/20 transition">
            Ver cabañas <ChevronRight className="size-4" />
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/20 pt-8">
          {[
            ["8+", "años cuidando"],
            ["3", "cabañas únicas"],
            ["$25", "entrada de día"],
            ["8–17h", "abierto a diario"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl text-[var(--sun)]">{n}</div>
              <div className="text-xs text-white/70 uppercase tracking-wider mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="container-soft grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>Nuestra filosofía</Eyebrow>
          <h2 className="mt-4 text-5xl md:text-7xl leading-[1.05]" style={{ fontFamily: "var(--font-script)" }}>
            Cuidar la tierra,<br />cuidar la gente.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            La Florida nació hace más de 8 años con una idea sencilla: crear un espacio
            donde la gente viva experiencias inolvidables, mientras protegemos y conservamos
            el entorno natural que nos rodea.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Aquí no buscamos lujo. Buscamos verdad: el sonido del río, la sombra de los árboles,
            la convivencia familiar y la calma que solo da la naturaleza.
          </p>
        </div>
        <div className="relative">
          <img src={rioImg} alt="Río cristalino" width={1280} height={960} loading="lazy"
               className="rounded-3xl shadow-[var(--shadow-soft)] aspect-[4/5] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-[var(--shadow-card)] max-w-[220px] border border-border">
            <Waves className="size-6 text-[var(--river)]" />
            <div className="mt-2 font-display text-lg leading-tight">Río con aguas seguras</div>
            <div className="text-xs text-muted-foreground mt-1">Sin zonas profundas identificadas. Apto para familias.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Entrada() {
  return (
    <section id="entrada" className="py-24 bg-[var(--leaf)]/5">
      <div className="container-soft">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <Eyebrow>Day Pass</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl">
              Ven a pasar el día junto al río.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Disfruta el río, las cascadas, los senderos y las áreas verdes.
              Trae a tu familia, tus alimentos y olvídate del mundo por un día.
            </p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 min-w-[280px] shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-widest opacity-70">Entrada general</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-display text-6xl">$25</span>
              <span className="text-sm opacity-70">MXN / adulto</span>
            </div>
            <div className="mt-3 text-sm opacity-80">Menores de 6 años no pagan.</div>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            [Clock, "Horario", "Todos los días, 8:00 a 17:00"],
            [Users, "Sin reserva", "No necesitas reservar para day pass"],
            [Waves, "Acceso al río", "Cascadas y áreas naturales incluidas"],
            [Tent, "Senderos", "Caminatas de hasta 45 minutos"],
          ].map(([Icon, t, d]) => {
            const I = Icon as typeof Clock;
            return (
              <div key={t as string} className="bg-card rounded-2xl p-6 border border-border">
                <I className="size-6 text-[var(--leaf)]" />
                <div className="mt-3 font-display text-lg">{t as string}</div>
                <div className="text-sm text-muted-foreground mt-1">{d as string}</div>
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
    <section id="cabanas" className="py-24 md:py-32">
      <div className="container-soft">
        <div className="max-w-2xl">
          <Eyebrow>Hospedaje</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">Tres cabañas, una sola intención: dormir cerca del río.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Espacios sencillos, naturales y cálidos. Con Wi-Fi y electricidad, sin aire acondicionado
            ni agua caliente — porque aquí el lujo es escuchar el agua al amanecer.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cabanas.map((c) => (
            <article key={c.name} className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-[var(--shadow-soft)] transition flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={`Cabaña ${c.name}`} width={1280} height={960} loading="lazy"
                     className="size-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Desde</div>
                    <div className="font-display text-lg text-[var(--leaf)]">{c.price}</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{c.subtitle} · {c.capacity}</div>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start">
                      <span className="mt-1.5 size-1.5 rounded-full bg-[var(--leaf)] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WHATSAPP} target="_blank" rel="noopener"
                   className="mt-6 inline-flex items-center justify-between rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition">
                  Reservar {c.name} <ChevronRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-secondary p-6 text-sm text-secondary-foreground flex flex-wrap gap-x-8 gap-y-2">
          <span><strong>Check-in:</strong> 14:00</span>
          <span><strong>Check-out:</strong> 13:00</span>
          <span><strong>Anticipo:</strong> 50%</span>
          <span><strong>Wi-Fi:</strong> Sí</span>
          <span><strong>Mascotas:</strong> Bienvenidas</span>
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
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container-soft">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <Eyebrow light>Experiencias</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">Lo que puedes vivir aquí.</h2>
          </div>
          <p className="text-primary-foreground/70 max-w-md text-sm">
            Sesiones de fotos, recorridos de flora y fauna, y eventos privados con reservación previa.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i.title} className="rounded-3xl overflow-hidden relative aspect-[4/5] group">
              <img src={i.img} alt={i.title} width={1280} height={960} loading="lazy"
                   className="absolute inset-0 size-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-7">
                <h3 className="font-display text-2xl">{i.title}</h3>
                <p className="text-sm text-white/80 mt-2">{i.desc}</p>
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
    <section className="py-24">
      <div className="container-soft">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Antes de venir</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl">Sencillo, natural, real.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              La Florida es un espacio rural. <strong>No contamos con restaurante formal, agua caliente,
              regaderas ni vestidores.</strong> Puedes traer tus alimentos y bebidas, o consultar previamente
              por la posibilidad de alimentos preparados.
            </p>
            <p className="mt-4 text-muted-foreground">
              Te recomendamos traer ropa cómoda, repelente, toalla, cambio de ropa y llevarte
              tu basura al salir. Así cuidamos juntos este lugar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
                <div key={label as string} className="rounded-2xl border border-border p-5 bg-card">
                  <I className={`size-5 ${ok ? "text-[var(--leaf)]" : "text-destructive"}`} />
                  <div className="mt-3 text-sm font-medium">{label as string}</div>
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
    <section id="como-llegar" className="py-24 bg-secondary">
      <div className="container-soft grid md:grid-cols-2 gap-14">
        <div>
          <Eyebrow>Cómo llegar</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">Carretera pavimentada, todo el camino.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Carretera Francisco I. Madero a Río Blanco km 5.1,<br />
            Ranchería La Florida, La Independencia, Chiapas.
          </p>
          <p className="mt-4 text-muted-foreground">
            Puede llegar cualquier vehículo, incluyendo carros compactos. También hay transporte público
            cada hora desde Comitán (combis con ruta hacia Lagos de Montebello).
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://maps.app.goo.gl/RJXWYrEmvxCbSGU39?g_st=aw" target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90">
              <MapPin className="size-4" /> Abrir en Google Maps
            </a>
          </div>
        </div>
        <div className="bg-card rounded-3xl p-8 border border-border">
          <h3 className="font-display text-xl">Distancias aproximadas</h3>
          <div className="mt-6 divide-y divide-border">
            {distancias.map(([city, km, t]) => (
              <div key={city} className="flex items-center justify-between py-4">
                <div>
                  <div className="font-medium">{city}</div>
                  <div className="text-xs text-muted-foreground">{km}</div>
                </div>
                <div className="font-display text-2xl text-[var(--leaf)]">{t}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            No hay señalización específica hacia La Florida. Recomendamos guardar la ruta antes de salir.
          </p>
        </div>
      </div>
    </section>
  );
}

function Reglas() {
  return (
    <section className="py-24">
      <div className="container-soft max-w-4xl text-center">
        <Eyebrow>Cuida La Florida</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl">Este lugar existe gracias a quienes lo cuidan.</h2>
        <p className="mt-6 text-lg text-muted-foreground">
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
    <section className="py-24 bg-[var(--sun)]/10">
      <div className="container-soft">
        <Eyebrow>Reseñas</Eyebrow>
        <h2 className="mt-4 text-4xl md:text-5xl max-w-2xl">Lo que dicen nuestros visitantes.</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {r.map((re) => (
            <div key={re.name} className="bg-card rounded-3xl p-7 border border-border">
              <div className="flex gap-1 text-[var(--sun)]">
                {Array.from({ length: re.stars }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">"{re.text}"</p>
              <div className="mt-5 text-sm font-medium">{re.name}</div>
            </div>
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
    <section id="faq" className="py-24">
      <div className="container-soft grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl">Antes de venir,<br />esto te ayudará.</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg">
                {q}
                <ChevronRight className="size-5 transition group-open:rotate-90 text-muted-foreground" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="container-soft">
        <div className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-primary-foreground">
          <img src={heroImgCascada} alt="" aria-hidden width={1920} height={1080}
               className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.06_155/0.75)]" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              ¿Listo para escuchar el río?
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Pregunta disponibilidad, reserva tu cabaña o avísanos que llegas a pasar el día.
              Te responde Omero, en cualquier horario.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[var(--sun)] text-[oklch(0.25_0.05_50)] px-7 py-4 font-medium hover:scale-[1.02] transition">
                <MessageCircle className="size-5" /> Escribir por WhatsApp
              </a>
              <a href="tel:+529631370265" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-medium hover:bg-white/10 transition">
                <Phone className="size-5" /> 963 137 0265
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
    <footer className="border-t border-border py-12 bg-card">
      <div className="container-soft grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="La Florida" className="size-12 rounded-full object-cover bg-white" />
            <div className="font-display text-lg">La Florida</div>
          </div>
          <p className="mt-4 text-muted-foreground max-w-xs">
            Paraíso ecoturístico familiar en La Independencia, Chiapas. Cuidar la tierra, cuidar la gente.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Contacto</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>WhatsApp: 963 137 0265</li>
            <li>Atiende: Omero Guillén</li>
            <li>Carretera F.I. Madero a Río Blanco km 5.1</li>
            <li>La Independencia, Chiapas</li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Síguenos</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="https://www.facebook.com/share/p/18d9p2KAxA/" target="_blank" rel="noopener" className="hover:text-foreground">Facebook</a></li>
            <li><a href="https://instagram.com/la.floridaparaiso" target="_blank" rel="noopener" className="hover:text-foreground">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@floridaparaiso" target="_blank" rel="noopener" className="hover:text-foreground">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="container-soft mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex justify-between flex-wrap gap-3">
        <span>© {new Date().getFullYear()} La Florida Paraíso Ecoturístico</span>
        <span>Hecho con amor para compartir.</span>
      </div>
    </footer>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] ${light ? "text-white/70" : "text-[var(--leaf)]"}`}>
      <span className={`h-px w-8 ${light ? "bg-white/40" : "bg-[var(--leaf)]/40"}`} /> {children}
    </div>
  );
}
