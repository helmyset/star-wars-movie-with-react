import * as React from "react";
export default class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  render() {
    return (
      <div id="wrapper">
        <header id="js-header">
          <div className="container clearfix">
            <h1>Star Wars</h1>
          </div>
        </header>
      </div>
    );
  }
}
