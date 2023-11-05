import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import SEO from 'components/shared/SEO'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Breadcrumbs from 'components/shared/Breadcrumbs'
import Header from 'components/layout/Header'
import AllRealisations from 'components/layout/AllRealisations'
import Footer from 'components/layout/Footer'

import type { RealisationSingle } from 'components/layout/LatestRealisations/Card'

const RealizacjePage: React.FC<PageProps<Queries.RealizacjePageQuery>> = ({
  data,
}) => {
  const REALISATIONS: RealisationSingle[] = [
    {
      img: {
        src: data?.volvoS90?.childImageSharp?.gatsbyImageData!,
        alt: 'VOLVO S90 T5 INSCRIPTION',
      },
      title: 'VOLVO S90 T5 INSCRIPTION',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.vwTiguan?.childImageSharp?.gatsbyImageData!,
        alt: 'VW TIGUAN R',
      },
      title: 'VW TIGUAN R',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.mcS500?.childImageSharp?.gatsbyImageData!,
        alt: 'Mercedes S500 w pakiecie BRABUS',
      },
      title: 'Mercedes S500 w pakiecie BRABUS',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.bmwX4?.childImageSharp?.gatsbyImageData!,
        alt: 'BMW X4',
      },
      title: 'BMW X4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.wolga?.childImageSharp?.gatsbyImageData!,
        alt: 'Wołga GAZ 21 - 1964r.',
      },
      title: 'Wołga GAZ 21 - 1964r.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.jaguarXE?.childImageSharp?.gatsbyImageData!,
        alt: 'Jaguar XE',
      },
      title: 'Jaguar XE',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.mcAMG?.childImageSharp?.gatsbyImageData!,
        alt: 'Mercedes CLA 45 AMG',
      },
      title: 'Mercedes CLA 45 AMG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.vwScirocco?.childImageSharp?.gatsbyImageData!,
        alt: 'VW Scirocco',
      },
      title: 'VW Scirocco',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.audiA5?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Audi A5',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.bmwE32?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'BMW E32',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.audiA4?.childImageSharp?.gatsbyImageData!,
        alt: 'Audi A4',
      },
      title: 'Audi A4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },

    {
      img: {
        src: data?.honda?.childImageSharp?.gatsbyImageData!,
        alt: 'Honda Accord Coupe',
      },
      title: 'Honda Accord Coupe',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },

    {
      img: {
        src: data?.kiaSorento?.childImageSharp?.gatsbyImageData!,
        alt: 'Kia Sorento',
      },
      title: 'Kia Sorento',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'Polonez Caro - 1993r.',
      },
      title: 'Polonez Caro - 1993r.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },

    {
      img: {
        src: data?.szGrandVitara?.childImageSharp?.gatsbyImageData!,
        alt: 'Suzuki Grand Vitara',
      },
      title: 'Suzuki Grand Vitara',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
  ]

  return (
    <Layout>
      <SEO
        title={`Realizacje | Sprzedamtwójsamochód.pl`}
        description={
          'Zapoznaj się z naszymi najnowszymi realizacjami sprzedażowymi. Przejrzyj sprzedane pojazdy i przekonaj się, jak skutecznie pomagamy naszym klientom w sprzedaży samochodów.'
        }
        ogTitle="Ostatnie sprzedane samochody | Sprzedamtwojsamochod.pl"
        ogDescription="Zapoznaj się z naszymi ostatnimi realizacjami sprzedażowymi. Sprawdź, jak skutecznie sprzedajemy samochody dla naszych klientów. Skontaktuj się z nami, jeśli chcesz sprzedać swój samochód."
      />
      <Navigation />
      <Header
        heading="Realizacje"
        description="Nasze ostatnie realizacje sprzedażowe"
        img={{
          src: data?.hero?.childImageSharp?.gatsbyImageData!,
          alt: 'Handshake',
        }}
      />
      <Breadcrumbs
        crumbs={[
          {
            label: 'Home',
            link: '/',
          },
          {
            label: 'Realizacje',
          },
        ]}
      />
      <main>
        <AllRealisations
          heading="Sprzedane pojazdy"
          description="Poniżej przedstawiamy państwu nasze ostatnie realizacje sprzedażowe."
          realisations={REALISATIONS}
        />
      </main>

      <Footer />
    </Layout>
  )
}

export default RealizacjePage

export const query = graphql`
  query RealizacjePage {
    hero: file(name: { eq: "hero-5" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    audiA4: file(name: { eq: "audi-a4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    audiA5: file(name: { eq: "audi-a5" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    bmwX4: file(name: { eq: "bmw-x4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    bmwE32: file(name: { eq: "BMW" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    honda: file(name: { eq: "honda" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    jaguarXE: file(name: { eq: "jaguar-xe" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    kiaSorento: file(name: { eq: "kia-sorento" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    mcAMG: file(name: { eq: "mc-cla-45-amg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorCagiva: file(name: { eq: "motor-cagiva" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorCross: file(name: { eq: "motor-cross" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorHonda: file(name: { eq: "motor-honda" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorKawasaki: file(name: { eq: "motor-kawasaki" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorKeeway: file(name: { eq: "motor-keeway" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorYamaha2: file(name: { eq: "motor-yamaha-2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    motorYamaha: file(name: { eq: "motor-yamaha" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    polonez: file(name: { eq: "polonez" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    skuterPeugeot: file(name: { eq: "skuter-peugeot" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    szGrandVitara: file(name: { eq: "sz-grand-vitara" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    vwScirocco: file(name: { eq: "vw-scirocco" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    wolga: file(name: { eq: "wolga" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    volvoS90: file(name: { eq: "volvo-s90" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    vwTiguan: file(name: { eq: "vw-tiguan" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    mcS500: file(name: { eq: "mc-s500" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
