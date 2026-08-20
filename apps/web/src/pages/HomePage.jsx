import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Instagram, Menu, X, Droplets, Sparkles, ShieldCheck, Leaf, Rabbit, MapPin, FlaskConical, Truck, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const WA = 'https://wa.me/573007372467';
const IG = 'https://instagram.com/merakderm';
const LOGO = 'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/1e4b0b6d04db3bd96bf822f4c10ce205.jpg';
const LINEUP = 'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/10a82b05804e35ee8ae9b5557be0cfe9.png';

const nav = [
    { label: 'Historia', href: '#historia' },
    { label: 'Filosofía', href: '#filosofia' },
    { label: 'Para ti', href: '#quiz' },
    { label: 'Productos', href: '#productos' },
    { label: 'Diferenciales', href: '#diferenciales' },
    { label: 'Rutina', href: '#rutina' },
];

function WhatsAppButton({ className = '', label = 'Comprar por WhatsApp' }) {
    return (
        <motion.a
            href={WA}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm bg-[hsl(var(--gold))] px-7 text-[0.78rem] uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-12px_hsl(var(--gold)/0.85)] transition-shadow duration-200 ease-out hover:bg-[hsl(var(--gold-deep))] hover:shadow-[0_10px_28px_-10px_hsl(var(--gold)/0.9)] ${className}`}
        >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.28-1.55-1.42-1.85-.15-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.85 1.21 3.05c.15.2 2.06 3.29 5.02 4.48 2.95 1.19 2.95.79 3.48.74.52-.05 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.57-.34zM12 22a9.9 9.9 0 0 1-5.03-1.37L3 22l1.4-4.02A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
            {label}
        </motion.a>
    );
}

const products = [
    {
        id: 'bha',
        name: 'Limpiador Facial BHA 2%',
        shortName: 'Limpiador Purificante',
        sub: 'Ácido salicílico · piel mixta a grasa',
        image: 'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/1d97e0359dafadbbbb60c002f2aa55ad.png',
        gallery: [
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/45ddf7680cf48b95b8fa30d74075d2a1.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/99b1212642e5c5aa04da1f5fd059a3d7.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/f8bc095b97f8ad9ae1546827ae1b4cc1.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/b3b3a802e96a8e3de5cf0d4ccc559f47.png',
        ],
        lead: 'Con ácido salicílico (BHA) para piel mixta, grasa o con tendencia a imperfecciones.',
        claim: 'Una limpieza que va más allá de retirar impurezas. La piel grasa necesita limpieza, pero también equilibrio.',
        body: 'Este limpiador combina ácido salicílico (BHA), aceite de árbol de té y centella asiática para ayudar a limpiar los poros, controlar el exceso de grasa y acompañar el cuidado de las pieles con tendencia a imperfecciones, sin dejar una sensación excesiva de resequedad. Porque una piel grasa también necesita una barrera cutánea saludable.',
        benefits: [
            'Ayuda a limpiar los poros en profundidad.',
            'Favorece la eliminación del exceso de grasa y las impurezas.',
            'Contribuye a reducir la apariencia de puntos negros y poros congestionados.',
            'Ayuda a mantener la piel fresca y equilibrada.',
            'Limpia respetando el confort y el equilibrio natural de la piel.',
        ],
        ideal: [
            'Presenta exceso de grasa o brillo durante el día.',
            'Tiene tendencia a puntos negros o poros congestionados.',
            'Presenta brotes ocasionales o imperfecciones.',
            'Busca una limpieza más profunda sin comprometer la barrera cutánea.',
            'Prefiere incorporar activos desde el primer paso de la rutina.',
        ],
        actives: [
            { name: 'Ácido salicílico (BHA)', text: 'Ayuda a limpiar el interior de los poros eliminando el exceso de grasa y las células que pueden favorecer su obstrucción.' },
            { name: 'Aceite de árbol de té', text: 'Ingrediente de origen natural conocido por sus propiedades purificantes.' },
            { name: 'Centella asiática', text: 'Ayuda a calmar la piel y favorece el equilibrio de la barrera cutánea.' },
            { name: 'Glicerina', text: 'Humectante que ayuda a mantener la hidratación y reduce la sensación de tirantez.' },
            { name: 'Propilenglicol', text: 'Contribuye a la hidratación y a la distribución uniforme de los ingredientes.' },
        ],
        use: [
            'Humedece el rostro con agua.',
            'Aplica una pequeña cantidad sobre las manos y emulsiona suavemente.',
            'Masajea 30 a 60 segundos, prestando atención a zonas con más grasa.',
            'Enjuaga con abundante agua y seca con suaves toques.',
            'Continúa con tu rutina. De día, finaliza siempre con protector solar.',
        ],
        tip: 'Si estás empezando con ácido salicílico o tu piel es sensible, úsalo una vez al día o en días alternos. La constancia suele ofrecer mejores resultados.',
        science: 'El ácido salicílico es uno de los ingredientes con mayor evidencia para pieles con tendencia a imperfecciones, gracias a su capacidad de actuar dentro del poro. La evidencia corresponde a estudios publicados sobre los activos y no constituye un estudio clínico de este producto.',
    },
    {
        id: 'hidratante',
        name: 'Limpiador Hidratante',
        shortName: 'Limpieza que cuida',
        sub: 'Barrera cutánea · piel seca o sensible',
        image: 'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/b7a6aec24d3cb8198377e79930c2a234.png',
        gallery: [
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/1934e99791e1590041957b4ba94f4e7a.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/4bb82cdf8272162b7e3d67e026233146.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/014b6a6de0f7ef6b5bf32bf76c68c011.png',
        ],
        lead: 'La limpieza también puede cuidar tu piel.',
        claim: 'Limpiar el rostro no debería dejar la piel tirante, incómoda o reseca.',
        body: 'Diseñado para eliminar impurezas, protector solar y residuos del día mientras ayuda a mantener la hidratación y respeta la barrera cutánea. Su combinación de surfactantes suaves, ceramida NP, ácido hialurónico, glicerina y centella asiática limpia con eficacia sin alterar el equilibrio natural. Porque una buena rutina empieza con una limpieza que cuida, no que agrede.',
        benefits: [
            'Limpia suavemente sin alterar la barrera cutánea.',
            'Ayuda a mantener la hidratación desde el primer paso.',
            'Reduce la sensación de tirantez después del lavado.',
            'Favorece una piel más confortable y equilibrada.',
            'Deja sensación de limpieza suave, sin residuos ni peso.',
        ],
        ideal: [
            'Se siente tirante después de lavarla.',
            'Es seca, sensible o reactiva.',
            'Está usando retinoides, exfoliantes o tratamientos que pueden alterar la barrera.',
            'Prefiere una limpieza suave para el uso diario.',
            'Busca un limpiador que respete la fisiología de la piel.',
        ],
        actives: [
            { name: 'Ceramida NP', text: 'Ayuda a fortalecer la barrera natural y a conservar mejor la hidratación durante la limpieza.' },
            { name: 'Ácido hialurónico', text: 'Atrae y retiene agua para mantener la piel hidratada incluso después del enjuague.' },
            { name: 'Glicerina', text: 'Humectante que disminuye la sensación de resequedad tras la limpieza.' },
            { name: 'Betaína', text: 'Equilibrio de hidratación y sensación de suavidad después del lavado.' },
            { name: 'Centella asiática', text: 'Calma y acompaña la reparación de la barrera cutánea.' },
            { name: 'PEG-7 Glyceryl Cocoate', text: 'De origen vegetal; aporta suavidad y reduce la tirantez.' },
        ],
        use: [
            'Humedece el rostro con agua.',
            'Aplica una pequeña cantidad y emulsiona suavemente.',
            'Masajea con movimientos circulares 30 a 60 segundos.',
            'Enjuaga con abundante agua y seca con suaves toques.',
            'Continúa con tu rutina. De día, finaliza con protector solar. Frecuencia: mañana y noche.',
        ],
        tip: 'Si usas maquillaje o protector resistente al agua, retíralos primero con un desmaquillante y completa con este limpiador para no alterar la barrera.',
        science: 'Cuando la limpieza se hace con ingredientes adecuados, ayuda a preservar la barrera, mantener la hidratación y preparar la piel para los siguientes pasos. La evidencia corresponde a estudios sobre los activos, no a un ensayo clínico de este producto.',
    },
    {
        id: 'gel',
        name: 'Gel Hidratante',
        shortName: 'Hidratación ligera',
        sub: 'Gel-crema · barrera e hidratación',
        image: 'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/a8bd16b6d4848bcaae05a04921070359.png',
        gallery: [
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/9a5d518faae685bfa6fe0070d7408878.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/c6d97183a1c80a08cb67a8228c356daa.png',
            'https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/55f73589b3434a0303ee45bb73e7efc2.png',
        ],
        lead: 'Tu piel no necesita sentirse pesada para estar bien hidratada.',
        claim: 'Textura gel-crema ligera que desaparece al aplicarla. Ideal para piel mixta, grasa deshidratada o normal.',
        body: 'Formulado para aportar hidratación, fortalecer la barrera cutánea y acompañar el equilibrio natural de la piel, con ceramida NP, ectoína, pantenol, niacinamida y ácido hialurónico para mantener la piel confortable durante todo el día.',
        benefits: [
            'Menos sensación de tirantez.',
            'Piel más cómoda durante el día.',
            'Hidratación ligera, duradera y sin brillo excesivo.',
            'Textura suave y agradable.',
            'Ayuda a fortalecer la barrera cutánea con el uso constante.',
            'Sensación de piel suave sin acabado graso.',
            'Funciona muy bien antes del protector solar o el maquillaje.',
        ],
        ideal: [
            'Se siente tirante aunque produzca grasa.',
            'Necesita hidratación sin sensación pesada.',
            'Vive en climas cálidos o húmedos.',
            'Prefiere texturas ligeras.',
            'Usa tratamientos para acné o exfoliantes y necesita apoyar la barrera.',
        ],
        actives: [
            { name: 'Ceramida NP', text: 'Fortalece la barrera y ayuda a conservar la hidratación frente al entorno.' },
            { name: 'Niacinamida 2%', text: 'Equilibra el exceso de sebo, mejora la textura y refuerza la función barrera.' },
            { name: 'Ectoína', text: 'Protege frente al estrés ambiental y mantiene la hidratación.' },
            { name: 'Ácido hialurónico', text: 'Atrae y retiene agua para flexibilidad y confort.' },
            { name: 'Pantenol (Provitamina B5)', text: 'Calma, hidrata y favorece la recuperación de la barrera.' },
            { name: 'Glicerina', text: 'Humectante clásico que evita la tirantez tras la aplicación.' },
            { name: 'Centella asiática', text: 'Propiedades calmantes y apoyo a la reparación de la piel.' },
            { name: 'Vitamina E', text: 'Antioxidante frente al estrés oxidativo ambiental.' },
            { name: 'PDRN', text: 'Apoya la renovación natural y un aspecto saludable.' },
        ],
        use: [
            'Aplica una pequeña cantidad sobre piel limpia y seca.',
            'Distribuye por rostro y cuello con movimientos ascendentes, sin frotar.',
            'Deja que se absorba por completo antes del siguiente paso.',
            'De día, finaliza siempre con protector solar de amplio espectro.',
            'Frecuencia: mañana y noche, o según las necesidades de tu piel.',
        ],
        tip: 'No necesitas grandes cantidades. Una dosis adecuada, usada con constancia, suele aportar más beneficios que el exceso.',
        science: 'En MERAK cada activo tiene un propósito: ingredientes con evidencia para necesidades reales de la piel. Una rutina más simple también puede ser más inteligente.',
    },
];

const pillars = [
    { icon: FlaskConical, title: 'Ciencia con verdad', text: 'Activos con evidencia, concentraciones claras y cero promesas imposibles.' },
    { icon: Droplets, title: 'Piel primero', text: 'Formulamos respetando la barrera cutánea, el microbioma y tu tolerancia.' },
    { icon: Sparkles, title: 'Menos pero mejor', text: 'Pocos productos, bien elegidos, que sí puedes sostener en el tiempo.' },
];

const diferenciales = [
    { icon: Leaf, label: 'Sin fragancias adicionadas' },
    { icon: Droplets, label: 'Sin colores adicionados' },
    { icon: ShieldCheck, label: 'Apto para piel sensible' },
    { icon: Rabbit, label: 'Cruelty free' },
    { icon: MapPin, label: 'Hecho en Colombia' },
    { icon: Truck, label: 'Envíos a toda Colombia' },
];

const testimonials = [
    {
        name: 'Camila R.',
        location: 'Cali',
        product: 'Limpiador Facial BHA 2%',
        quote: 'Tenía la piel grasa y con poros súper marcados. En un mes ya se siente más equilibrada, sin esa sensación de resequedad que me dejaban otros productos con ácido salicílico.',
    },
    {
        name: 'Valentina M.',
        location: 'Bogotá',
        product: 'Gel Hidratante',
        quote: 'Lo que más valoro es que explican por qué usar cada activo, no solo venden el producto. Se nota que hay ciencia detrás, no es solo marketing.',
    },
    {
        name: 'Daniela P.',
        location: 'Medellín',
        product: 'Limpiador Hidratante',
        quote: 'Uso retinol de noche y necesitaba algo que no me dejara la piel tirante al lavarla. Este limpiador cumplió exactamente eso desde la primera semana.',
    },
];

const faqs = [
    {
        q: '¿Cuánto dura un envase con uso normal?',
        a: 'Con uso diario, mañana y noche, un envase suele durar entre 6 y 8 semanas. La duración exacta depende de la cantidad que uses en cada aplicación.',
    },
    {
        q: '¿Los productos son aptos para piel sensible?',
        a: 'Sí. Todas nuestras fórmulas están pensadas para respetar la barrera cutánea y son aptas para piel sensible. Aun así, recomendamos hacer una prueba en una zona pequeña 24 horas antes del primer uso.',
    },
    {
        q: '¿Hacen envíos a toda Colombia?',
        a: 'Sí, hacemos envíos a nivel nacional. Puedes pagar contra entrega en las principales ciudades o por transferencia. Escríbenos por WhatsApp y te confirmamos tiempos y costos según tu ciudad.',
    },
    {
        q: '¿En cuánto tiempo se empiezan a ver resultados?',
        a: 'Depende del producto y de tu piel, pero en general los primeros cambios en confort y equilibrio se notan entre la segunda y cuarta semana de uso constante. La constancia es la clave.',
    },
    {
        q: '¿Puedo combinar los tres productos en una misma rutina?',
        a: 'Sí, están diseñados para complementarse: eliges el limpiador según tu tipo de piel (BHA 2% o Hidratante), sigues con el Gel Hidratante y terminas con protector solar en el día.',
    },
];

const routine = [
    { step: '01', title: 'Limpia', text: 'Elige tu limpiador: BHA 2% si hay poros y grasa; Hidratante si hay sequedad o sensibilidad.' },
    { step: '02', title: 'Hidrata', text: 'Gel Hidratante MERAK Derm, mañana y noche, sobre piel limpia.' },
    { step: '03', title: 'Protege', text: 'Protector solar cada mañana. Es el paso que sostiene todos los demás.' },
];

function ProductCard({ p, i }) {
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState(p.image);

    return (
        <article
            id={p.id}
            className={`grid grid-cols-1 items-start gap-8 border-t border-border pt-10 lg:grid-cols-2 lg:gap-16 scroll-mt-24 ${
                i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
            }`}
        >
            <div>
                <figure className="group relative overflow-hidden rounded-sm bg-background">
                    <img
                        src={img}
                        alt={`${p.name} MERAK Derm`}
                        loading="lazy"
                        className="block h-auto w-full max-h-[36rem] mx-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                </figure>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                    {[p.image, ...p.gallery].slice(0, 5).map((src) => (
                        <button
                            key={src}
                            type="button"
                            onClick={() => setImg(src)}
                            className={`h-16 w-14 shrink-0 overflow-hidden border bg-background transition-colors ${
                                img === src ? 'border-[hsl(var(--gold))]' : 'border-border'
                            }`}
                            aria-label="Ver foto del producto"
                        >
                            <img src={src} alt="" className="h-full w-full object-contain p-1" loading="lazy" />
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-[0.66rem] uppercase tracking-[0.34em] text-gold">{p.sub}</p>
                <h3 className="mt-3 font-display text-[2rem] font-light leading-tight text-foreground sm:text-[2.4rem]">{p.name}</h3>
                <p className="mt-1 text-[0.85rem] font-light text-muted-foreground">{p.shortName}</p>
                <p className="mt-5 text-[1.02rem] font-light leading-relaxed text-foreground/90">{p.lead}</p>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-muted-foreground">{p.claim}</p>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-muted-foreground">{p.body}</p>

                <p className="mt-7 text-[0.62rem] uppercase tracking-[0.34em] text-muted-foreground">Activos clave</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                    {p.actives.map((a) => (
                        <li
                            key={a.name}
                            className="rounded-full border border-[hsl(var(--gold)/0.45)] bg-background px-3.5 py-1.5 text-[0.72rem] tracking-wide text-foreground/80"
                        >
                            {a.name}
                        </li>
                    ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <WhatsAppButton label="Pedir por WhatsApp" />
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex min-h-[44px] items-center gap-2 text-[0.72rem] uppercase tracking-[0.2em] text-foreground underline decoration-[hsl(var(--gold))] decoration-1 underline-offset-[6px]"
                        aria-expanded={open}
                    >
                        {open ? 'Ver menos' : 'Descripción completa'}
                        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                    </button>
                </div>

                {open && (
                    <div className="mt-8 space-y-8 border-t border-border pt-8">
                        <div>
                            <h4 className="font-display text-xl font-light text-foreground">Lo que hace por tu piel</h4>
                            <ul className="mt-3 space-y-2">
                                {p.benefits.map((b) => (
                                    <li key={b} className="flex gap-2 text-[0.92rem] font-light leading-relaxed text-muted-foreground">
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--gold))]" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display text-xl font-light text-foreground">Ideal si tu piel…</h4>
                            <ul className="mt-3 space-y-2">
                                {p.ideal.map((b) => (
                                    <li key={b} className="flex gap-2 text-[0.92rem] font-light leading-relaxed text-muted-foreground">
                                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--gold))]" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display text-xl font-light text-foreground">Los activos que hacen la diferencia</h4>
                            <ul className="mt-4 space-y-4">
                                {p.actives.map((a) => (
                                    <li key={a.name}>
                                        <p className="text-[0.8rem] uppercase tracking-[0.16em] text-gold">{a.name}</p>
                                        <p className="mt-1 text-[0.92rem] font-light leading-relaxed text-muted-foreground">{a.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-display text-xl font-light text-foreground">Cómo incorporarlo</h4>
                            <ol className="mt-3 list-decimal space-y-2 pl-5">
                                {p.use.map((u) => (
                                    <li key={u} className="text-[0.92rem] font-light leading-relaxed text-muted-foreground">
                                        {u}
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <div className="bg-background p-5">
                            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-gold">Consejo MERAK</p>
                            <p className="mt-2 text-[0.95rem] font-light leading-relaxed text-foreground/85">{p.tip}</p>
                        </div>
                        <div>
                            <h4 className="font-display text-xl font-light text-foreground">La ciencia detrás de la fórmula</h4>
                            <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-muted-foreground">{p.science}</p>
                        </div>
                        <div className="text-[0.8rem] font-light leading-relaxed text-muted-foreground">
                            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Antes de usarlo</p>
                            <p className="mt-2">Solo uso externo. Evita ojos y mucosas. Si es la primera vez, prueba en una zona pequeña 24 h. Ante irritación persistente, suspende y consulta a un profesional. Mantén fuera del alcance de los niños. De día, usa protector solar.</p>
                            <p className="mt-4 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Conservación</p>
                            <p className="mt-2">Lugar fresco y seco, lejos del sol y el calor. Envase bien cerrado. Evita cambios extremos de temperatura.</p>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

function FaqItem({ item }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-border py-6">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={open}
            >
                <span className="font-display text-[1.25rem] font-light text-foreground sm:text-[1.4rem]">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
            </button>
            {open && (
                <p className="mt-3 max-w-3xl text-[0.95rem] font-light leading-relaxed text-muted-foreground">{item.a}</p>
            )}
        </div>
    );
}

const skinOptions = [
    { id: 'grasa', label: 'Grasa o con brillo' },
    { id: 'seca', label: 'Seca o con tirantez' },
    { id: 'sensible', label: 'Sensible, se irrita fácil' },
    { id: 'mixta', label: 'Mixta' },
];

const concernOptions = [
    { id: 'poros', label: 'Puntos negros o poros marcados' },
    { id: 'resequedad', label: 'Resequedad y sensación de tirantez' },
    { id: 'barrera', label: 'Uso retinol o exfoliantes, cuido mi barrera' },
    { id: 'simplificar', label: 'Solo quiero simplificar mi rutina' },
];

function SkinQuiz() {
    const [step, setStep] = useState(0);
    const [skinType, setSkinType] = useState(null);
    const [concern, setConcern] = useState(null);
    const reduce = useReducedMotion();

    const handleSkin = (id) => {
        setSkinType(id);
        setStep(1);
    };
    const handleConcern = (id) => {
        setConcern(id);
        setStep(2);
    };
    const reset = () => {
        setStep(0);
        setSkinType(null);
        setConcern(null);
    };

    let recommended = null;
    if (step === 2) {
        if (skinType === 'seca' || skinType === 'sensible' || concern === 'resequedad' || concern === 'barrera') {
            recommended = products.find((p) => p.id === 'hidratante');
        } else if (skinType === 'grasa' || concern === 'poros') {
            recommended = products.find((p) => p.id === 'bha');
        } else {
            recommended = products.find((p) => p.id === 'gel');
        }
    }

    const slide = {
        initial: reduce ? { opacity: 0 } : { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: reduce ? { opacity: 0 } : { opacity: 0, x: -24 },
    };

    return (
        <div className="relative mx-auto max-w-2xl overflow-hidden border border-border bg-background p-8 sm:p-10">
            <div className="flex items-center gap-2">
                {[0, 1, 2].map((s) => (
                    <span key={s} className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                        <motion.span
                            className="block h-full bg-[hsl(var(--gold))]"
                            initial={{ width: '0%' }}
                            animate={{ width: step >= s ? '100%' : '0%' }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                    </span>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div key="step0" {...slide} transition={{ duration: 0.35, ease: 'easeOut' }}>
                        <p className="mt-7 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Pregunta 1 de 2</p>
                        <h3 className="mt-3 font-display text-[1.6rem] font-light text-foreground">¿Cómo se siente tu piel la mayoría del día?</h3>
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {skinOptions.map((o, i) => (
                                <motion.button
                                    key={o.id}
                                    type="button"
                                    onClick={() => handleSkin(o.id)}
                                    initial={reduce ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: 0.05 * i }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="rounded-sm border border-border px-5 py-4 text-left text-[0.9rem] font-light text-foreground transition-colors hover:border-[hsl(var(--gold))] hover:bg-cream"
                                >
                                    {o.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div key="step1" {...slide} transition={{ duration: 0.35, ease: 'easeOut' }}>
                        <p className="mt-7 text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Pregunta 2 de 2</p>
                        <h3 className="mt-3 font-display text-[1.6rem] font-light text-foreground">¿Qué te preocupa más ahora mismo?</h3>
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {concernOptions.map((o, i) => (
                                <motion.button
                                    key={o.id}
                                    type="button"
                                    onClick={() => handleConcern(o.id)}
                                    initial={reduce ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35, delay: 0.05 * i }}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="rounded-sm border border-border px-5 py-4 text-left text-[0.9rem] font-light text-foreground transition-colors hover:border-[hsl(var(--gold))] hover:bg-cream"
                                >
                                    {o.label}
                                </motion.button>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={() => setStep(0)}
                            className="mt-6 text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground underline decoration-1 underline-offset-4"
                        >
                            Volver
                        </button>
                    </motion.div>
                )}

                {step === 2 && recommended && (
                    <motion.div key="step2" {...slide} transition={{ duration: 0.4, ease: 'easeOut' }}>
                        <motion.div
                            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="mt-7 flex h-11 w-11 items-center justify-center rounded-full bg-[hsl(var(--gold))] text-white"
                        >
                            <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                        </motion.div>
                        <p className="mt-4 text-[0.62rem] uppercase tracking-[0.3em] text-gold">Tu recomendación</p>
                        <h3 className="mt-3 font-display text-[1.8rem] font-light text-foreground">{recommended.name}</h3>
                        <p className="mt-2 text-[0.92rem] font-light leading-relaxed text-muted-foreground">{recommended.lead}</p>
                        <p className="mt-4 text-[0.85rem] font-light leading-relaxed text-foreground/80">
                            {recommended.id === 'gel'
                                ? 'Úsalo mañana y noche sobre piel limpia y, de día, termina siempre con protector solar.'
                                : 'Es el primer paso de tu rutina. Después, sigue con el Gel Hidratante MERAK Derm mañana y noche.'}
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                            <motion.a
                                href={`#${recommended.id}`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[hsl(var(--gold))] px-7 text-[0.78rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[hsl(var(--gold-deep))]"
                            >
                                Ver producto
                            </motion.a>
                            <button
                                type="button"
                                onClick={reset}
                                className="text-[0.75rem] uppercase tracking-[0.2em] text-muted-foreground underline decoration-1 underline-offset-4"
                            >
                                Volver a empezar
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const reduce = useReducedMotion();
    const words = 'Ciencia con alma para simplificar tu rutina.'.split(' ');

    const handleHeroTilt = (e) => {
        if (reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: py * -8, y: px * 8 });
    };
    const resetHeroTilt = () => setTilt({ x: 0, y: 0 });

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-[hsl(var(--gold)/0.2)]">
            <Helmet>
                <title>MERAK Derm | Cosmética colombiana para rutinas simples</title>
                <meta
                    name="description"
                    content="MERAK Derm simplifica el cuidado de la piel con fórmulas funcionales, educación clara y rutinas simples. Gel hidratante, limpiador BHA 2% y limpiador hidratante. Compra por WhatsApp."
                />
            </Helmet>
            <Seo
                title="MERAK Derm | Ciencia con alma para simplificar tu rutina"
                description="Cosmética colombiana: fórmulas funcionales, educación clara y rutinas simples. Menos pasos, mejores decisiones."
                image={LINEUP}
                siteName="MERAK Derm"
            />

            <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
                <div className="mx-auto flex h-[76px] w-full max-w-[90rem] items-center justify-between px-5 sm:px-8">
                    <a href="#inicio" className="flex items-center gap-3" aria-label="MERAK Derm inicio">
                        <img src={LOGO} alt="MERAK Derm" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
                        <span className="hidden flex-col leading-none sm:flex">
                            <span className="font-display text-xl tracking-[0.28em] text-foreground">MERAK</span>
                            <span className="text-[0.55rem] uppercase tracking-[0.5em] text-gold">Derm</span>
                        </span>
                    </a>
                    <nav className="hidden items-center gap-9 md:flex">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                className="relative text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {n.label}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-3">
                        <a href={IG} target="_blank" rel="noreferrer" aria-label="Instagram @merakderm" className="hidden text-muted-foreground transition-colors hover:text-gold sm:block">
                            <Instagram className="h-[18px] w-[18px]" strokeWidth={1.5} />
                        </a>
                        <WhatsAppButton className="hidden lg:inline-flex" />
                        <button
                            type="button"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Abrir menú"
                            className="flex h-11 w-11 items-center justify-center text-foreground md:hidden"
                        >
                            {menuOpen ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="border-t border-border bg-background px-5 pb-6 pt-3 md:hidden">
                        {nav.map((n) => (
                            <a
                                key={n.href}
                                href={n.href}
                                onClick={() => setMenuOpen(false)}
                                className="block border-b border-border/60 py-4 text-[0.8rem] uppercase tracking-[0.2em] text-muted-foreground"
                            >
                                {n.label}
                            </a>
                        ))}
                        <WhatsAppButton className="mt-5 w-full" />
                    </div>
                )}
            </header>

            <section id="inicio" className="relative min-h-[100dvh] overflow-hidden bg-cream">
                <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:min-h-[calc(100dvh-76px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-0 lg:pt-0">
                    <div className="relative">
                        <p className="mb-7 flex items-center gap-4 text-[0.66rem] uppercase tracking-[0.42em] text-gold">
                            <motion.span
                                initial={reduce ? false : { width: 0 }}
                                animate={{ width: '2.5rem' }}
                                transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
                                className="h-px bg-[hsl(var(--gold))]"
                            />
                            Cosmética colombiana
                        </p>
                        <h1 className="font-display text-[2.7rem] font-light leading-[1.04] tracking-[-0.01em] text-foreground sm:text-6xl lg:text-[4.6rem]">
                            {words.map((w, i) => (
                                <motion.span
                                    key={`${w}-${i}`}
                                    initial={reduce ? false : { opacity: 0, y: '0.4em' }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
                                    className="mr-[0.28em] inline-block"
                                >
                                    {w === 'alma' ? (
                                        <span className="relative italic">
                                            {w}
                                            <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[hsl(var(--gold)/0.55)]" />
                                        </span>
                                    ) : (
                                        w
                                    )}
                                </motion.span>
                            ))}
                        </h1>
                        <p className="mt-8 max-w-xl text-[1.02rem] font-light leading-relaxed text-muted-foreground">
                            Rutinas simples, fórmulas funcionales y educación clara para cuidar tu piel con menos pasos y más conciencia.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center gap-5">
                            <WhatsAppButton />
                            <a href="#productos" className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground underline decoration-[hsl(var(--gold))] decoration-1 underline-offset-[6px]">
                                Ver productos
                            </a>
                        </div>
                    </div>

                    <motion.div
                        className="relative"
                        style={{ transformPerspective: 1000 }}
                        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                        onMouseMove={handleHeroTilt}
                        onMouseLeave={resetHeroTilt}
                    >
                        <motion.div
                            className="pointer-events-none absolute -inset-10 hidden rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold)/0.28),transparent)] blur-3xl lg:block"
                            animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.img
                            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            src={LINEUP}
                            alt="Línea MERAK Derm: gel hidratante y limpiadores"
                            className="relative aspect-[4/5] w-full object-contain lg:aspect-[3/4]"
                            loading="eager"
                        />
                        <motion.div
                            className="pointer-events-none absolute left-6 top-12 hidden h-16 w-16 border-l border-t border-[hsl(var(--gold)/0.7)] lg:block"
                            animate={reduce ? {} : { y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                        />
                        <motion.div
                            className="pointer-events-none absolute right-6 top-12 hidden h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-[hsl(var(--gold)/0.5)] bg-background/90 shadow-[0_8px_24px_-12px_hsl(var(--gold)/0.5)] backdrop-blur-sm lg:flex"
                            animate={reduce ? {} : { y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <video
                                src="/videos/animacion-logo-merak.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                                aria-label="Animación del símbolo MERAK Derm"
                            />
                        </motion.div>
                        <div className="absolute bottom-5 left-5 right-5 bg-background/92 p-5 backdrop-blur-sm sm:left-auto sm:w-[17rem]">
                            <Sparkles className="h-4 w-4 text-gold" strokeWidth={1.5} />
                            <p className="mt-3 font-display text-[1.35rem] leading-snug text-foreground">Menos pasos. Mejores decisiones.</p>
                            <p className="mt-2 text-[0.78rem] leading-relaxed text-muted-foreground">Más respeto por la barrera cutánea.</p>
                        </div>
                    </motion.div>
                </div>

                <a
                    href="#historia"
                    aria-label="Descubre más, baja en la página"
                    className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.32em] text-muted-foreground transition-colors hover:text-gold lg:flex"
                >
                    <span>Descubre</span>
                    <ChevronDown className="h-4 w-4 animate-bounce text-gold" strokeWidth={1.5} />
                </a>
            </section>

            <div className="overflow-hidden border-y border-border bg-background py-4">
                <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
                    {Array.from({ length: 2 }).map((_, r) => (
                        <React.Fragment key={r}>
                            {['Ciencia con verdad', 'Piel primero', 'Menos pero mejor', 'Sin fragancias adicionadas', 'Cruelty free', 'Hecho en Colombia'].map((t, i) => (
                                <span key={`${r}-${i}`} className="flex items-center gap-10 text-[0.68rem] uppercase tracking-[0.34em] text-muted-foreground">
                                    {t}
                                    <span className="h-1 w-1 rounded-full bg-[hsl(var(--gold))]" />
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <section id="historia" className="relative overflow-hidden bg-background py-24 lg:py-32">
                <div className="mx-auto grid w-full max-w-[72rem] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                    <Reveal>
                        <div className="relative mx-auto flex h-64 w-64 items-center justify-center lg:mx-0">
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,hsl(var(--gold)/0.3),transparent)] blur-2xl" />
                            <video
                                src="/videos/animacion-logo-merak.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="relative h-60 w-60 object-cover mix-blend-multiply"
                                style={{
                                    WebkitMaskImage: 'radial-gradient(circle closest-side, black 40%, transparent 100%)',
                                    maskImage: 'radial-gradient(circle closest-side, black 40%, transparent 100%)',
                                }}
                                aria-label="Animación del símbolo MERAK Derm"
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Nuestra historia</p>
                        <h2 className="mt-4 font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                            ¿Qué es <span className="italic text-gold">MERAK</span>?
                        </h2>
                        <p className="mt-6 max-w-2xl text-[0.98rem] font-light leading-relaxed text-foreground/90">
                            MERAK es una palabra sin traducción exacta que describe el placer de encontrar plenitud en los
                            pequeños gestos: un ritual simple, un momento de calma, un cuidado bien hecho. Así nació MERAK
                            Derm, con la convicción de que cuidar tu piel no debería ser complicado para sentirse valioso.
                        </p>
                        <p className="mt-4 max-w-2xl text-[0.95rem] font-light leading-relaxed text-muted-foreground">
                            Nuestro símbolo es una mariposa: representa la transformación gradual y consciente que
                            acompaña cada rutina bien pensada. Igual que la piel, se transforma con paciencia, ciencia y
                            constancia, no de un día para otro.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section id="filosofia" className="mx-auto w-full max-w-[72rem] px-5 py-24 sm:px-8 lg:py-32">
                <Reveal>
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <h2 className="font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                            No necesitas más productos. Necesitas <span className="italic text-gold">entender mejor</span> tu piel.
                        </h2>
                        <p className="self-end border-l border-[hsl(var(--gold)/0.45)] pl-6 text-[1rem] font-light leading-relaxed text-muted-foreground">
                            MERAK Derm simplifica el cuidado de la piel con fórmulas funcionales, educación clara y rutinas simples. Menos pasos,
                            mejores decisiones y más respeto por la barrera cutánea.
                        </p>
                    </div>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
                    {pillars.map((p, i) => (
                        <Reveal key={p.title} delay={i * 0.1}>
                            <div className="group relative flex h-full flex-col gap-6 overflow-hidden bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-cream sm:p-10">
                                <span className="pointer-events-none absolute -right-3 -top-7 select-none font-display text-[7rem] font-light leading-none text-border transition-colors duration-300 group-hover:text-[hsl(var(--gold)/0.3)] sm:text-[8rem]">
                                    0{i + 1}
                                </span>
                                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(var(--gold)/0.4)] transition-colors duration-300 group-hover:border-[hsl(var(--gold))]">
                                    <p.icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
                                </span>
                                <div className="relative">
                                    <h3 className="font-display text-[1.7rem] font-light leading-tight text-foreground">{p.title}</h3>
                                    <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-muted-foreground">{p.text}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section id="quiz" className="mx-auto w-full max-w-[72rem] px-5 py-24 sm:px-8 lg:py-32">
                <Reveal>
                    <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Encuentra tu producto</p>
                    <h2 className="mt-4 max-w-2xl font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                        ¿Cuál rutina necesita tu piel?
                    </h2>
                    <p className="mt-4 max-w-xl text-[0.95rem] font-light leading-relaxed text-muted-foreground">
                        Dos preguntas rápidas y te decimos por cuál producto empezar.
                    </p>
                </Reveal>
                <Reveal delay={0.08}>
                    <div className="mt-10">
                        <SkinQuiz />
                    </div>
                </Reveal>
            </section>

            <section id="productos" className="bg-cream py-24 lg:py-32">
                <div className="mx-auto w-full max-w-[80rem] px-5 sm:px-8">
                    <Reveal>
                        <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Catálogo</p>
                        <h2 className="mt-4 max-w-2xl font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                            Tres fórmulas. Una rutina completa.
                        </h2>
                    </Reveal>

                    <div className="mt-14 space-y-16">
                        {products.map((p, i) => (
                            <Reveal key={p.id} delay={0.04}>
                                <ProductCard p={p} i={i} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="diferenciales" className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8 lg:py-28">
                <Reveal>
                    <h2 className="max-w-xl font-display text-[2rem] font-light leading-[1.14] text-foreground sm:text-[2.6rem]">
                        Lo que sí y lo que <span className="italic">nunca</span> encontrarás.
                    </h2>
                </Reveal>
                <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
                    {diferenciales.map((d, i) => (
                        <Reveal key={d.label} delay={i * 0.06}>
                            <div className="group flex h-full flex-col items-center gap-5 bg-background px-6 py-12 text-center transition-colors duration-200 hover:bg-cream">
                                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[hsl(var(--gold)/0.4)] transition-colors duration-200 group-hover:border-[hsl(var(--gold))]">
                                    <d.icon className="h-6 w-6 text-gold" strokeWidth={1.3} />
                                </span>
                                <p className="max-w-[10rem] text-[0.85rem] font-light leading-snug text-foreground">{d.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section id="rutina" className="relative overflow-hidden bg-cream py-24 lg:py-32">
                <div className="mx-auto grid w-full max-w-[80rem] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                        <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Rutina MERAK</p>
                        <h2 className="mt-4 font-display text-[2.1rem] font-light leading-[1.1] text-foreground sm:text-[2.9rem]">
                            Limpia, hidrata y protege con protector solar.
                        </h2>
                        <p className="mt-5 max-w-lg text-[0.98rem] font-light leading-relaxed text-muted-foreground">
                            Tres pasos sostenibles en el tiempo. Sin rutinas de diez productos, sin ruido, sin dañar tu barrera.
                        </p>
                        <div className="mt-10 space-y-8 border-l border-[hsl(var(--gold)/0.4)] pl-7">
                            {routine.map((r) => (
                                <Reveal key={r.step} delay={0.05}>
                                    <div>
                                        <p className="font-display text-[0.95rem] tracking-[0.3em] text-gold">{r.step}</p>
                                        <h3 className="mt-1 font-display text-[1.7rem] font-light text-foreground">{r.title}</h3>
                                        <p className="mt-2 max-w-lg text-[0.92rem] font-light leading-relaxed text-muted-foreground">{r.text}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <WhatsAppButton className="mt-11" />
                    </div>
                    <div className="relative">
                        <img
                            src="https://horizons-cdn.hostinger.com/a8ec7c5d-7ba9-4a24-a1db-3b26a1b6d833/c3adeeced15508b9ca40b83b9ddce532.png"
                            alt="Los tres productos MERAK Derm"
                            loading="lazy"
                            className="aspect-[3/2] w-full object-cover lg:aspect-[4/5]"
                        />
                        <div className="absolute -bottom-5 -left-5 hidden h-28 w-28 border border-[hsl(var(--gold)/0.45)] lg:block" />
                    </div>
                </div>
            </section>

            <section id="testimonios" className="mx-auto w-full max-w-[80rem] px-5 py-24 sm:px-8 lg:py-32">
                <Reveal>
                    <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Lo que dicen</p>
                    <h2 className="mt-4 max-w-2xl font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                        Historias reales de piel real.
                    </h2>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Reveal key={t.name} delay={i * 0.08}>
                            <div className="flex h-full flex-col justify-between gap-6 bg-background p-7">
                                <Quote className="h-6 w-6 text-gold" strokeWidth={1.3} />
                                <p className="text-[0.95rem] font-light leading-relaxed text-foreground/90">“{t.quote}”</p>
                                <div>
                                    <p className="text-[0.85rem] font-medium text-foreground">{t.name} · {t.location}</p>
                                    <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">{t.product}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            <section id="faq" className="bg-cream py-24 lg:py-32">
                <div className="mx-auto w-full max-w-[64rem] px-5 sm:px-8">
                    <Reveal>
                        <p className="text-[0.66rem] uppercase tracking-[0.42em] text-gold">Preguntas frecuentes</p>
                        <h2 className="mt-4 max-w-2xl font-display text-[2.1rem] font-light leading-[1.12] text-foreground sm:text-[2.9rem]">
                            Resolvamos tus dudas.
                        </h2>
                    </Reveal>

                    <div className="mt-12 border-t border-border">
                        {faqs.map((f, i) => (
                            <Reveal key={f.q} delay={i * 0.05}>
                                <FaqItem item={f} />
                            </Reveal>
                        ))}
                    </div>

                    <p className="mt-8 text-[0.9rem] font-light text-muted-foreground">
                        ¿Tienes otra pregunta?{' '}
                        <a href={WA} target="_blank" rel="noreferrer" className="text-gold underline decoration-1 underline-offset-4">
                            Escríbenos por WhatsApp
                        </a>
                        .
                    </p>
                </div>
            </section>

            <footer className="border-t border-border bg-background">
                <div className="mx-auto w-full max-w-[80rem] px-5 py-16 sm:px-8">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                        <div>
                            <div className="flex items-center gap-3">
                                <img src={LOGO} alt="MERAK Derm" className="h-14 w-14 object-contain" />
                                <div>
                                    <span className="font-display text-2xl tracking-[0.28em] text-foreground">MERAK</span>
                                    <p className="text-[0.6rem] uppercase tracking-[0.5em] text-gold">Derm</p>
                                </div>
                            </div>
                            <p className="mt-4 max-w-xs text-[0.85rem] font-light leading-relaxed text-muted-foreground">
                                Ciencia con alma para simplificar tu rutina. Cosmética hecha en Colombia.
                            </p>
                        </div>
                        <div>
                            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Navegación</p>
                            <ul className="mt-4 space-y-2.5">
                                {nav.map((n) => (
                                    <li key={n.href}>
                                        <a href={n.href} className="text-[0.9rem] font-light text-foreground/80 transition-colors hover:text-gold">
                                            {n.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">Contacto</p>
                            <ul className="mt-4 space-y-2.5 text-[0.9rem] font-light">
                                <li>
                                    <a href={WA} target="_blank" rel="noreferrer" className="text-foreground/80 transition-colors hover:text-gold">
                                        WhatsApp +57 300 737 2467
                                    </a>
                                </li>
                                <li>
                                    <a href={IG} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-gold">
                                        <Instagram className="h-4 w-4" strokeWidth={1.5} /> @merakderm
                                    </a>
                                </li>
                            </ul>
                            <WhatsAppButton className="mt-6" />
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[0.75rem] font-light text-muted-foreground sm:flex-row sm:items-center">
                        <p>© {new Date().getFullYear()} MERAK Derm. Todos los derechos reservados.</p>
                        <p>Cosmética · Colombia</p>
                    </div>
                </div>
            </footer>

            <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                aria-label="Escribir por WhatsApp"
                className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--gold))] text-white shadow-[0_12px_32px_-8px_hsl(var(--gold)/0.75)] transition-transform hover:scale-105 active:scale-95 lg:bottom-8 lg:right-8"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.28-1.55-1.42-1.85-.15-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.85 1.21 3.05c.15.2 2.06 3.29 5.02 4.48 2.95 1.19 2.95.79 3.48.74.52-.05 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.57-.34zM12 22a9.9 9.9 0 0 1-5.03-1.37L3 22l1.4-4.02A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
                </svg>
            </a>
        </div>
    );
}
