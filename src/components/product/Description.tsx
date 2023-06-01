import { Container, Heading, Typography } from "components/common";

type TProps = {
  description: string;
};

const Description: React.FC<TProps> = ({ description }) => {
  return (
    <Container>
      <Heading size="sm">Description</Heading>
      <Typography className="mt-10">{description}</Typography>
    </Container>
  );
};

export default Description;
