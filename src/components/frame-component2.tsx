import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.icon} alt="" src="/3-4-1-1-1@2x.png" />
          <div className={styles.ellinesWrapper}>
            <img className={styles.ellinesIcon} alt="" src="/ellines.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.executives}>{` Executives `}</div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.recruiters}>{` Recruiters `}</div>
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameChild1} />
                <div className={styles.frameChild2} />
                <img
                  className={styles.businessChallengeToAchieve}
                  alt=""
                  src="/business-challenge-to-achieve-higher-target-ambition-and-aspiration-to-improve-or-aiming-success--3@2x.png"
                />
                <div className={styles.frameParent1}>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild3} />
                    <div className={styles.executivesAndRecruitersContainer}>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <p
                        className={styles.executivesAndRecruiters}
                      >{`"Executives and Recruiters, `}</p>
                      <p className={styles.weConnectSuccess}>
                        {" "}
                        We Connect Success!”
                      </p>
                    </div>
                  </div>
                  <img
                    className={styles.productiveMasterProductivit}
                    alt=""
                    src="/productive-master-productivity-and-project-management-skill-multitasking-work-and-time-management-copy-1-1@2x.png"
                  />
                </div>
                <img className={styles.ri1Icon} alt="" src="/ri-1-1@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2}>
          <div className={styles.frameParent2}>
            <div className={styles.welcomeToWrapper}>
              <b className={styles.welcomeTo}>Welcome To</b>
            </div>
            <img
              className={styles.background3Icon}
              alt=""
              src="/2-background-3-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper3}>
        <div className={styles.saveYourTeamAMinimumOf20Parent}>
          <b
            className={styles.saveYourTeam}
          >{`Save Your Team a Minimum of  20 Hours per Weak `}</b>
          <div className={styles.gatherCanSaveYourTeamHourWrapper}>
            <b className={styles.gatherCanSaveContainer}>
              <span>{`Gather can save your team hour per weak sourcing, organizing and documenting design projects `}</span>
              <span className={styles.span}>{` `}</span>
            </b>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper4}>
        <div className={styles.entrepreneurAndStartupProjeParent}>
          <img
            className={styles.entrepreneurAndStartupProje}
            alt=""
            src="/entrepreneur-and-startup-project-start-new-business-or-opportunity-to-invent-new-product--copy-1-1@2x.png"
          />
          <div className={styles.frameChild4} />
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-22-1.svg"
          />
          <div className={styles.fullControlForContainer}>
            <p className={styles.fullControlFor}>
              “Full control for executives planning the next move
            </p>
            <p className={styles.combiningYourJob}>
              combining your job search and communication
            </p>
            <p className={styles.forEarlyAnd}> for early and live jobs”</p>
          </div>
          <div className={styles.executivesTryNowContainer}>
            <p className={styles.executives1}>
              <span className={styles.span1}>{`     `}</span>
              <span> Executives,</span>
              <span className={styles.span2}>{` `}</span>
            </p>
            <p className={styles.tryNowAlways}> “Try now always free”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
