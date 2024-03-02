import NavTabsItem from "./NavTabsItem";

const Navtabs = () => {
  return (
    <div className="navtabs-wrapper">
      <NavTabsItem value="Launches" />
      <NavTabsItem value="Rockets" />
      <NavTabsItem value="Ships" />
    </div>
  );
};

export default Navtabs;
