/**
 * ============================================================
 * CONFIG.JS — Único archivo que debes editar para un proyecto nuevo
 * ============================================================
 * Cambia textos, imágenes, colores, enlaces y logo aquí.
 * No necesitas tocar HTML, CSS ni JS de estructura.
 * ============================================================
 */

window.SITE_CONFIG = {

  // ---------- MARCA ----------
  brand: {
    name: "A&C Produce",
    logo: "assets/logo.png",
    logoAlt: "A&C Produce",
  },

  // ---------- COLORES (tokens de tema) ----------
  theme: {
    colorBg: "#0c0d0f",          // fondo general (negro azulado)
    colorOverlay: "rgba(8,10,14,0.55)", // overlay sobre el hero
    colorText: "#f4f2ee",        // texto principal (blanco hueso)
    colorTextMuted: "rgba(244,242,238,0.72)",
    colorAccent: "#5F6F52",      // dorado/ámbar (acento, links, líneas)
    colorAccentSoft: "rgba(95,111,82,0.35)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },

  // ---------- REDES SOCIALES (barra superior) ----------
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/anabelcernicharo?igsh=b3VpOGg5Y2U4bzdi" },
    { label: "Facebook", url: "https://www.facebook.com/share/1Je5BAgtpv/" },
    { label: "TikTok", url: "https://www.tiktok.com/@anabelcernicharo?_r=1&_t=ZS-98TWwDMM1pc" },
  ],

  // ---------- NAVEGACIÓN ----------
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Galería", href: "#galeria" },
    { label: "Acerca de", href: "#acerca" },
  ],

  // ---------- HERO ----------
  hero: {
    image: "assets/hero.jpg",
    imageAlt: "Food trailer personalizado al atardecer",
    eyebrow: "Logistica · Calidad · Confianza",
    titleLine1: "A&C PRODUCE",
    titleLine2: "Directo del campo a tu negocio.", // línea en itálica/acento
    description: "Suministramos frutas y verduras frescas para distribuidores. Especialistas IN and Out y logistica.  ",
    ctaText: "Cuéntanos tu proyecto",
    ctaHref: "#contacto",
    sideLabel: "Ver galería",
    sideHref: "#galeria",
  },

  // ---------- GALERÍA ----------
  gallery: {
    title: "Nuestros servicios",
    description: "Conoce parte de nuestras operaciones diarias, procesos logísticos y productos frescos que abastecemos a nuestros clientes.",
    // Agrega/quita objetos aquí. "image" es la ruta del archivo.
    items: [
      { image: "assets/gallery/G1.jpg", alt: "Food trailer color vino con logo azul", caption: "Frutas" },
      { image: "assets/gallery/G2.jpg", alt: "Food trailer gris con logo dorado", caption: "In and Out" },
      { image: "assets/gallery/G3.jpg", alt: "Food trailer rojo con acabados en aluminio", caption: "Verduras" },
    ],
  },

  // ---------- ACERCA DE ----------
  about: {
    title: "Comprometidos con la calidad.",
    description: "En A&C Produce abastecemos frutas y verduras frescas para distribuidores, supermercados, restaurantes y centros de distribución. Nuestro compromiso es ofrecer productos de calidad, logística eficiente y un servicio confiable de principio a fin, incluyendo operaciones de In & Out, almacenamiento y traslados.",
    stats: [
      { value: "10+", label: "Años de experiencia" },
      { value: "24/7", label: "Operacion logistica" },
      { value: "100%", label: "Profesionalismo" },
    ],
  },

  // ---------- CONTACTO / FOOTER ----------
  contact: {
    title: "Hablemos de tu negocio.",
    description: "¿Buscas un proveedor confiable y un servicio garantizado? Contáctanos y con gusto atenderemos tu proyecto  .",
    email: "acproduce2022@gmail.com   ",
    phone: "+1 (956) 252-9027  Anabel Cernicharo | +1 (469) 556-0056  Eric Adrian",
    address: "Anabel Cernicharo    |  Eric Adrian",
    whatsappUrl: "https://wa.me/520000000000",
  },

  footer: {
    copyright: "© 2026 A&C Produce. Todos los derechos reservados.",
  },
};
