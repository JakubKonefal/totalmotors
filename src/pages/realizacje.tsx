import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import SEO from 'components/shared/SEO'

import Layout from 'components/layout'
import Navigation from 'components/layout/Navigation'
import Breadcrumbs from 'components/shared/Breadcrumbs'
import Header from 'components/layout/Header'
import AllRealisations from 'components/layout/AllRealisations'
import Footer from 'components/layout/Footer'

import type { RealisationSingle } from 'components/layout/LatestRealisations/Card'

const RealizacjePage: React.FC<PageProps<Queries.RealizacjePageQuery>> = ({
  data,
}) => {
  // const HOMEPAGE = data?.wpPage?.Homepage
  // const PAGE_SEO = data?.wpPage?.seo

  console.log(data)

  const REALISATIONS: RealisationSingle[] = [
    {
      img: {
        src: data?.audiA4?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Audi A4',
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
        src: data?.bmwX4?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'BMW X4',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.honda?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Honda',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.wolga?.childImageSharp?.gatsbyImageData!,
        alt: 'carx',
      },
      title: 'Wołga',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.jaguarXE?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Jaguar XE',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.kiaSorento?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Kia Sorento',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.mcAMG?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Mercedes AMG',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorCagiva?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Cagiva',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorCross?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Cross',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorHonda?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Honda',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorKawasaki?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Kawasaki',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorKeeway?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Keeway',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorYamaha2?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Yamaha',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.motorYamaha?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Yamaha',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.polonez?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Polonez',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.skuterPeugeot?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Peugeot',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quod architecto quia molestias dolorem fugit tempore possimus qui quibusdam nobis.',
    },
    {
      img: {
        src: data?.szGrandVitara?.childImageSharp?.gatsbyImageData!,
        alt: 'car3',
      },
      title: 'Suzuki',
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
  ]

  return (
    <Layout>
      <SEO
        title={'Daniel Synoś Cars | Realizacje'}
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
        heading="Realizacje"
        description="Nasze ostatnie realizacje sprzedażowe"
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
            label: 'Realizacje',
          },
        ]}
      />
      <main>
        <AllRealisations
          heading="Sprzedane pojazdy"
          description="Poniżej przedstawiamy państwu nasze dotychczasowe realizacje sprzedażowe."
          realisations={REALISATIONS}
        />
      </main>

      <Footer />
    </Layout>
  )
}

export default RealizacjePage

export const query = graphql`
  query RealizacjePage {
    hero: file(name: { eq: "hero-new" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]
        )
      }
    }
    audiA4: file(name: { eq: "audi-a4" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
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
    honda: file(name: { eq: "honda" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    jaguarXE: file(name: { eq: "jaguar-xe" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    kiaSorento: file(name: { eq: "kia-sorento" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    mcAMG: file(name: { eq: "mc-cla-45-amg" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorCagiva: file(name: { eq: "motor-cagiva" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorCross: file(name: { eq: "motor-cross" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorHonda: file(name: { eq: "motor-honda" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorKawasaki: file(name: { eq: "motor-kawasaki" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorKeeway: file(name: { eq: "motor-keeway" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorYamaha2: file(name: { eq: "motor-yamaha-2" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    motorYamaha: file(name: { eq: "motor-yamaha" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    polonez: file(name: { eq: "polonez" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    skuterPeugeot: file(name: { eq: "skuter-peugeot" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    szGrandVitara: file(name: { eq: "sz-grand-vitara" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    vwScirocco: file(name: { eq: "vw-scirocco" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
    wolga: file(name: { eq: "wolga" }) {
      childImageSharp {
        gatsbyImageData(width: 500, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
    }
  }
`
