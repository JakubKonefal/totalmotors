import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import { seoProps } from 'constants/seoProps'

import Layout from 'components/layout'
import SEO from 'components/shared/SEO'
import Navigation from 'components/layout/Navigation'
import ModalForm from 'components/layout/ModalForm'

import HomeHeader from 'components/layout/HomeHeader/HomeHeader'
import About from 'components/layout/About'
import LatestRealisations from 'components/layout/LatestRealisations'
import Benefits from 'components/layout/Benefits'
import Testimonials from 'components/layout/Testimonials'
import CarForm from 'components/layout/Forms/CarForm'
import Footer from 'components/layout/Footer'

import type { StepSingle } from 'components/layout/About/ServiceSteps'
import type { RealisationSingle } from 'components/layout/LatestRealisations/Card'
import type { Benefit } from 'components/layout/Benefits'
import type { Testimonial } from 'components/layout/Testimonials'
import Container from 'components/shared/container'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  const SERVICE_STEPS: StepSingle[] = [
    {
      description:
        'Kontakt telefoniczny, lub mailowy w celu omówienia możliwości dotyczących sprzedaży twojego pojazdu.',
    },
    {
      description:
        'Oględziny pojazdu oraz wykonanie sesji fotograficznej, na podstawie której powstanie ogłoszenie.',
    },
    {
      description:
        'Rozmowy / spotkania z klientami, prezentacja twojego pojazdu oraz finalizacja transakcji.',
    },
    {
      description: 'Rozliczenie z Tobą według wcześniej ustalonych warunków.',
    },
  ]

  const BENEFITS: Benefit[] = [
    {
      title: 'Pasja',
      desc: 'Motoryzacja od lat stanowi naszą pasję, przez co wkładamy całe serce w przygotowanie pojazdu oraz dopięcie transakcji. Z tego powodu posiadamy także dobrą znajomość rynku oraz trendów w motoryzacji.',
    },

    {
      title: 'Kompleks samochodowy',
      desc: 'Mamy do dyspozycji warsztat samochodowy ze stacją diagnostyczną, oraz pomoc drogową.',
    },
  ]

  const REALISATIONS: RealisationSingle[] = [
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
        alt: 'Audi A5',
      },
      title: 'Audi A5',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
  ]

  const TESTIMONIALS: Testimonial[] = [
    {
      img: {
        src: data?.scirocco?.childImageSharp?.gatsbyImageData!,
        alt: 'VW Scirocco',
      },
      carName: 'VW Scirocco',
      carYear: '1995',
      clientName: 'Jakub K.',
      desc: 'Jestem bardzo zadowolony z usług tej firmy. Wszystko przebiegło sprawnie i profesjonalnie, a cena, którą otrzymałem za mój samochód, była bardzo dobra.',
    },
    {
      img: {
        src: data?.audiA5x2?.childImageSharp?.gatsbyImageData!,
        alt: 'Audi A5',
      },
      carName: 'Audi A5',
      carYear: '1995',
      clientName: 'Mariusz B.',
      desc: 'Firma załatwiła wszystkie formalności, polecam każdemu, kto chce bezpiecznie sprzedać swój samochód.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'Polonez Caro',
      },
      carName: 'Polonez Caro',
      carYear: '1995',
      clientName: 'Rafał W.',
      desc: 'Firma sprzedamtwojsamochod.pl to rewelacyjne rozwiązanie dla osób, które chcą bezpiecznie i wygodnie sprzedać swój samochód.',
    },
  ]

  const SLIDES = [
    {
      title: 'Chcesz sprzedać <br/> samochód?',
      // subtitle: 'Pomożemy sprzedać Ci twój samochód',
      subtitle: 'Zleć to profesjonalistom i zaoszczędź swój czas!',
      src: data?.car6?.childImageSharp?.gatsbyImageData!,
      alt: 'Orange sports car',
    },
    {
      title: 'Kupimy go od Ciebie <br/> za gotówkę!',
      // subtitle: '',
      // subtitle: 'Ze stacją diagnostyczną i pomocą drogową',
      src: data?.purchaseHERO?.childImageSharp?.gatsbyImageData!,
      alt: 'Handshake',
    },
    // {
    //   title: 'Sprzedaj <span>swój</span> <br/> motocykl',
    //   subtitle: 'Pomożemy sprzedać Ci twój mototcykl',
    //   src: data?.motorYamahaHERO?.childImageSharp?.gatsbyImageData!,
    //   alt: 'motobike',
    // },

    {
      title: '<span>Posiadamy</span> kompleks <br/> samochodowy <span>',
      subtitle: 'Ze stacją diagnostyczną i pomocą drogową',
      src: data?.p10?.childImageSharp?.gatsbyImageData!,
      alt: 'Orange sports car',
    },
  ]

  return (
    <Layout>
      <SEO
        title={`Strona główna`}
        description={''}
        // ogTitle={opengraphTitle}
        // ogDescription={opengraphDescription}
        // ogImage={opengraphImage?.sourceUrl}
        // twitterTitle={twitterTitle}
        // twitterDescription={twitterDescription}
        // twitterImage={twitterImage?.sourceUrl}
      />
      <Navigation />
      <ModalForm />
      <main>
        <HomeHeader slides={SLIDES} />
        <About
          heading="Pomoc w sprzedaży pojazdu"
          description="Chcesz sprzedać swój pojazd, ale nie wiesz jak się za to zabrać?
          Nie masz czasu na spotkania z klientami? Masz nietypowy samochód? Z nami sprzedasz go szybciej niż myślisz! Doświadczenie w branży pozwala nam na nawet 4 razy szybszą sprzedaż.
          Dzięki nam nie musisz poświęcać czasu na żmudny proces sprzedaży, a dzięki dobrze wynegocjowanej cenie sprzedaży zwracają Ci się koszty całej usługi! Posiadamy stację diagnostyczną, warsztat samochodowy oraz ekipę mechaników do dyspozycji."
          steps={SERVICE_STEPS}
        />
        <LatestRealisations
          heading="Ostatnie realizacje"
          description="Ostatnio sprzedane przez nas pojazdy"
          realisations={REALISATIONS}
        />
        <Benefits
          img={{
            src: data?.warsztat1?.childImageSharp?.gatsbyImageData!,
            alt: 'warsztat',
          }}
          img2={{
            src: data?.warsztat1?.childImageSharp?.gatsbyImageData!,
            alt: 'warsztat',
          }}
          img3={{
            src: data?.warsztat1?.childImageSharp?.gatsbyImageData!,
            alt: 'warsztat',
          }}
          heading="O nas"
          description=""
          benefits={BENEFITS}
        />
        <Testimonials
          heading="Opinie klientów"
          description="Opinie naszych zadowolonych klientów, którzy skorzystali z naszych usług"
          testimonials={TESTIMONIALS}
        />
        <Container>
          <CarForm heading="Zapytaj o sprzedaż" centerHeading formBottom />
        </Container>
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    motorYamahaHERO: file(name: { eq: "motor-yamaha-3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    purchaseHERO: file(name: { eq: "agreement" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p1: file(name: { eq: "p1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p2: file(name: { eq: "p2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p3: file(name: { eq: "p3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p4: file(name: { eq: "p4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p5: file(name: { eq: "p5" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p6: file(name: { eq: "p6" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p7: file(name: { eq: "p7" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p8: file(name: { eq: "p8" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p9: file(name: { eq: "p9" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p10: file(name: { eq: "p10" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p11: file(name: { eq: "p11" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p12: file(name: { eq: "p12" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    p13: file(name: { eq: "p13" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car14: file(name: { eq: "car14" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }

    heroMC: file(name: { eq: "mc-cla-45-amg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    heroMCmobile: file(name: { eq: "mc-cla-45-cropped-mobile" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car1: file(name: { eq: "car1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car2: file(name: { eq: "car2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car3: file(name: { eq: "car3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car4: file(name: { eq: "car4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car5: file(name: { eq: "car5" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car6: file(name: { eq: "car6" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car6cropped: file(name: { eq: "car6-cropped" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1000
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car7: file(name: { eq: "car7" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car8: file(name: { eq: "car8" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car9: file(name: { eq: "car9" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car10: file(name: { eq: "car10" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car11: file(name: { eq: "car11" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car12: file(name: { eq: "car12" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car13: file(name: { eq: "car13" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car14: file(name: { eq: "car14" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car15: file(name: { eq: "car15" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    car16: file(name: { eq: "car16" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    warsztat1: file(name: { eq: "warsztat-1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    warsztat2: file(name: { eq: "warsztat-2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    scirocco: file(name: { eq: "vw-scirocco" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    polonez: file(name: { eq: "polonez" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    audiA5x2: file(name: { eq: "audi-a5" }) {
      childImageSharp {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }

    audiA5: file(name: { eq: "audi-a5" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    jaguarXE: file(name: { eq: "jaguar-xe" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    wolga: file(name: { eq: "wolga" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    bmwX4: file(name: { eq: "bmw-x4" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    mcAMG: file(name: { eq: "mc-cla-45-amg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorCross: file(name: { eq: "motor-cross" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorYamaha: file(name: { eq: "motor-yamaha" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    vwScirocco: file(name: { eq: "vw-scirocco" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`
