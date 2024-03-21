import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = ({ projects }) => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState(null);
  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} data={data} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Portfolio</span>
              <h3>My Amazing Works</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="portfolio_list">
              <ul>
                {projects.map((project, i) => (
                  // <li key={i} className="wow fadeInUp" data-wow-duration="1s">
                  //   <div className="list_inner">
                  //     <div
                  //       className="background_image"
                  //       data-img-url={project.image?.url}
                  //     />
                  //     <div className="content">
                  //       <div className="details">
                  //         <span className="category">
                  //           <a href="#">Youtube</a>
                  //         </span>
                  //         <h3 className="title">
                  //           <a href="#">
                  //             Web Application for
                  //             <br /> Desiverse
                  //           </a>
                  //         </h3>
                  //         <span className="view_project">
                  //           <a href={project.liveurl}>
                  //             View Project <i className="icon-right-big" />
                  //           </a>
                  //         </span>
                  //       </div>
                  //     </div>
                  //     <div className="overlay" />
                  //     <a
                  //       className="devman_tm_full_link portfolio_popup c-pointer"
                  //       onClick={() => {setPopup(true);setData(project)}}
                  //     />
                  //   </div>
                  // </li>
                  <li className="project-card wow fadeInUp" key={i} data-wow-duration="1s">
                    <div
                      className="background_image"
                      data-img-url={project.image?.url}
                    />
                    <div className="content">
                    </div>
                    <div className="overlay" />
                    <a
                      className="devman_tm_full_link portfolio_popup c-pointer"
                      onClick={() => { setPopup(true); setData(project) }}
                    />
                  </li>
                ))}
                <div
                  className="shape_1 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
                <div
                  className="shape_2 moving_effect"
                  data-direction="y"
                  data-reverse="yes"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
