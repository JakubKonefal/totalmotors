import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Hero from 'components/layout/Hero'
import About from 'components/layout/About'
import LatestRealisations from 'components/layout/LatestRealisations'
import CarForm from 'components/layout/Forms/CarForm'
import Benefits from 'components/layout/Benefits'
import Testimonials from 'components/layout/Testimonials'
import Footer from 'components/layout/Footer'

import SEO from 'components/shared/SEO'

import type { StepSingle } from 'components/layout/About/ServiceSteps'
import type { HeroSlide } from 'components/layout/Hero/HeroSlider'
import type { RealisationSingle } from 'components/layout/LatestRealisations'
import type { Benefit } from 'components/layout/Benefits'
import type { Testimonial } from 'components/layout/Testimonials'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  console.log(data)

  const HERO_SLIDES: HeroSlide[] = [
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car1',
      },
      title: 'Pomoc w sprzedaży auta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
    {
      img: {
        src: data?.hero2?.childImageSharp?.gatsbyImageData!,
        alt: 'car2',
      },
      title: 'Pomoc w sprzedaży motocyklu',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
    {
      img: {
        src: data?.hero3?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Profesjonalna sesja zdjęciowa',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
  ]

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
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Mercedes-Benz C 220',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Mercedes-Benz C 221',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Mercedes-Benz C 222',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
  ]

  const TESTIMONIALS: Testimonial[] = [
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'Polonez 1 ',
      carYear: '1995',
      clientName: 'Mariusz Bigos',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'Polonez 1 ',
      carYear: '1995',
      clientName: 'Mariusz Bigos',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'warsztat',
      },
      carName: 'Polonez 1 ',
      carYear: '1995',
      clientName: 'Mariusz Bigos',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
  ]

  return (
    <Layout>
      <SEO
        title={'Daniel Synoś Cars | Strona główna'}
        description={''}
        // ogTitle={opengraphTitle}
        // ogDescription={opengraphDescription}
        // ogImage={opengraphImage?.sourceUrl}
        // twitterTitle={twitterTitle}
        // twitterDescription={twitterDescription}
        // twitterImage={twitterImage?.sourceUrl}
      />
      <Navigation />
      <main>
        <Hero slides={HERO_SLIDES} />
        <About
          heading="Pomoc w sprzedaży pojazdu"
          description="Chcesz sprzedać swój pojazd, ale nie wiesz jak się za to zabrać?
          Nie masz czasu na spotkania z klientami? Masz nietypowy samochód? Z nami sprzedaż go szybciej niż myślisz! Doświadczenie w branży pozwala nam na nawet 4 razy szybszą sprzedaż samochodu niż przeciętnemu użytkownikowi.
          Dzięki nam nie musisz poświęcać czasu na żmudny proces sprzedaży, a dzięki dobrze wynegocjowanej cenie sprzedaży zwracają Ci się koszty całej usługi! Posiadam uprawnienia diagnosty, warsztat samochodowy oraz ekipę mechaników do dyspozycji."
          steps={SERVICE_STEPS}
        />
        <LatestRealisations
          heading="Ostatnie realizacje"
          description="Ostatnio sprzedane przeze mnie pojazdy"
          realisations={REALISATIONS}
        />
        <Benefits
          img={{
            src: data?.warsztat1?.childImageSharp?.gatsbyImageData!,
            alt: 'warsztat',
          }}
          heading="Dlaczego My"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem aliquid cum consequatur! Similique optio sequi quod voluptates quas temporibus dignissimos dolores minus, praesentium perspiciatis, eveniet molestiae quia exercitationem ducimus nostrum repellat, repellendus cum quae fuga deleniti accusamus adipisci? Quam eius doloremque saepe ullam dolor corrupti iste quis veritatis magni."
          benefits={BENEFITS}
        />
        <Testimonials
          heading="Opinie klientów"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem exercitationem aliquid cum consequatur! Similique optio sequi quod voluptates quas temporibus dignissimos dolores minus, praesentium perspiciatis, eveniet molestiae quia exercitationem ducimus nostrum repellat, repellendus cum quae fuga deleniti accusamus adipisci? Quam eius doloremque saepe ullam dolor corrupti iste quis veritatis magni"
          testimonials={TESTIMONIALS}
        />
        {/* <ContactUsCTA /> */}
        <CarForm />
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
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    hero2: file(name: { eq: "hero-2" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    hero3: file(name: { eq: "hero-3" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
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
    polonez: file(name: { eq: "polonez" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
