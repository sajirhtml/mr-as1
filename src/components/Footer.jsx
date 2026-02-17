import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-gray-800 text-base-content p-5 md:p-10">
        <nav>
          <h3 className="font-semibold text-2xl text-indigo-600">SwiftCart</h3>
          <p className="text-base-200 max-w-65">
            Your one-stop shop for all your fashion and lifestyle needs. Quality
            products, fast delivery, and excellent support.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-base-300">Services</h6>
          <a className="link link-hover text-base-200">Branding</a>
          <a className="link link-hover text-base-200">Design</a>
          <a className="link link-hover text-base-200">Marketing</a>
          <a className="link link-hover text-base-200">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-base-300">Company</h6>
          <a className="link link-hover text-base-200">About us</a>
          <a className="link link-hover text-base-200">Contact</a>
          <a className="link link-hover text-base-200">Jobs</a>
          <a className="link link-hover text-base-200">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-base-300">Legal</h6>
          <a className="link link-hover text-base-200">Terms of use</a>
          <a className="link link-hover text-base-200">Privacy policy</a>
          <a className="link link-hover text-base-200">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title text-base-300">Newsletter</h6>
          <fieldset className="w-80">
            <label className="text-base-200">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
