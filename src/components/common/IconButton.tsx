type TProps = {
  icon: string;
  content?: string;
  onAction?: () => void;
};

const IconButton: React.FC<TProps> = ({ icon, content, onAction }) => {
  return (
    <div className="rounded-full cursor-pointer bg-black border border-black">
      <img src={icon} alt="icon" className="w-10 h-10" />
    </div>
  );
};

export default IconButton;
