import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Hero from 'components/layout/Hero'
import OfferCards from 'components/layout/OfferCards'
import ContactUsCTA from 'components/layout/ContactUsCTA'
import Footer from 'components/layout/Footer'

import type { HeroSlide } from 'components/layout/Hero/HeroSlider'
import type { TileSingle } from 'components/layout/OfferCards'

import SEO from 'components/shared/SEO'

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

  const OFFER_CARDS: TileSingle[] = [
    {
      title: 'Pomoc w sprzedaży auta',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/oferta$samochod1',
      img: {
        src: data?.hero3?.childImageSharp?.gatsbyImageData!,
        alt: 'car1',
      },
    },
    {
      title: 'Pomoc w sprzedaży motocyklu',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/oferta$samochod2',
      img: {
        src: data?.hero2?.childImageSharp?.gatsbyImageData!,
        alt: 'car1',
      },
    },
    {
      title: 'Profesjonalna sesja zdjęciowa',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      link: '/oferta$samochod3',
      img: {
        src: data?.hero3?.childImageSharp?.gatsbyImageData!,
        alt: 'car1',
      },
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
        <OfferCards tiles={OFFER_CARDS} />
        <ContactUsCTA />
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
  }
`
