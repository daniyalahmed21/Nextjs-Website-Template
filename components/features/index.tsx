import Container from "../container";
import Heading from "../heading";
import SubHeading from "../subHeading";
import FeatureSection from "./FeatureSection";

const Features = () => {
  return (
    <Container className="py-20 md:py-32">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pb-12">
        <div className="max-w-xl">
          <Heading className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
            At a fraction of your <br />
            <span className="text-primary">current costs</span>
          </Heading>
        </div>
        <SubHeading
          as="p"
          className=" text-lg text-muted-foreground max-w-md text-left"
        >
          Get an unrivaled price-to-performance ratio. Forget sampling and
          ingest all your data without the chaos.
        </SubHeading>
      </div>
      <FeatureSection/>
    </Container>
  );
};

export default Features;
