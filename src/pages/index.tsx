import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Hero from 'components/layout/Hero'
import ServiceSteps from 'components/layout/About/ServiceSteps'
import ContactUsCTA from 'components/layout/ContactUsCTA'
import Footer from 'components/layout/Footer'

import type { HeroSlide } from 'components/layout/Hero/HeroSlider'
import type { StepSingle } from 'components/layout/About/ServiceSteps'

import SEO from 'components/shared/SEO'
import About from 'components/layout/About'

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
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illo voluptatum deserunt sunt ad molestias ab voluptas velit iure aperiam.',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illo voluptatum deserunt sunt ad molestias ab voluptas velit iure aperiam.',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illo voluptatum deserunt sunt ad molestias ab voluptas velit iure aperiam.',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, illo voluptatum deserunt sunt ad molestias ab voluptas velit iure aperiam.',
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
          heading="Heading"
          description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, enim ipsa? Alias repellat voluptatem maxime autem dicta. Cupiditate reprehenderit accusamus exercitationem ipsam. Ut quia quisquam, veniam temporibus dolorum, alias magni nobis, fugiat eius in voluptatem."
          steps={SERVICE_STEPS}
        />
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
