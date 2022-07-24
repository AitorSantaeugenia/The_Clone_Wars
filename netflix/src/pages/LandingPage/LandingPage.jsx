import React from 'react'
import './LandingPage.css'
import {BsChevronRight, BsGlobe} from 'react-icons/bs'
import {MdArrowDropDown} from 'react-icons/md'

const LandingPage = () => {

  const buttonAcordeon = () => {
    let accordion = document.getElementsByClassName("accordion");
    const totalAccordions = accordion.length;
    
    for (let i = 0; i < totalAccordions; i++) {
      accordion[i].addEventListener("click", (e) => {
        let panel = e.target.nextElementSibling;
       
        if (panel.classList[1] === "panel-closed") {
          e.target.classList.toggle("accordion-active");
          panel.classList.toggle("panel-open");
          closeAllExcept(panel);
        }
      });
    } 
    
    const closeAllExcept = (pan) => {
      for (let i = 0; i < totalAccordions; i++) {
        let panelToClose = accordion[i].nextElementSibling;
        if(panelToClose !== pan){
           accordion[i].classList.remove("accordion-active");
           panelToClose.classList.remove("panel-open");
        }
      }
    }
  }

  return (
   <>
   <div className="text-white flex flex-col text-center">
      <header className="header flex flex-col justify-center pb-40">
        <div className="inner-container">
          <div className="inner-title">
            <h1 className="font-bold mt-[95px]">Unlimited movies, TV shows, and more.</h1>
          </div>
          <div className="inner-text">
            <p>Watch anywhere. Cancel anytime.</p>
          </div>

          <div className="email-form">
            <p className="inner-text-membership">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="get-started">
              <input type="text" name="emailAddress" placeholder="Email address" />
              <a href="/#" className="btn-lg"
                >Get Started <BsChevronRight className="inline-block chevronRigth" /></a>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </header>
  </div>

  <section className="border-bottom-hr py-4">
    <div className="xl:flex 2xl:flex lg:flex md:flex-column items-end justify-between m-auto max-w-6xl text-white">
      <div className="flex-col items-center w-3/6 m-auto lg:text-center xl:text-left 2xl:text-left sm:text-center md:text-center md:mt-20 xl:m-auto 2xl:m-auto lg:m-auto smler:text-center">
        <div className="text-5xl font-bold smler:text-3xl sm:mt-10 smler:mt-10 smler:text-center">
          <h1>Enjoy on your TV.</h1>
        </div>
        <div className="text-2xl mt-8 smler:text-xl">
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
            Blu-ray players, and more.
          </p>
        </div>
      </div>

      <div className="flex w-3/6 box-border md:text-center 2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-4/5 sm:w-4/5 2xl:m-auto xl:m-auto lx:m-auto md:m-auto sm:m-auto smler:m-auto md:justify-center sm:justify-center smler:justify-center smler:w-4/5">
        <div className="container-img-video">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt="Example of website"
            />
            <div className="container-video">
              <video autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                  />
              </video>
            </div>
        </div>            
      </div>
    </div>
  </section>

  <section className="border-bottom-hr py-4">
    <div className="xl:flex 2xl:flex lg:flex md:flex-column items-end justify-between m-auto max-w-6xl text-white mb-40 smler:mb-20">
      <div className="md:flex-column md:m-auto md:w-4/5 lg:w-4/5">
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="Mobile Stranger Things"
          className="sm:m-auto md:m-auto lg:m-auto"
        />
        <div className="flex sm:-mt-3 2xl:-mt-40 xl:-mt-40 lg:-mt-40 md:-mt-40 w-3/5 download-text sm:w-2/5 md:w-2/5 smler:w-2/5">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt="Mobile Stranger Things download"
            className="h-[4.5rem]"
          />
          <div className="flex">
            <div className="flex-column ml-5">
              <h1 className="font-bold">Stranger Things</h1>
              <div className="text-blue-500">Downloading...</div>
            </div>
            <div className="download-icon md:ml-5"></div>
          </div>
        </div>
      </div>
      <div className="flex-col items-center w-3/6 m-auto lg:text-center xl:text-left 2xl:text-left sm:text-center sm:mt-20 md:text-center md:mt-20 xl:m-auto 2xl:m-auto lg:m-auto smler:text-center 2xl:mt-40 xl:mt-40 lg:mt-40">
        <div className="text-5xl font-bold smler:text-3xl sm:mt-10 smler:mt-10 smler:text-center">
          <h1>Download your shows to watch offline.</h1>
        </div>
        <div className="text-2xl mt-8 smler:text-xl">
          <p>
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="border-bottom-hr py-4 mt-20">
    <div className="xl:flex 2xl:flex lg:flex md:flex-column items-center justify-center m-auto max-w-6xl text-white smler:mb-20">
      <div className="inner-container w-1/2 md:w-full sm:text-center sm:w-full sm:mb-10 smler:text-center smler:w-full smler:mb-10">
        <div className="text-5xl text-center font-bold smler:text-3xl sm:mt-10 smler:mt-10 smler:text-center"> 
          <h1>Watch everywhere.</h1>
        </div>
        <div className="text-2xl mt-8 smler:text-xl md:mb-20 md:w-1/2">
          <p className="text-center">
            Stream unlimited movies and TV shows on your phone, tablet,
            laptop, and TV without paying more.
          </p>
        </div>
      </div>
      <div className="flex w-3/6 box-border md:text-center 2xl:w-3/6 xl:w-3/6 lg:w-3/6 md:w-4/5 sm:w-4/5 2xl:m-auto xl:m-auto lx:m-auto md:m-auto sm:m-auto smler:m-auto md:justify-center sm:justify-center smler:justify-center smler:w-4/5">
        <div className="container-img-video">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
            alt="Ipad with movies"
          />
          <div className="container-video-section3">
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="border-bottom-hr py-4 mt-20 text-white">
    <div className="qna">
      <button className="accordion" onClick={buttonAcordeon}>What is Netflix</button>
        <div className="panel panel-closed">
          <p> Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more
              on thousands of internet-connected devices. <br /><br />
              You can watch as much as you want, whenever you want without a single
              commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
          </p>
        </div>
      <button className="accordion" onClick={buttonAcordeon}>How much does Netflix cost?</button>
      <div className="panel panel-closed">
        <p>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, 
        all for one fixed monthly fee. Plans range from EUR7.99 to EUR17.99 a month.
        No extra costs, no contracts.
        </p>
      </div>
      <button className="accordion" onClick={buttonAcordeon}>Where can I watch?</button>
        <div className="panel panel-closed">
          <p>
            Watch anywhere, anytime, on an unlimited number of devices. Sign
            in with your Netflix account to watch instantly on the web at
            netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including
            smart TVs, smartphones, tablets, streaming media players and
            game consoles. <br /><br />You can also download your favorite shows
            with the iOS, Android, or Windows 10 app. Use downloads to watch
            while you're on the go and without an internet connection. Take
            Netflix with you anywhere.
          </p>
        </div>
      <button className="accordion" onClick={buttonAcordeon}>How do I cancel?</button>
        <div className="panel panel-closed">
          <p>
            Netflix is flexible. There are no pesky contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your
            account anytime.
          </p>
        </div>
      <button className="accordion" onClick={buttonAcordeon}>What can I watch on Netflix?</button>
        <div className="panel panel-closed">
          <p>
            Netflix has an extensive library of feature films,
            documentaries, TV shows, anime, award-winning Netflix originals,
            and more. Watch as much as you want, anytime you want.
          </p>
        </div>
      <button className="accordion" onClick={buttonAcordeon}>Is Netflix good for kids?</button>
      <div className="panel panel-closed">
        <p>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly
        TV shows and movies in their own space.<br /><br />
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content 
        kids can watch and block specific titles you don’t want kids to see.
        </p>
      </div>

      <div className="email-form flex-column justify-center text-center text-lg">
      <p className="mb-4 mt-12">
        Ready to watch? Enter your email to create or restart your
        membership.
      </p>

      <div className="get-started flex justify-center">
        <input type="text" name="" id="" placeholder="Email address" />
          <a href="/#" className="btn-lg">Get started <BsChevronRight className="inline-block chevronRigth" />
          </a>
      </div>
    </div>
  </div>

   
  </section>

  <footer className="footer">
    <p className="text-footer">Questions? Call <a href="tel:900 822 377" className="phone-link">900 822 377</a></p>
    <div className="links">
      <ul>
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Account</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Redeem Gift Cards</li>
        <li>Buy Gift Cards</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Guarantee</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
      </ul>
      <div className="language" id="language-btn">
      
      <BsGlobe className="inline-block" /> English
      <MdArrowDropDown className="inline-block" />
        <div className="dropdown-list">
          <ul className="" id="language-dropdown">
            <li>Español</li>
            <li>English</li>
          </ul>
        </div>
      </div>
      <p>Netflix Spain</p>
    </div>
  </footer>

  <script src="index.js" type="text/javascript"></script>
  </>
  )
}

export default LandingPage