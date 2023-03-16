import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
// import Hero from 'components/layout/Hero'
// import OfferCards from 'components/layout/OfferCards'
// import ContactUsCTA from 'components/layout/ContactUsCTA'
import Footer from 'components/layout/Footer'

// import type { HeroSlide } from 'components/layout/Hero/HeroSlider'
// import type { TileSingle } from 'components/layout/OfferCards'

import SEO from 'components/shared/SEO'

const KontaktPage: React.FC<PageProps<Queries.KontaktPageQuery>> = ({
  data,
}) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  console.log(data)

  return (
    <Layout>
      <SEO
        title={'Daniel Synoś Cars | Kontakt'}
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
        <h1>KONTAKT</h1>
        <h1>KONTAKT</h1>
        <h1>KONTAKT</h1>

        {/* <Hero slides={HERO_SLIDES} />
        <OfferCards tiles={OFFER_CARDS} />
        <ContactUsCTA /> */}
      </main>
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

export default KontaktPage

export const query = graphql`
  query KontaktPage {
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
