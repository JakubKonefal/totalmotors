import React from 'react'
import styled from 'styled-components'

import { Heading, Text } from 'components/shared/typography'

import Icon from 'components/shared/icon'
import podkapracieMap from 'assets/icons/podkarpackie.svg'

import useBreakpoint from 'hooks/useBreakpoint'

type Props = {
  heading: string
  description: string
}

const Section = styled.section``

const MapWrapper = styled.div`
  /* width: 100%; */
  height: 300px;
  margin-top: 30px;

  .map-img-wrapper {
    /* width: 100%; */
    height: 100%;
    max-width: 100%;
    max-height: 100%;

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }

  ${({ theme }) => theme.media.md.min} {
    height: 400px;
  }
`

const AreaOfWork: React.FC<Props> = ({ heading, description }) => {
  const { lg } = useBreakpoint()

  return (
    <Section title={heading}>
      <Heading
        as="h2"
        size={lg ? 36 : 30}
        margin="10px"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <Text
        size={lg ? 17 : 14}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <MapWrapper>
        <Icon
          className="map-img-wrapper"
          src={podkapracieMap}
          alt="podkarpackie-voivodeship"
        />
      </MapWrapper>
    </Section>
  )
}

export default AreaOfWork
