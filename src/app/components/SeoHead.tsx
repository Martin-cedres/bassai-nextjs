import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      <title>Productos de limpieza concentrados Bassai en San José de Mayo</title>
      <meta
        name="description"
        content="Distribuidor oficial de productos de limpieza concentrados Bassai en San José de Mayo. Calidad, rendimiento y cuidado ecológico para tu hogar y negocio."
      />
      <meta
        name="keywords"
        content="productos de limpieza concentrados, Bassai, limpieza ecológica, distribuidor oficial Bassai, San José de Mayo, departamento de San José, prolimpio, productos prolimpio, limpieza profesional"
      />
      <meta name="robots" content="index, follow" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Distribuidor oficial Bassai en San José de Mayo",
            description:
              "Venta de productos de limpieza concentrados Bassai en San José de Mayo, departamento de San José.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San José de Mayo",
              addressRegion: "San José",
              addressCountry: "UY",
            },
            url: "https://bassaisj.vercel.app/",  //cambiar la URL cuando cambie de dominio
            brand: {
              "@type": "Brand",
              name: "Bassai",
            },
            sameAs: [
              "https://www.facebook.com/tu-pagina-facebook", //agregar pagina de facebook real 
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Productos de limpieza concentrados Bassai",
            brand: {
              "@type": "Brand",
              name: "Bassai",
            },
            description:
              "Productos de limpieza concentrados Bassai distribuidos en San José de Mayo, con calidad y cuidado ecológico.",
            offers: {
              "@type": "Offer",
              priceCurrency: "UYU",
              price: "Consultar",
            },
          }),
        }}
      />

      <meta
        name="prolimpio"
        content="Prolimpio, productos prolimpio, distribuidor prolimpio San José de Mayo"
      />
    </Head>
  );
}
