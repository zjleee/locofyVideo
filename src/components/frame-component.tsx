import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./frame-component.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameParent}>
        <div className={styles.investorPartnershipAgreementParent}>
          <img
            className={styles.investorPartnershipAgreement}
            alt=""
            src="/investor-partnership-agreement--alejandro-cremades-1@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.linkedinLogo201120191Parent}>
              <img
                className={styles.linkedinLogo201120191Icon}
                alt=""
                src="/linkedinlogo20112019-1@2x.png"
              />
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
              <div className={styles.logosyoutubeWrapper}>
                <img
                  className={styles.logosyoutubeIcon}
                  alt=""
                  src="/logosyoutube.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.aboutUsWrapper}>
                <div className={styles.aboutUs}>About Us</div>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameInner} />
              </div>
              <div className={styles.contactUsWrapper}>
                <div className={styles.contactUs}>Contact Us</div>
              </div>
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.insightsWrapper}>
              <div className={styles.insights}>Insights</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.frameChild1} />
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent1}>
            <div className={styles.background1Wrapper}>
              <img
                className={styles.background1Icon}
                alt=""
                src="/2-background-1@2x.png"
              />
            </div>
            <div className={styles.termsParent}>
              <div className={styles.terms}>{`Terms      `}</div>
              <div className={styles.privacy}>{`Privacy      `}</div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.phcopyrightLightParent}>
                <img
                  className={styles.phcopyrightLightIcon}
                  alt=""
                  src="/phcopyrightlight.svg"
                />
                <div className={styles.div}>2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
