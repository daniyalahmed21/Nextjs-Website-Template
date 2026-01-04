"use client";
import Container from "./container";
import Heading from "./heading";
import SubHeading from "./subHeading";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import LandingImages from "./landingImages";

const Hero = () => {
  return (
    <section className="pt-16 md:pt-24 lg:pt-32 w-full overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <Heading
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl"
          >
            Radically better <br className="hidden md:block" />
            <span className="text-primary">observability stack</span>
          </Heading>

          <SubHeading
            as="p"
            className="mt-6 text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Incident management meets observability. At a fraction of the cost
            of competitors. No hidden fees, just pure performance.
          </SubHeading>

          <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mt-10">
            <Input
              type="email"
              placeholder="your work e-mail"
              className="h-12 w-full bg-background/50 backdrop-blur-sm shadow-sm"
            />
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 font-semibold shrink-0"
            >
              Start for free
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground/80">
            No credit card required. 14-day free trial.
          </p>

          <div className="mt-16 sm:mt-24 w-full relative left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
            <LandingImages />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
