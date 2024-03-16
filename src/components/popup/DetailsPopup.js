import Popup from "./Popup";
const DetailsPopup = ({ open, close, data }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="img/portfolio/4.jpg"
            style={{ backgroundImage: `url(${data?.image.url})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{data?.title}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Description
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              {data?.description}
            </p>
          </div>
          <div className="detailbox">
            <ul>
              {(data?.githuburl) && <li>
                <span className="first">Github</span>
                <a href={data.githuburl}>{data.githuburl}</a>
              </li>}
              {(data?.liveurl) && <li>
                <span className="first">Live Url</span>
                <a href={data.liveurl}>{data.liveurl}</a>
              </li>}
              <li>
                <span className="first">Tech Stack</span>
                <ul style={{ listStyle: "none" }}>
                  {data?.techStack.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/thumbs/4-2.jpg" style={{ backgroundImage: `url(${data?.image.url})` }}/>
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/thumbs/4-2.jpg" style={{ backgroundImage: `url(${data?.image.url})` }}/>
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/thumbs/4-2.jpg" style={{ backgroundImage: `url(${data?.image.url})` }}/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popup >
  );
};
export default DetailsPopup;