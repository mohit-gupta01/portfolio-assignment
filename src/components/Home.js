import Counter from "./Counter";

// const homeData = {
//   firstName: "James",
//   lastName: "Smith",
//   designation: "Web Developer",
//   address: "New York",
//   img: "img/hero/2.jpg",
//   bio: "Jodi kokhono vul hoye jai tumi oporadh nio na ptate velit esse cillum dolore",
//   numberOfProject: 800,
//   numberofyear: 12,
// };

const Home = ({ userData }) => {
  const [firstName, lastName] = userData.name.split(" ");
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" style={{ backgroundColor: "#242338" }} />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello">Hello {`I'm`}</h3>
                <h3 className="name" style={{color: "#f77f00"}}>
                  {userData.name}
                </h3>
                <h3 className="job">
                  {userData.designation} from {userData.address}
                </h3>
                <p className="text">{userData.subTitle}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a className="anchor" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{firstName}</h3>
              <h3 className="stroke_2">{lastName}</h3>
            </div>
            <div className="right">
              <div className="image">
                <img src={userData.avatar.url} alt="" />
                <div className="main" data-img-url={userData.avatar.url} />
                <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={userData?.exp_year} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={userData?.some_total} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>
                <span className="circle anim_circle">
                    <img src={userData?.avatar.url} alt="" />
                    {/* <div className="main" data-img-url={userData?.avatar.url} /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
