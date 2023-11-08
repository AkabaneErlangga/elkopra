
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-28 bg-transparent">
      <img src='/logo.png' alt="elKopra Logo" />
      <div className="hidden lg:flex items-center gap-4">
        <a href="#website">About Us</a>
        <a href="#mobile-apps">Products</a>
        <a href="#portfolio">Projects</a>
        <a href="#portfolio">Career</a>
        <button className="outline outline-1 rounded-full px-4 py-1">Contact Us</button>
      </div>
      {/* <MenuIcon className="lg:hidden" /> */}
    </div>
  );
};

export default Navbar;
