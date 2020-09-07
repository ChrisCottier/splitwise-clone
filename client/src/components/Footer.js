import React from 'react'
import 'bulma/css/bulma.css'
import '../components/styles/footer.css'

const Footer = () => {

  return(

    <div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <div class="columns">
              <div class="column">
                <p>Splitwise</p>
                <p>
                  <a href='/'>About</a>
                </p>
                <p>
                  <a href='/'>Press</a>
                </p>
                <p>
                  <a href='/'>Blog</a>
                </p>
                <p>
                  <a href='/'>Jobs</a>
                </p>
                <p>
                  <a href='/'>Calculators</a>
                </p>
                <p>
                  <a href='/'>API</a>
                </p>
              </div>
              <div class="column">
                <p>Account</p>
                <p>
                  <a href='/'>Log In</a>
                </p>
                <p>
                  <a href='/'>Sign Up</a>
                </p>
                <p>
                  <a href='/'>Reset Password</a>
                </p>
                <p>
                  <a href='/'>Settings</a>
                </p>
                <p>
                  <a href='/'>Splitwise Pro</a>
                </p>
              </div>
              <div class="column">
                <p>More</p>
                <p>
                  <a href='/'>Contact Us</a>
                </p>
                <p>
                  <a href='/'>FAQ</a>
                </p>
                <p>
                  <a href='/'>Terms of Service</a>
                </p>
                <p>
                  <a href='/'>Privacy Policy</a>
                </p>
                <p>
                  <i>Twitter</i>
                  <a href='https:/www.twitter.com/splitwise'>Twitter</a>
                  <i>Facebook</i>
                  <a href='https://www.facebook.com/splitwise'>Facebook</a>
                  <i>Instagram</i>
                  <a href='https://www.instagram.com/splitwise'>Instagram</a>
                </p>
              </div>
              <div class="column">
                <button>Get It On Google Play</button>
                <button>Download on the App Store</button>
                <p>Made with </p>
                  <i className='fab fa-react footer-i' /> <i className='fab fa-python footer-i' />
                <p className='creators'>Chris C., Conrad O., & Aaron C.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </div>
  )

}

export default Footer