import "./styles.css";
import webAppPhoto from "../../assets/web_app.png";
import teaching from "../../assets/teaching.png";
import fullstackDev from "../../assets/fullstack_develop.png";

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h1>Work Experience</h1>
      <div className="work-experience-row">
        <div className="experience-item">
          <div className="img-container">
            <img src={webAppPhoto} alt="Web application"/>
          </div>
          <div>
            <h2>Web Applications</h2>
            <p>
              Creating professional web application from scratch, designing and
              structuring from the client requirements
            </p>
          </div>
        </div>
        <div className="experience-item">
          <div className="img-container">
            <img src={fullstackDev}  alt="Web application"/>
          </div>
          <div>
            <h2>Fullstack Development</h2>
            <p>
              Working in both sides of an application, implemeting my own APIs,
              connect differents serivces like AWS or MongoDB Atlas
            </p>
          </div>
          
        </div>
        <div className="experience-item">
          <div className="img-container">
            <img src={teaching}  alt="Web application"/>
          </div>
          <div>
            <h2>Teaching</h2>
            <p>
              Teaching web development on differents courses and creating my own
              online courses
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
