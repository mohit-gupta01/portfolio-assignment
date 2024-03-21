import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ services }) => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  console.log(services);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {services.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    {/* <div className="list_inner">
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.desc.substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src={service.image.url}
                        alt=""
                      />
                    </div> */}
                    <div className="service-card">
                      <div className="service-card-img">
                        <img src={service.image?.url} alt="" />
                      </div>
                      <div className="service-card-content">
                        <h1 className="title">{service.name}</h1>
                        <h6>{service.charge}</h6>
                        <p className="desc">{service.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
