import React from 'react'
import styled, { css } from 'styled-components'

import { Text } from 'components/shared/typography'
import Container from 'components/shared/container'

type Crumb = {
  label: string
  link?: string
}

type Props = {
  crumbs: Crumb[]
}

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  margin: 20px auto;

  ${({ theme }) => theme.media.lg.min} {
    margin: 30px auto;
  }
`

const StyledText = styled(Text)<{ hoverable: boolean }>`
  position: relative;
  margin-right: 30px;

  :not(:first-child) {
    font-weight: 600;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: -15px;
      height: 70%;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.black};

      transform: translateY(-50%);
    }
  }

  ${({ hoverable }) =>
    hoverable &&
    css`
      &:hover {
        color: ${({ theme }) => theme.colors.tertiary};
      }
    `}
`

const Breadcrumbs: React.FC<Props> = ({ crumbs }) => {
  return (
    <StyledContainer>
      {crumbs.map(({ label, link }, index) => (
        <StyledText
          key={`crumb-${index}`}
          as={link ? 'a' : 'p'}
          href={link}
          size={14}
          themecolor="black"
          weight={400}
          hoverable={link}
        >
          {label}
        </StyledText>
      ))}
    </StyledContainer>
  )
}

export default Breadcrumbs
