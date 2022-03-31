const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Baldwin Ngo 🥰</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{
          color: "white",
          backgroundColor: "#ee205e",
          borderRadius: "8px"
        }}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;