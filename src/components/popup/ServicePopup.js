import Popup from "./Popup";

const ServicePopup = ({ data, open, close }) => {
  console.log(data);
  return (
    <Popup open={open} close={close}>
      <div className="service_popup_informations">
        <div className="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.image?.url || ""}
            style={{ backgroundImage: `url(${data.image?.url || ""})` }}
          />
        </div>
        <div className="main_title">
          <h3>{data.name}</h3>
          <h6>Charge: {data?.charge}</h6>
        </div>
        <div className="descriptions">
          {data && data.desc && <p>{data.desc}</p>}
        </div>
        <div className="">
          
        </div>
      </div>
    </Popup>
  );
};
export default ServicePopup;
