import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Hero from 'components/layout/Hero'
import Footer from 'components/layout/Footer'
// import SEO from 'components/shared/SEO'

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  console.log(data)

  const HERO_SLIDES = [
    {
      img: {
        src: data?.hero1?.childImageSharp?.gatsbyImageData!,
        alt: 'car1',
      },
      title: 'Samochody elektryczne 1',
    },
    {
      img: {
        src: data?.hero2?.childImageSharp?.gatsbyImageData!,
        alt: 'car2',
      },
      title: 'Samochody elektryczne 2',
    },
    {
      img: {
        src: data?.hero3?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Samochody elektryczne 3',
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
