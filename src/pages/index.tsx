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

  console.log(data)

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
      desc: 'Motoryzacja od lat stanowi moją pasję, przez co wkładam całe serce w prygotowanie pojazdu oraz dopięcie transakcji. Z tego powodu posiadam także dobrą znajomość rynku oraz trendów w motoryzacji.',
    },
    {
      title: 'Doświadczenie',
      desc: 'Przez lata prywatnej jak i zawodowej działalności przeprowadziałem wiele procesów sprzedażowych i pracowałem z różnymi typami pojazdów. W tym czasie uzyskałem sieć parterów bizesowych, która ciągle rośnie.',
    },
    {
      title: 'Warsztat',
      desc: 'Mam do dyspozycji warsztat samochodowy ze stacją diagnostyczną, oraz uprawnienia diagnosty.',
    },
  ]

  const REALISATIONS: RealisationSingle[] = [
    {
      img: {
        src: data?.mcAMG?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Mercedes CLA 45 AMG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.bmwX4?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'BMW X4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.vwScirocco?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
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
        src: data?.motorCross?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'PITBIKE 190cc',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorYamaha?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Yamaha YZF-R125',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
  ]

  const TESTIMONIALS: Testimonial[] = [
    {
      img: {
        src: data?.scirocco?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'VW Scirocco',
      carYear: '1995',
      clientName: 'Jakub K.',
      desc: 'Jestem bardzo zadowolony z usług tej firmy. Wszystko przebiegło sprawnie i profesjonalnie, a cena, którą otrzymałem za mój samochód, była bardzo dobra.',
    },
    {
      img: {
        src: data?.audiA5x2?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'Audi A5',
      carYear: '1995',
      clientName: 'Mariusz B.',
      desc: 'Firma załatwiła wszystkie formalności, polecam każdemu, kto chce bezpiecznie sprzedać swój samochód.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'Polonez Caro',
      carYear: '1995',
      clientName: 'Rafał W.',
      desc: 'Firma sprzedamtwojsamochod.pl to rewelacyjne rozwiązanie dla osób, które chcą bezpiecznie i wygodnie sprzedać swój samochód.',
    },
  ]

  const SLIDES = [
    {
      title: 'Sprzedaj <span>swój</span> <br/> samochód',
      subtitle: 'Pomożemy sprzedać Ci twój samochód',
      src: data?.heroMC?.childImageSharp?.gatsbyImageData!,
      alt: 'car',
    },
    {
      title: 'Sprzedaj <span>swój</span> <br/> motocykl',
      subtitle: 'Pomożemy sprzedać Ci twój mototcykl',
      src: data?.motorYamahaHERO?.childImageSharp?.gatsbyImageData!,
      alt: 'motobike',
    },
    {
      title: 'Kupimy <span>go <br/> od </span> Ciebie',
      subtitle: '',
      src: data?.purchaseHERO?.childImageSharp?.gatsbyImageData!,
      alt: 'car-on-platform',
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
        {/* <Hero
          imgCar={{
            src: data?.heroMC?.childImageSharp?.gatsbyImageData!,
            alt: 'hero1',
          }}
          imgMotor={{
            src: data?.motorYamahaHERO?.childImageSharp?.gatsbyImageData!,
            alt: 'hero1',
          }}
          imgPurchase={{
            src: data?.purchaseHERO?.childImageSharp?.gatsbyImageData!,
            alt: 'hero1',
          }}
        /> */}
        <HomeHeader slides={SLIDES} />
        <About
          heading="Pomoc w sprzedaży pojazdu"
          description="Chcesz sprzedać swój pojazd, ale nie wiesz jak się za to zabrać?
          Nie masz czasu na spotkania z klientami? Masz nietypowy samochód? Z nami sprzedaż go szybciej niż myślisz! Doświadczenie w branży pozwala nam na nawet 4 razy szybszą sprzedaż samochodu niż przeciętnemu użytkownikowi.
          Dzięki nam nie musisz poświęcać czasu na żmudny proces sprzedaży, a dzięki dobrze wynegocjowanej cenie sprzedaży zwracają Ci się koszty całej usługi! Posiadam uprawnienia diagnosty, warsztat samochodowy oraz ekipę mechaników do dyspozycji."
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
          heading="Dlaczego My"
          description=""
          benefits={BENEFITS}
        />
        <Testimonials
          heading="Opinie klientów"
          description="Opinie naszych zadowolonych klientów, którzy skorzystali z naszych usług"
          testimonials={TESTIMONIALS}
        />
        {/* <ContactUsCTA /> */}
        <Container>
          <CarForm heading="Zapytaj o sprzedaż" centerHeading />
        </Container>
        {/* <CarForm formTitle="Zapytaj o sprzedaż" /> */}
      </main>

      <Footer />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    hero1: file(name: { eq: "hero-1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    hero2: file(name: { eq: "hero-2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }

    hero3: file(name: { eq: "hero-3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    motorYamahaHERO: file(name: { eq: "motor-yamaha-3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    purchaseHERO: file(name: { eq: "purchase" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    heroBMW: file(name: { eq: "bmw-x4" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
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
