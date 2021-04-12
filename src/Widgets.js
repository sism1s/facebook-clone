import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRealMadrid%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ bordrer: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encypted-media"
      ></iframe>

      {/* <div
        class="fb-page"
        data-href="https://www.facebook.com/RealMadrid"
        data-tabs="timeline,events"
        data-width="340px"
        data-height="1500px"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/RealMadrid"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/RealMadrid">Real Madrid C.F.</a>
        </blockquote>
      </div> */}
    </div>
  );
}

export default Widgets;
