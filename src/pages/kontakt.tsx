import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import styled from 'styled-components'

import SEO from 'components/shared/SEO'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Breadcrumbs from 'components/shared/Breadcrumbs'
import Header from 'components/layout/Header'
import AreaOfWork from 'components/layout/AreaOfWork'
import CarForm from 'components/layout/Forms/CarForm'
import Footer from 'components/layout/Footer'
import Container from 'components/shared/container'

const SectionsWrapper = styled(Container)`
  ${({ theme }) => theme.media.lg.min} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

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
      <Header
        heading="Kontakt"
        description="Skontaktuj się z nami i dowiedz się więcej!"
        img={{
          src: data?.hero?.childImageSharp?.gatsbyImageData!,
          alt: 'header',
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
          <AreaOfWork
            heading="Region działalności"
            description="Obecnie region naszej działalności obejmuje województwo podkarpackie. Pozostajemy jednak otwarci na zapytania spoza wskazanego regionu. <br/> Zapraszamy do kontaktu, aby porozmawiać o możliwościach współpracy."
          />
          <CarForm />
        </SectionsWrapper>
      </main>

      <Footer />
    </Layout>
  )
}

export default KontaktPage

export const query = graphql`
  query KontaktPage {
    hero: file(name: { eq: "wolga" }) {
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
