import Container from "./container";
import Heading from "./heading";

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1" className="font-semibold">Radically better observability stack</Heading>
      </Container>
    </div>
  );
};

export default Hero;
