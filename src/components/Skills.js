import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = ({ skills }) => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  let mid = Math.ceil(skills.length / 2);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="left">
              <div className="dodo_progress">
                {skills.slice(0, mid).map((skill, index) => (
                  <div
                    className="skillsInner___ progress_inner"
                    data-value={skill.percentage}
                    data-color="#142eb5"
                    key={index}
                  >
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
            <div className="right">
              <div className="dodo_progress">
                {skills.slice(mid).map((skill, index) => (
                  <div
                    className="skillsInner___ progress_inner"
                    data-value={skill.percentage}
                    data-color="#142eb5"
                    key={index}
                  >
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}%</span>
                    </span>
                    <div className="background">
                      <div className="bar">
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
