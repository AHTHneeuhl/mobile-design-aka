type TProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<TProps> = ({ children }) => {
  return <main className="min-h-screen">{children}</main>;
};

export default AppLayout;
