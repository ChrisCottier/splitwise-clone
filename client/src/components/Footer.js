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
                <p className='footer-names'>Aaron Carpenter</p>
                <p>
                  <a href="https://github.com/aaronkcarpenter">
                    <i className='fab fa-github' />
                  </a>
                  <a href="https://www.linkedin.com/in/aaronkcarpenter/">
                    <i className='fab fa-linkedin-in' />
                  </a>
                  <a href="https://angel.co/u/aaron-carpenter-4">
                    <i className='fab fa-angellist' />
                  </a>
                </p>
                {/* <p>
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
                </p> */}
              </div>
              <div className="column">
                <p className='footer-names'>Chris Cottier</p>
                {/* <p>
                  <a href="/login">Log In</a>
                </p>
                <p>
                  <a href="/signup">Sign Up</a>
                </p> */}
                <p>
                  <a href="https://github.com/ChrisCottier">
                    <i className='fab fa-github' />
                  </a>
                  <a href="https://www.linkedin.com/in/christopher-cottier-92587194/">
                    <i className='fab fa-linkedin-in' />
                  </a>
                  <a href="https://angel.co/u/christopher-cottier">
                    <i className='fab fa-angellist' />
                  </a>
                </p>
                {/* <p>
                  <a href="/">Reset Password</a>
                </p>
                <p>
                  <a href="/">Settings</a>
                </p>
                <p>
                  <a href="/">Splitwise Pro</a>
                </p> */}
              </div>
              <div className="column">
                <p className='footer-names'>Conrad Orta</p>
                {/* <p>
                  <a href="/">Github</a>
                </p>
                <p>
                  <a href="/">LinkedIn</a>
                </p>
                <p>
                  <a href="/">AngelList</a>
                </p>
                <p>
                  <a href="/">Privacy Policy</a>
                </p> */}
                <p>
                  <a href="https://github.com/COrtaDev">
                    <i className='fab fa-github' />
                  </a>
                  <a href="https://www.linkedin.com/in/conrad-orta-16598014/">
                    <i className='fab fa-linkedin-in' />
                  </a>
                  <a href="https://angel.co/u/conrad-orta-iii">
                    <i className='fab fa-angellist' />
                  </a>
                </p>
                {/* <p>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="https:/www.twitter.com/splitwise">
                    <i className="fab fa-instagram" />
                  </a>
                </p> */}
              </div>
              <div className="column">
                {/* <button>Get It On Google Play</button>
                <button>Download on the App Store</button> */}
                <p className='footer-names'>Made with </p>
                <i className="fab fa-react footer-i" />{" "}
                <i className="fab fa-python footer-i" />
                {/* <p className="creators">Chris C., Conrad O., & Aaron C.</p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
