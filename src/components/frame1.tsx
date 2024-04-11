import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent2 from "./frame-component2";
import MacBookPro1 from "./mac-book-pro1";
import * as styles from "./frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frameInner}>
        <FrameComponent2 />
      </div>
      <div className={styles.frameChild}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.conditionalSplitParent}>
              <div className={styles.conditionalSplit}>
                <img
                  className={styles.imacMockupLabel}
                  alt=""
                  src="/imac-mockup-label-1@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.onePlaceFor}>
                  One place for finding and managing your next executive job..
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.mockuuupsGooglePixel6MockuParent}>
                <img
                  className={styles.mockuuupsGooglePixel6MockuIcon}
                  alt=""
                  src="/mockuuupsgooglepixel6mockupinentrepreneurshand-1-1@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.includingManagingAllContainer}>
                    <span
                      className={styles.includingManagingAll}
                    >{`Including managing all job communication, `}</span>
                    <span className={styles.confidentially}>
                      <span className={styles.confidentially1}>
                        confidentially
                      </span>
                      <span className={styles.span}>.</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src="/frame-78-1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.pickAndChooseContainer}>
        <p className={styles.pickAndChoose}>
          {" "}
          Pick and choose who you know best
        </p>
        <p
          className={styles.orFindRecruiters}
        >{`                                or find recruiters matched by Senior Manager                              `}</p>
        <p className={styles.toHelpYour}>to help your next move</p>
      </div>
      <div className={styles.businessChallengeToAchieveParent}>
        <img
          className={styles.businessChallengeToAchieve}
          alt=""
          src="/business-challenge-to-achieve-higher-target-ambition-and-aspiration-to-improve-or-aiming-success--3@2x.png"
        />
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.stayInFullControlOfYourJWrapper}>
                <b className={styles.stayInFull}>
                  Stay in full control of your job search
                </b>
              </div>
              <i className={styles.itsNeverTooContainer}>
                <p className={styles.itsNeverToo}>
                  "It’s never too early to begin on your next move. Your
                </p>
                <p
                  className={styles.seniorManagerJob}
                >{`   Senior Manager job control dashboard with 100% confidentiality `}</p>
                <p className={styles.letsYouCommunicate}>
                  lets you communicate any time to all your levels of interest”
                </p>
              </i>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild1} />
                <div className={styles.findJobWrapper}>
                  <b className={styles.findJob}>Find Job</b>
                </div>
                <img
                  className={styles.makiarrowIcon}
                  alt=""
                  src="/makiarrow-2.svg"
                />
              </div>
            </div>
            <div className={styles.rateLimiterParent}>
              <div className={styles.rateLimiter} />
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild2} />
                <div className={styles.executives}>{` Executives `}</div>
              </div>
            </div>
          </div>
          <div className={styles.unsplashajtiw00qqtiParent}>
            <img
              className={styles.unsplashajtiw00qqtiIcon}
              alt=""
              src="/unsplashajtiw00qqti-2@2x.png"
            />
            <img
              className={styles.memoryLossForgetThingsTo}
              alt=""
              src="/memory-loss-forget-things-to-do-or-dementia-cannot-remember-anything-confusing-brain-problem--1-1@2x.png"
            />
            <div className={styles.frameParent3}>
              <div className={styles.executivesWrapper}>
                <b className={styles.executives1}>{` Executives, `}</b>
              </div>
              <i className={styles.letTheRecruitersContainer}>
                <p className={styles.letTheRecruitersKnow}>
                  <span className={styles.span1}>{` `}</span>
                  <span>{`Let the recruiters know `}</span>
                </p>
                <p className={styles.youreOpenTo}>you’re open to work</p>
              </i>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild3} />
                <b className={styles.getHeadhunted}>Get Headhunted</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent4}>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameChild4} />
          <div className={styles.frameParent5}>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild5} />
              <b className={styles.checkWhatsCurrentlyContainer}>
                <p
                  className={styles.checkWhats}
                >{`Check  what’s currently `}</p>
                <p className={styles.happening}>happening</p>
              </b>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.frameChild6} />
              <b className={styles.startEarlyAndContainer}>
                <p className={styles.startEarlyAnd}>{`Start early and `}</p>
                <p className={styles.stayAhead}>stay ahead</p>
              </b>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild7} />
              <b className={styles.takeFullControl}>Take full control</b>
            </div>
          </div>
          <b className={styles.itsAlwaysFree}>It’s always free to Use</b>
        </div>
        <MacBookPro1 />
      </div>
    </div>
  );
};

export default Frame1;
