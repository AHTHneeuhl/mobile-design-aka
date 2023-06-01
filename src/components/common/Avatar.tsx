type TProps = {
  image: string;
};

// Reusable Avatar component
const Avatar: React.FC<TProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt="avatar"
      className="w-12 h-12 md:w-13 lg:w-14 xl:w-15 2xl:w-16 md:h-13 lg:h-14 xl:h-15 2xl:h-16 p-1 bg-slate-100 rounded-full cursor-pointer"
    />
  );
};

export default Avatar;
