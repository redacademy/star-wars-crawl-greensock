import React, { Component } from "react";
import { TweenLite } from "gsap";

import "./App.css";

class App extends Component {
  componentDidMount() {
    TweenLite.fromTo(this.intro, 4.5, { opacity: 0 }, { opacity: 1, delay: 1 });
    TweenLite.to(this.intro, 1.5, { opacity: 0, delay: 5.5 });
  }

  render() {
    return (
      <div className="container">
        <section className="intro" ref={intro => (this.intro = intro)}>
          <p>
            A long time ago, in a galaxy far,<br /> far away....
          </p>
        </section>
      </div>
    );
  }
}

export default App;
