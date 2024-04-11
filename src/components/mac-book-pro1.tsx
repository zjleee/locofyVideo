import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./mac-book-pro1.module.css";

const MacBookPro1: FunctionComponent = () => {
  return (
    <div className={styles.macbookPro1425}>
      <div className={styles.download1Parent}>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
        <div className={styles.seasonedExecutiveWithAProvParent}>
          <i
            className={styles.seasonedExecutiveWith}
          >{`Seasoned executive with a proven track record in driving success. `}</i>
          <div className={styles.frameParent}>
            <div className={styles.eagerToConnectWithOpportunWrapper}>
              <i className={styles.eagerToConnectContainer}>
                <p className={styles.p}>{` `}</p>
                <p className={styles.eagerToConnect}>
                  Eager to connect with opportunities on Senior Manager that
                  align with your passion for excellence.
                </p>
              </i>
            </div>
            <i className={styles.connectWithRecruiters}>
              Connect with recruiters
            </i>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.connect}>Connect</b>
          </div>
        </div>
        <div className={styles.freeHandHoldingIphone12MiWrapper}>
          <div className={styles.freeHandHoldingIphone12Mi}>
            <div className={styles.shadowParent}>
              <img
                className={styles.shadowIcon}
                alt=""
                src="/shadow-3@2x.png"
              />
              <img className={styles.mainIcon} alt="" src="/main-6@2x.png" />
            </div>
            <img
              className={styles.freeHandHoldingIphone12Mi1}
              alt=""
              src="/free-hand-holding-iphone-12-mini-label-1@2x.png"
            />
            <div className={styles.iphone15ProPortraitRightMParent}>
              <div className={styles.iphone15ProPortraitRightM}>
                <div className={styles.shadowGroup}>
                  <img
                    className={styles.shadowIcon1}
                    alt=""
                    src="/shadow-4@2x.png"
                  />
                  <img
                    className={styles.mainIcon1}
                    alt=""
                    src="/main-7@2x.png"
                  />
                </div>
                <img
                  className={styles.iphone15ProPortraitRightM1}
                  alt=""
                  src="/iphone-15-pro-portrait-right-mockup-label-1@2x.png"
                />
              </div>
              <div className={styles.iphone15ProPortraitLeftMoWrapper}>
                <div className={styles.iphone15ProPortraitLeftMo}>
                  <div className={styles.shadowContainer}>
                    <img
                      className={styles.shadowIcon2}
                      alt=""
                      src="/shadow-5@2x.png"
                    />
                    <img
                      className={styles.mainIcon2}
                      alt=""
                      src="/main-8@2x.png"
                    />
                  </div>
                  <img
                    className={styles.iphone15ProPortraitLeftMo1}
                    alt=""
                    src="/iphone-15-pro-portrait-left-mockup-label-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro1;
