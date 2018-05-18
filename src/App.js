import React, { Component } from "react";
import { Power2, TimelineLite, TweenLite } from "gsap";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    TweenLite.set(this.logo, { opacity: 0 });
    const tl = new TimelineLite();

    tl
      .fromTo(this.intro, 4.5, { opacity: 0 }, { opacity: 1, delay: 1 })
      .to(this.intro, 1.5, { opacity: 0 })
      .set(this.logo, { opacity: 1, scale: 2.75 })
      .to(this.logo, 8, { scale: 0.05, ease: Power2.easeOut })
      .to(this.logo, 1.5, { opacity: 0 }, "-=1.5");
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={intro => (this.intro = intro)}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
        <section className="logo" ref={logo => (this.logo = logo)}>
          <img src={logo} alt="Star Wars logo" />
        </section>
      </div>
    );
  }
}

export default App;
