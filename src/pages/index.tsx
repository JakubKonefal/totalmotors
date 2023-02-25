import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Hero from 'components/layout/Hero'
import Footer from 'components/layout/Footer'

import type { HeroSlide } from 'components/layout/Hero/HeroSlider'

// import SEO from 'components/shared/SEO'

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
      title: 'Samochód 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car2',
      },
      title: 'Samochód 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Samochód 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto nostrum! At optio, officiis perspiciatis aliquid vel cumque quas fuga est. Pariatur!',
    },
  ]

  return (
    <Layout>
      <Navigation />
      <Hero slides={HERO_SLIDES} />
      <main>Paweł Kulik LP</main>
      {/* <SEO
        title={PAGE_SEO?.title ?? ''}
        description={PAGE_SEO?.metaDesc ?? ''}
        ogTitle={PAGE_SEO?.opengraphTitle}
        ogDescription={PAGE_SEO?.opengraphDescription}
        ogImage={PAGE_SEO?.opengraphImage?.sourceUrl}
        twitterTitle={PAGE_SEO?.twitterTitle}
        twitterDescription={PAGE_SEO?.twitterDescription}
        twitterImage={PAGE_SEO?.twitterImage?.sourceUrl}
      /> */}
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
