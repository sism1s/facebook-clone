import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/RealMadrid/"
        data-tabs="timeline"
        data-width="340px"
        data-height="1500px"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/RealMadrid/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/RealMadrid/">Real Madrid C.F.</a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widgets;
