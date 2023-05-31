type TProps = {
  image: string;
};
const Avatar: React.FC<TProps> = ({ image }) => {
  return <img src={image} alt="avatar" />;
};

export default Avatar;
