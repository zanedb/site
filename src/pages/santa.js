import React, { Fragment } from 'react'
import styled from 'styled-components'
import {
  Box,
  Container,
  Heading,
  LargeButton,
  Text,
  theme
} from '@hackclub/design-system'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import IconButton from 'components/IconButton'
import Snow from 'components/Snow'
import { Headline, Lead } from 'components/Content'

const Hero = styled(Box.withComponent('article'))`
  background: linear-gradient(
    to bottom right,
    ${theme.colors.blue[5]},
    ${theme.colors.blue[6]}
  );
`

const Megaline = styled(Heading.h1).attrs({
  color: 'white',
  fontSize: [6, null, 7, 8],
  pb: 2
})`
  line-height: 1.125;
  max-width: 20rem;
  @supports (-webkit-background-clip: text) {
    background: linear-gradient(
      to bottom right,
      ${theme.colors.gray[0]},
      ${theme.colors.gray[3]}
    );
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${theme.mediaQueries.md} {
    max-width: none;
  }
`

const CTA = styled(IconButton).attrs({
  is: LargeButton,
  inverted: true,
  color: 'white',
  glyph: 'slack'
})``

const title = 'Hack Club Secret Santa – Holiday 2018'
const desc = 'Find your holiday zen this year with Hack Club’s Secret Santa.'
const img = 'https://hackclub.com/cards/santa.png'

export default () => (
  <Fragment>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: desc },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:image', content: img },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: img },
        { property: 'og:url', content: 'https://hackclub.com/santa' }
      ]}
    />
    <Snow />
    <Nav />
    <Hero py={[4, 5]}>
      <Container px={3} py={[6, 7, 8]}>
        <Text color="rgba(255, 255, 255, 0.875)" fontSize={[3, 4]} bold caps>
          2018 holidays
        </Text>
        <Megaline>
          Find your holiday zen with Hack&nbsp;Club Secret&nbsp;Santa.
        </Megaline>
        <Lead fontSize={[3, null, 4]} color="snow" maxWidth={48} my={3} mx={0}>
          Signup is now closed. Check your email for the next steps! Santa’s
          list will be finalized by December 12. You can also join #secret-santa
          on Slack to participate in the discussion.
        </Lead>
        <IconButton
          is={LargeButton.withComponent(Link)}
          to="/slack_invite"
          glyph="slack"
          mt={3}
        >
          Join Slack
        </IconButton>
      </Container>
    </Hero>
    <Footer />
  </Fragment>
)
