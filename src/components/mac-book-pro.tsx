import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./mac-book-pro.module.css";

const MacBookPro: FunctionComponent = () => {
  return (
    <div className={styles.macbookPro1425}>
      <div className={styles.frameParent}>
        <div className={styles.seasonedExecutiveWithAProvParent}>
          <i
            className={styles.seasonedExecutiveWith}
          >{`Seasoned executive with a proven track record in driving success. `}</i>
          <i className={styles.eagerToConnectContainer}>
            <p className={styles.p}>{` `}</p>
            <p className={styles.eagerToConnect}>
              Eager to connect with opportunities on Senior Manager that align
              with your passion for excellence.
            </p>
          </i>
        </div>
        <div className={styles.connectWithRecruitersParent}>
          <i className={styles.connectWithRecruiters}>
            Connect with recruiters
          </i>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.distanceCalculatorParent}>
                  <div className={styles.distanceCalculator} />
                  <b className={styles.connect}>Connect</b>
                </div>
              </div>
              <div className={styles.iphone15ProPortraitRightM}>
                <div className={styles.shadowParent}>
                  <img
                    className={styles.shadowIcon}
                    alt=""
                    src="/shadow-1@2x.png"
                  />
                  <img
                    className={styles.mainIcon}
                    alt=""
                    src="/main-4@2x.png"
                  />
                </div>
                <img
                  className={styles.iphone15ProPortraitRightM1}
                  loading="lazy"
                  alt=""
                  src="/iphone-15-pro-portrait-right-mockup-label@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.iphone15ProPortraitLeftMoWrapper}>
        <div className={styles.iphone15ProPortraitLeftMo}>
          <div className={styles.freeHandHoldingIphone12Mi}>
            <div className={styles.shadowGroup}>
              <img className={styles.shadowIcon1} alt="" src="/shadow@2x.png" />
              <img className={styles.mainIcon1} alt="" src="/main-3@2x.png" />
            </div>
            <img
              className={styles.freeHandHoldingIphone12Mi1}
              loading="lazy"
              alt=""
              src="/free-hand-holding-iphone-12-mini-label@2x.png"
            />
          </div>
          <div className={styles.shadowContainer}>
            <img className={styles.shadowIcon2} alt="" src="/shadow-2@2x.png" />
            <img className={styles.mainIcon2} alt="" src="/main-5@2x.png" />
          </div>
          <img
            className={styles.iphone15ProPortraitLeftMo1}
            loading="lazy"
            alt=""
            src="/iphone-15-pro-portrait-left-mockup-label@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MacBookPro;
