import { Container, Heading } from "components/common";

const Sizes: React.FC = () => {
  return (
    <Container>
      <Heading size="sm">Size</Heading>
      <div className="flex flex-row items-center gap-4"></div>
    </Container>
  );
};

export default Sizes;
