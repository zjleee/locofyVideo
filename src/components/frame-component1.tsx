import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleParent}>
          <header className={styles.frameChild} />
          <img
            className={styles.functionWrapperIcon}
            alt=""
            src="/function-wrapper@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <b className={styles.executives}>{`Executives `}</b>
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <b className={styles.recruiters}>{`Recruiters `}</b>
                <div className={styles.iconamoonarrowUp2BoldWrapper}>
                  <img
                    className={styles.iconamoonarrowUp2Bold}
                    alt=""
                    src="/iconamoonarrowup2bold.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.controlFlowGraphParent}>
          <div className={styles.controlFlowGraph} />
          <div className={styles.executives1}>{` Executives `}</div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.functionTreeParent}>
            <div className={styles.functionTree} />
            <div className={styles.recruiters1}>{` Recruiters `}</div>
            <div className={styles.valueNetworkHubParent}>
              <div className={styles.valueNetworkHub} />
              <div className={styles.parallelTree} />
              <div className={styles.parallelTree1} />
              <div className={styles.frameParent1}>
                <div className={styles.iterationHubParent}>
                  <div className={styles.iterationHub} />
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
                  loading="lazy"
                  alt=""
                  src="/productive-master-productivity-and-project-management-skill-multitasking-work-and-time-management-copy-1@2x.png"
                />
              </div>
              <img
                className={styles.ri1Icon}
                loading="lazy"
                alt=""
                src="/ri-1@2x.png"
              />
              <img
                className={styles.businessChallengeToAchieve}
                loading="lazy"
                alt=""
                src="/business-challenge-to-achieve-higher-target-ambition-and-aspiration-to-improve-or-aiming-success--1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.frameParent2}>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent3}>
              <div className={styles.frameWrapper4}>
                <div className={styles.welcomeToParent}>
                  <b className={styles.welcomeTo}>Welcome To</b>
                  <img
                    className={styles.background3Icon}
                    loading="lazy"
                    alt=""
                    src="/2-background-3@2x.png"
                  />
                </div>
              </div>
              <h1
                className={styles.saveYourTeam}
              >{`Save Your Team a Minimum of 20 Hours per Weak `}</h1>
            </div>
          </div>
          <b className={styles.gatherCanSaveContainer}>
            <span>{`Gather can save your team hour per weak sourcing, organizing and documenting design projects `}</span>
            <span className={styles.span}>{` `}</span>
          </b>
        </div>
      </div>
      <div className={styles.frameWrapper5}>
        <div className={styles.rectangleParent1}>
          <div className={styles.rectangleDiv} />
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-22.svg"
          />
          <img
            className={styles.entrepreneurAndStartupProje}
            loading="lazy"
            alt=""
            src="/entrepreneur-and-startup-project-start-new-business-or-opportunity-to-invent-new-product--copy-1@2x.png"
          />
          <div className={styles.executivesTryNowContainer}>
            <p className={styles.executives2}>
              <span className={styles.span1}>{`     `}</span>
              <span> Executives,</span>
              <span className={styles.span2}>{` `}</span>
            </p>
            <p className={styles.tryNowAlways}> “Try now always free”</p>
          </div>
          <div className={styles.fullControlForContainer}>
            <p className={styles.fullControlFor}>
              “Full control for executives planning the next move
            </p>
            <p className={styles.combiningYourJob}>
              combining your job search and communication
            </p>
            <p className={styles.forEarlyAnd}> for early and live jobs”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
