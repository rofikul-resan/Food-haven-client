const Footer = () => {
  return (
    <footer data-theme="dark">
      <div className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img className="h-16" src="/food-haven-logo.png" alt="" />
          <h1>Food haven</h1>
          <p>Providing reliable tech since 1992</p>
        </div>
        <div className="footer md:p-10 bg-base-200 text-base-content grid-cols-2">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>
        <div className="footer md:p-10 bg-base-200 text-base-content grid-cols-2">
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <span className="footer-title">Contact Us</span>
            <a className="link link-hover">Phone number: (907) 486-2612</a>
            <a className="link link-hover">
              City: Kodiak -- State: Alaska (AK)
            </a>
            <a className="link link-hover">Zipcode: 99615 -- Country: USA</a>
          </div>
        </div>
      </div>
      <p className="text-center font-bold">
        © 2023 Food Haven . Built using React and develope by Rofikul islam
        Resan .
      </p>
    </footer>
  );
};

export default Footer;
