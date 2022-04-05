import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'

const Hero = () => {
  return (
    <Container className="container px-3 mx-auto mb-12 md:px-0 md:mb-24">
      <Heading h={2} className="tracking-wider leading-relaxed">
        Hi, I am a front-end engineer.
      </Heading>
    </Container>
  )
}

export default Hero
