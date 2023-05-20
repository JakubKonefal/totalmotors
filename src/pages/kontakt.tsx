import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { variants } from 'constants/animations'

import SEO from 'components/shared/SEO'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Breadcrumbs from 'components/shared/Breadcrumbs'
import Header from 'components/layout/Header'
import AreaOfWork from 'components/layout/AreaOfWork'
import ContactSection from 'components/layout/Sections/ContactSection'
import Map from 'components/layout/Map/Map'
import Footer from 'components/layout/Footer'
import Container from 'components/shared/container'

import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

const SectionsWrapper = styled(Container)`
  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 50px;
  }

  ${({ theme }) => theme.media.xl.min} {
    column-gap: 100px;
  }
`

const MotionDivLeft = styled(motion.div)``

const MotionDivRight = styled(motion.div)``

const KontaktPage: React.FC<PageProps<Queries.KontaktPageQuery>> = ({
  data,
}) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  const animateLeft = useAnimateOnScroll()
  const animateRight = useAnimateOnScroll()

  return (
    <Layout>
      <SEO
        title={`Kontakt | Sprzedamtwójsamochód.pl`}
        description={
          'Potrzebujesz pomocy w sprzedaży samochodu? Jesteśmy firmą działającą głównie w województwie podkarpackim, ale jesteśmy otwarci na zapytania spoza tego regionu. Skontaktuj się z nami, aby porozmawiać o możliwościach współpracy.'
        }
        ogTitle="Kontakt | Sprzedamtwojsamochod.pl"
        ogDescription="Potrzebujesz naszej pomocy w sprzedaży samochodu? Skontaktuj się z nami, aby omówić możliwości sprzedaży Twojego pojazdu. Jesteśmy dostępni telefonicznie i mailowo. Sprzedamtwojsamochod.pl - profesjonalna pomoc w sprzedaży samochodów."
        // ogImage={opengraphImage?.sourceUrl}
        // twitterTitle={twitterTitle}
        // twitterDescription={twitterDescription}
        // twitterImage={twitterImage?.sourceUrl}
      />
      <Navigation />
      <Header
        heading="Kontakt"
        description="Skontaktuj się z nami i dowiedz się więcej!"
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
            label: 'Kontakt',
          },
        ]}
      />
      <main>
        <SectionsWrapper>
          <MotionDivLeft
            ref={animateLeft.ref}
            variants={variants.fadeInLeftToRight}
            initial="hidden"
            animate={animateLeft.control}
          >
            <AreaOfWork
              heading="Region działalności"
              description="Obecnie region naszej działalności obejmuje województwo podkarpackie. Pozostajemy jednak otwarci na zapytania spoza wskazanego regionu. <br/> Zapraszamy do kontaktu, aby porozmawiać o możliwościach współpracy."
            />
          </MotionDivLeft>
          <MotionDivRight
            ref={animateRight.ref}
            variants={variants.fadeInRightToLeft}
            initial="hidden"
            animate={animateRight.control}
          >
            <ContactSection />
          </MotionDivRight>
        </SectionsWrapper>
        <Map />
      </main>

      <Footer />
    </Layout>
  )
}

export default KontaktPage

export const query = graphql`
  query KontaktPage {
    hero: file(name: { eq: "hero-5" }) {
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
