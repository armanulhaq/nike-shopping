const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img className="main-logo" src="/images/nike.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navigation;
