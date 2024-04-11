import * as React from "react";
import { FunctionComponent } from "react";
import FrameComponent1 from "./frame-component1";
import * as styles from "./function-composer.module.css";

const FunctionComposer: FunctionComponent = () => {
  return (
    <section className={styles.functionComposer}>
      <FrameComponent1 />
      <div className={styles.functionComposerInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent1}>
              <div className={styles.div}>
                <img
                  className={styles.imacMockupLabel}
                  loading="lazy"
                  alt=""
                  src="/imac-mockup-label@2x.png"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.onePlaceFor}>
                  One place for finding and managing your next executive job..
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.mockuuupsGooglePixel6MockuParent}>
                <img
                  className={styles.mockuuupsGooglePixel6MockuIcon}
                  loading="lazy"
                  alt=""
                  src="/mockuuupsgooglepixel6mockupinentrepreneurshand-1@2x.png"
                />
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
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
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/frame-78.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.functionComposerChild}>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <section className={styles.stayInFullControlOfYourJParent}>
                <h2 className={styles.stayInFull}>
                  Stay in full control of your job search
                </h2>
                <div className={styles.itsNeverTooEarlyToBeginWrapper}>
                  <i className={styles.itsNeverTooContainer}>
                    <p className={styles.itsNeverToo}>
                      "It’s never too early to begin on your next move. Your
                    </p>
                    <p
                      className={styles.seniorManagerJob}
                    >{`     Senior Manager job control dashboard with 100% confidentiality `}</p>
                    <p className={styles.letsYouCommunicate}>
                      lets you communicate any time to all your levels of
                      interest”
                    </p>
                  </i>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.findJobWrapper}>
                      <b className={styles.findJob}>Find Job</b>
                    </div>
                    <img
                      className={styles.makiarrowIcon}
                      alt=""
                      src="/makiarrow-1.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.businessChallengeToAchieve}
                  loading="lazy"
                  alt=""
                  src="/business-challenge-to-achieve-higher-target-ambition-and-aspiration-to-improve-or-aiming-success--1@2x.png"
                />
              </section>
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild1} />
              <div className={styles.rectangleParent2}>
                <div className={styles.frameChild2} />
                <h1 className={styles.executives}>{` Executives `}</h1>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent2}>
              <div className={styles.letTheRecruitersKnowYoureWrapper}>
                <i className={styles.letTheRecruitersContainer}>
                  <p className={styles.letTheRecruitersKnow}>
                    <span className={styles.span1}>{` `}</span>
                    <span>{`Let the recruiters know `}</span>
                  </p>
                  <p className={styles.youreOpenTo}>you’re open to work</p>
                </i>
              </div>
              <section className={styles.pickAndChooseContainer}>
                <p className={styles.pickAndChoose}>
                  {" "}
                  Pick and choose who you know best
                </p>
                <p
                  className={styles.orFindRecruiters}
                >{`                                or find recruiters matched by Senior Manager                               `}</p>
                <p className={styles.toHelpYour}>to help your next move</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionComposer;
