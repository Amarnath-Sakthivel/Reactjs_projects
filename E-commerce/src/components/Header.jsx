import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img
            className="py-5"
            src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600"
          ></img>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <figure className="text-end">
            <blockquote class="blockquote">
              <p>Welcome to E-commerce site</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Digital is really two things. It refers to a set of technologies,
              everything from artificial intelligence to the use of e-commerce.
              But digital is really about a different way of working, of making
              decisions, of partnering and reaching your clients, and so it's
              also about how you do things.
              <cite title="Source Title">Source Title</cite>
            </figcaption>
            <span class="badge rounded-pill bg-primary"><i class="fa fa-gift" aria-hidden="true"></i> Top-offers</span>
            <span class="badge rounded-pill bg-secondary"><i class="fa fa-money" aria-hidden="true"></i> Less-price</span>
            <span class="badge rounded-pill bg-success"><i class="fa fa-star" aria-hidden="true"></i> positive reviews</span>
            <span class="badge rounded-pill bg-danger"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Limited in stock</span>
            {/* <span class="badge rounded-pill bg-warning text-dark">Warning</span>
            <span class="badge rounded-pill bg-info text-dark">Info</span>
            <span class="badge rounded-pill bg-light text-dark">Light</span>
            <span class="badge rounded-pill bg-dark">Dark</span> */}
<br/><br/>
            <div>
                <a className="btn btn-outline-primary">View All Products</a>
            </div><br/>
            <div>
                <a className="btn btn-outline-primary">ContactUs</a>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Header;
