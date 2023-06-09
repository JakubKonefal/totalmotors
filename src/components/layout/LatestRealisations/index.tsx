import React from 'react'
import styled from 'styled-components'

import { motion } from 'framer-motion'
import { variants, transitions } from 'constants/animations'

import Card, {
  RealisationSingle,
} from 'components/layout/LatestRealisations/Card'
import Container from 'components/shared/container'
import { Heading, Text } from 'components/shared/typography'

import useBreakpoint from 'hooks/useBreakpoint'

import useAnimateOnScroll from 'hooks/useAnimateOnScroll'

type Props = {
  heading: string
  description: string
  realisations: RealisationSingle[]
}

const Section = styled.section`
  position: relative;
  margin-bottom: calc(${({ theme }) => theme.container.marginSM} * 2);

  ${Container} {
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: -3.25rem;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - ${({ theme }) => theme.container.marginSM});
      height: 2px;
      background-color: #00000021;
    }
  }

  ${({ theme }) => theme.media.lg.min} {
    /* margin-bottom: calc(${({ theme }) => theme.container.marginLG} * 2); */
  }
`

const TextContent = styled.div`
  margin: 0 auto;
`

const Cards = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto 0;

  ${({ theme }) => theme.media.md.min} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  ${({ theme }) => theme.media.lg.min} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.media.xl.min} {
    gap: 30px;
  }
`

const LatestRealisations: React.FC<Props> = ({
  heading,
  description,
  realisations,
}) => {
  const { lg } = useBreakpoint()

  const animateAllSteps = useAnimateOnScroll()

  return (
    <Section>
      <Container>
        <TextContent>
          <Heading
            as="h2"
            size={lg ? 36 : 30}
            margin="15px"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <Text
            size={lg ? 17 : 14}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </TextContent>
        <Cards
          ref={animateAllSteps.ref}
          variants={variants.fadeInLeftToRight}
          initial="hidden"
          animate={animateAllSteps.control}
          transition={transitions.quicker}
        >
          {realisations.map(({ img, title, desc }, index) => (
            <Card
              key={`realisation-card-${index}`}
              img={img}
              title={title}
              desc={desc}
              link
              index={index}
            />
          ))}
        </Cards>
      </Container>
    </Section>
  )
}

export default LatestRealisations
