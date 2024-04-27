import Header from "./header";
export type TProps = {
  setOpen: any;
};

const MainNav: React.FC<TProps> = ({ setOpen }) => {
  return (
    <header>
      <Header setOpen={setOpen} />
    </header>
  );
};

export default MainNav;
