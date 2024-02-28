const Content = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-text-container">
          <div className="main-text-heading">
            <div className="heading">YOUR FEET</div>
            <div className="heading">DESERVE</div>
            <div className="heading">THE BEST</div>
          </div>
          <div className="main-text-subheading">
            <p className="sub-heading">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO
            </p>
            <p className="sub-heading">
              HELP YOU WITH OUR SHOES.YOUR FEET DESERVE{' '}
            </p>
            <p className="sub-heading">
              THE BEST AND WE’RE HERE TO HELP YOU WITH OUR{' '}
            </p>
            <p className="sub-heading">SHOES.</p>
          </div>
          <div className="shop-container">
            <button className="shop-now">Shop Now</button>
            <button className="category">Category</button>
          </div>
          <div className="sub-sub-heading">Also available on</div>
          <div className="shopping-link-container">
            <a href="#">
              <img
                className="shopping-site-logo"
                src="/images/flipkart.png"
              ></img>
            </a>
            <a href="#">
              <img
                className="shopping-site-logo"
                src="/images/amazon.png"
              ></img>
            </a>
          </div>
        </div>
        <div className="main-image-container">
          <img className="shoe-img" src="/images/shoe.png" alt="shoe-image" />
        </div>
      </div>
    </main>
  );
};

export default Content;
