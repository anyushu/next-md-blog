import Container from '@/components/atoms/Container'
import Heading from '@/components/atoms/Heading'

const Hero = () => {
  return (
    <Container className="container mx-auto mb-12 px-3 md:mb-24 md:px-0">
      <Heading h={2} className="leading-relaxed tracking-wider">
        Hi, I am a front-end engineer.
      </Heading>
    </Container>
  )
}

export default Hero
