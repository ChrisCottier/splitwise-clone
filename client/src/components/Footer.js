import React from "react";
import "bulma/css/bulma.css";
import "../components/styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <div className="columns">
              <div className="column">
                <p>splitorama</p>
                <p>
                  <a href="/">About</a>
                </p>
                <p>
                  <a href="/">Press</a>
                </p>
                <p>
                  <a href="/">Blog</a>
                </p>
                <p>
                  <a href="/">Jobs</a>
                </p>
                <p>
                  <a href="/">Calculators</a>
                </p>
                <p>
                  <a href="/">API</a>
                </p>
              </div>
              <div className="column">
                <p>Account</p>
                <p>
                  <a href="/">Log In</a>
                </p>
                <p>
                  <a href="/">Sign Up</a>
                </p>
                <p>
                  <a href="/">Reset Password</a>
                </p>
                <p>
                  <a href="/">Settings</a>
                </p>
                <p>
                  <a href="/">Splitwise Pro</a>
                </p>
              </div>
              <div className="column">
                <p>More</p>
                <p>
                  <a href="/">Contact Us</a>
                </p>
                <p>
                  <a href="/">FAQ</a>
                </p>
                <p>
                  <a href="/">Terms of Service</a>
                </p>
                <p>
                  <a href="/">Privacy Policy</a>
                </p>
                <p>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-instagram" />
                  </a>
                </p>
              </div>
              <div className="column">
                <button>Get It On Google Play</button>
                <button>Download on the App Store</button>
                <p>Made with </p>
                <i className="fab fa-react footer-i" />{" "}
                <i className="fab fa-python footer-i" />
                <p className="creators">Chris C., Conrad O., & Aaron C.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
