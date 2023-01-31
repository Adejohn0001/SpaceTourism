import React from 'react'
import moon from '../assets/destination/image-moon.png'
import DestNav from './DestNav'
import "../Styles/Destination.css";
import Nav from "../Components/Nav";

const Moon = () => {
  return (
    <div className="destinations">
      <Nav />

      <div>
        <div className="container01">
          <p className="p1">
            01
            <span>Pick your destination</span>
          </p>
        </div>

        {/** container2 */}
        <div className="container02">
          <div className="mars-container">
            <img src={moon} alt="mars" srcset="" className="mars-image" />
          </div>

          <div className="container03">
            <div>
              <DestNav />
            </div>

            <div>
              <div>
                <p className="mars">Moon</p>
              </div>
              <div>
                <p className="dest-text">
                  Don't forget to pack your hiking boots. You'll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  soloar system. It's two and a half times the size of Everest.
                </p>
              </div>

              <div>
                <hr />
              </div>

              <div className="avg-amt">
                <div>
                  <p className="avg">Avg. Distance</p>
                  <p className="amt">225 Mil. km</p>
                </div>

                <div>
                  <p className="avg">Est. Travel Time</p>
                  <p className="amt">9 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Moon