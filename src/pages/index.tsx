import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { NavigationContext } from 'contexts/NavigationContext'

import { seoProps } from 'constants/seoProps'

import Layout from 'components/layout'
import SEO from 'components/shared/SEO'
import Navigation from 'components/layout/Navigation'
import ModalForm from 'components/layout/ModalForm'

import HomeHeader from 'components/layout/HomeHeader/HomeHeader'
import Steps from 'components/layout/Steps'
import LatestRealisations from 'components/layout/LatestRealisations'
import About from 'components/layout/About'
import Testimonials from 'components/layout/Testimonials'
import CarForm from 'components/layout/Forms/CarForm'
import Footer from 'components/layout/Footer'

import type { StepSingle } from 'components/layout/Steps/ServiceSteps'
import type { RealisationSingle } from 'components/layout/LatestRealisations/Card'
import type { AboutSingle } from 'components/layout/About'
import type { Testimonial } from 'components/layout/Testimonials'
import Container from 'components/shared/container'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  const { isModalFormVisible } = React.useContext(NavigationContext)

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
        'Rozmowy oraz spotkania z klientami, prezentacja twojego pojazdu oraz finalizacja transakcji.',
    },
    {
      description: 'Rozliczenie z Tobą według wcześniej ustalonych warunków.',
    },
  ]

  const ABOUTS: AboutSingle[] = [
    {
      title: 'Kompleks <br/> samochodowy',
      description:
        'Serwis znajduje się 15km od Rzeszowa bezpośrednio przy bardzo ruchliwej drodze DK94 w stronę Krakowa. Na terenie serwisu posiadamy podstawową stację kontroli pojazdów oraz sklep z częściami. Do dyspozycji mamy 5 stanowisk roboczych oraz duży plac parkingowy, na którym możemy przechowywać pojazdy. Dodatkowo mamy duża liczbę klientów zainteresowanych zakupem samochodów prezentowanych na placu, co zwiększa szansę na sprzedaż.',
      img: {
        src: data?.p10?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
    },
    {
      title: 'Stacja <br/> diagnostyczna',
      description:
        'Każdy samochód przed sprzedażą jest sprawdzany na stacji diagnostycznej co gwarantuje kupującemu, że pojazd jest w pełni sprawny.',
      img: {
        src: data?.about2?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
    },
    {
      title: 'Pomoc <br/> drogowa',
      description:
        'Jeśli Twój pojazd od dawna nie był użytkowany, a chcesz doprowadzić samochód do dobrego stanu technicznego przed sprzedażą, możemy zająć się tym za Ciebie. Posiadamy własną pomoc drogową, która może odebrać Twój pojazd z dowolnego miejsca i dostarczyć go do naszego serwisu.',
      img: {
        src: data?.about3?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
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
      desc: 'Firma załatwiła wszystkie formalności, polecam każdemu, kto chce szybko sprzedać swój samochód.',
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
      title: 'Kupimy go <br/> od Ciebie <br/> za gotówkę!',
      // subtitle: '',
      // subtitle: 'Ze stacją diagnostyczną i pomocą drogową',
      src: data?.purchaseHERO?.childImageSharp?.gatsbyImageData!,
      alt: 'Handshake',
    },
    {
      title: 'Posiadamy kompleks <br/> samochodowy ',
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
      {isModalFormVisible && <ModalForm />}
      <main>
        <HomeHeader slides={SLIDES} />
        <Steps
          heading="Pomoc w sprzedaży samochodu"
          description="Chcesz sprzedać swój samochód, ale nie wiesz jak się za to zabrać? <br/>
          Dzięki firmie <span>Sprzedamtwojsamochod.pl</span> możesz to zrobić szybko i skutecznie.
          Nie musisz poświęcać czasu na żmudny proces sprzedaży, a dzięki dobrze wynegocjowanej cenie zwracają Ci się koszty całej usługi! Posiadamy kompleks samochodowy ze stacją diagnostyczną oraz pomocą drogową. Jeżeli Twój pojazd wymaga naprawy, również się tym zajmiemy i przygotujemy do sprzedaży."
          steps={SERVICE_STEPS}
        />
        <LatestRealisations
          heading="Ostatnie realizacje"
          description="Ostatnio sprzedane przez nas pojazdy"
          realisations={REALISATIONS}
        />
        <About heading="O nas" abouts={ABOUTS} />
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
    about1: file(name: { eq: "about-1" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    about2: file(name: { eq: "about-2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    about3: file(name: { eq: "about3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1024
          placeholder: BLURRED
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
