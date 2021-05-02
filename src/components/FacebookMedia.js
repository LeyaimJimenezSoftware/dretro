import React, {useEffect} from "react"
import { Helmet } from "react-helmet"
import "./Tags.css"

const FacebookMedia = () => {

  useEffect(() => {
    window.FB?.XFBML.parse();
  }, []);

  return (
    <div style={{ marginBottom: "16px" }}>
      <Helmet>
        <script
          async={true}
          defer={true}
          crossOrigin="anonymous"
          src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v10.0&appId=828014637999067&autoLogAppEvents=1"
        />
      </Helmet>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/dangoretro"
        data-tabs="timeline"
        data-width="500"
        data-height=""
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/dangoretro"
          className="fb-xfbml-parse-ignore"
        ></blockquote>
      </div>
    </div>
  )
}

export default FacebookMedia
