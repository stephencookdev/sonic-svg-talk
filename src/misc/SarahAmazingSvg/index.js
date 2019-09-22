import React, { useState, useEffect } from "react";
import { TweenMax, Sine } from "gsap/TweenMax";
import styles from "./styles.scss";

/**
 * ############################################################################
 * All this code is from the amazing Sarah Drasner: https://twitter.com/sarah_edo
 * I've just ported it to React, and shimmied out jQuery
 * ############################################################################
 */

const SarahAmazingSvg = props => {
  useEffect(() => {
    const master = new TimelineMax();
    if (props.setMaster) props.setMaster(master);

    // hack setTimeout because I'm an awful developer and can't be bothered to
    // do React properly and use ref
    setTimeout(() => {
      const sh = document.querySelector(`.${styles.shadow}`);
      const model = document.querySelectorAll(`.${styles.model}`);
      const ltP = document.querySelector(`.${styles.ltPaths}`);
      const main = document.querySelector(`.${styles.main}`);
      const dotsA = document.querySelector(`.${styles.dots}`);
      const dots = document.querySelectorAll(`.${styles.dots} path`);
      const stP = document.querySelector(`.${styles.strongPaths}`);
      const polygons = document.querySelectorAll(`.${styles.main} polygon`);

      TweenMax.set([dots, ltP, stP, main, dotsA, sh], {
        visibility: "visible"
      });

      TweenMax.set(dots, { opacity: 0 });

      TweenMax.set([ltP, stP], {
        drawSVG: "0% -5%"
      });

      // the first scene
      function sceneOne() {
        const tl = new TimelineMax();

        tl.add("start");
        tl.staggerFromTo(
          dots,
          1.5,
          { opacity: 0, transformOrigin: "50% 50%", scale: 0 },
          {
            opacity: 0.6,
            scale: 1.2,
            transformOrigin: "50% 50%",
            ease: Elastic.easeOut
          },
          0.05,
          "start"
        )
          .staggerTo(
            dots,
            1,
            {
              opacity: 1,
              scale: 1,
              transformOrigin: "50% 50%",
              ease: Elastic.easeOut
            },
            0.05,
            "start+=2.5"
          )
          .fromTo(
            main,
            4,
            { opacity: 0, transformOrigin: "50% 50%", scale: 0.5 },
            {
              opacity: 0.4,
              transformOrigin: "50% 50%",
              scale: 0.9,
              ease: Back.easeOut
            },
            "start+=2"
          )
          .staggerFromTo(
            polygons,
            0.85,
            { transformOrigin: "50% 50%", opacity: 0, scale: 0, rotation: 45 },
            {
              transformOrigin: "50% 50%",
              opacity: 1,
              scale: 1,
              rotation: 0,
              ease: Back.easeOut
            },
            0.02,
            "start+=2"
          )
          .fromTo(
            ltP,
            4,
            { opacity: 0 },
            { opacity: 0.4, ease: Sine.easeOut },
            "start+=2"
          )
          .fromTo(
            ltP,
            100,
            { drawSVG: "0 0" },
            { drawSVG: true, ease: Sine.easeOut },
            "start+=2"
          )
          .fromTo(
            stP,
            5,
            { drawSVG: "0 0" },
            { drawSVG: true, ease: Sine.easeOut },
            "start+=1"
          )
          .fromTo(
            sh,
            3,
            { opacity: 0, transformOrigin: "50% 50%", scale: 0 },
            {
              opacity: 0.8,
              transformOrigin: "50% 50%",
              scale: 1,
              ease: Back.easeOut
            },
            "start+=2"
          )
          .to(
            main,
            6,
            { rotation: 360 },
            { rotation: 180, transformOrigin: "50% 50%", ease: Elastic.easeIn },
            "start+=2"
          )
          .to(main, 1, { opacity: 0.6, ease: Sine.easeIn }, "start+=6")
          .to(main, 1, { opacity: 0.9, ease: Sine.easeOut }, "start+=7")
          .to(main, 1.5, { opacity: 0.6, ease: Sine.easeOut }, "start+=8")
          .to(main, 1, { opacity: 0.9, ease: Sine.easeOut }, "start+=9.5")
          .staggerFromTo(
            dots,
            0.75,
            { opacity: 1, scale: 1, transformOrigin: "50% 50%" },
            {
              opacity: 0.7,
              scale: 0.7,
              transformOrigin: "50% 50%",
              ease: Elastic.easeIn
            },
            0.05,
            "start+=6"
          )
          .staggerTo(
            dots,
            0.75,
            {
              opacity: 1,
              scale: 1,
              transformOrigin: "50% 50%",
              ease: Elastic.easeOut
            },
            0.05,
            "start+=7"
          );

        return tl;
      }

      master.add(sceneOne(), "scene1");

      master.seek("pulse");
    }, 500);

    return () => {
      // be sure to stop any animations from attempting to run if we skip through
      // the slide before the animation finishes!
      master.stop();
    };
  }, []);

  return (
    <svg
      className={styles.mid}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 677 427.7"
    >
      <radialGradient
        id="shadow_1_"
        cx="3337.4"
        cy="53557.7"
        r="155.4"
        fx="3449.4"
        fy="53546.1"
        gradientTransform="matrix(0.773 0.6344 -0.0855 0.1042 2234.0835 -7382.4531)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#231F20" />
        <stop offset="0.1" style={{ stopColor: "#262626", stopOpacity: 0.4 }} />
        <stop offset="0.3" style={{ stopColor: "#555555", stopOpacity: 0.3 }} />
        <stop offset="1" style={{ stopColor: "#222222", stopOpacity: 0 }} />
      </radialGradient>
      <path
        className={styles.shadow}
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#shadow_1_)"
        d="M358.9 417.4c-7.5 9.1-68.5-28.5-136.2-84.1 -67.7-55.6-116.6-108.1-109.1-117.2 7.5-9.1 68.5 28.5 136.2 84.1C317.6 355.8 366.4 408.3 358.9 417.4z"
      />
      <g className={styles.model}>
        <radialGradient
          id="lt-paths_1_"
          cx="7968.7"
          cy="-3320.7"
          r="1227.8"
          gradientTransform="matrix(-0.4839 0.8959 -0.8839 -0.4694 1459.918 -8063.0488)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.3" stopColor="#D7E1F2" />
          <stop offset="1" stopColor="#1F1B26" />
        </radialGradient>
        <path
          className={styles.ltPaths}
          stroke="url(#lt-paths_1_)"
          d="M353.9 53.8c-3.9-7.3-8-14.9-12.1-22.9 0 0 0 0 0 0 -16-4.5-30.5-9.1-44.3-13.3 -6.4-3.7-12.7-7.3-18.8-11 0 0 0 0 0 0.1 0 0 0 0 0 0 1.1 25.8 0.9 49.4-0.3 71.2 -13 27.4-29.1 54.5-49.3 81 0 0 0 0 0 0 0 0 0 0 0 0h0c-10.5 35.6-23.3 66-36.2 93.6 0 0 0 0 0 0 0 0 0 0 0 0 17 15.4 35.6 31.6 55.5 51.6 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 22 7.5 42.6 17 62 28.4 9.7 10.4 19.4 21.9 29 34.4l0 0c0 0 0 0 0.1 0 18.3-3.5 34.7-7.7 50.8-13.4l0 0 0 0c9.9-11.3 20.2-23.2 31.6-35.8 7.8-8 16-16.2 25-24.8 0 0 0 0 0 0 4.3-11.3 9.1-22.3 14.3-32.9 0 0 0 0 0 0 0 0 0 0 0 0 -1.4-4-2.9-7.9-4.4-11.8 6-18.1 12.7-34.9 19.8-50.8 0 0 0 0 0 0 0 0 0 0 0 0 -10.2-17.9-21.7-34.5-34.4-52.4l0 0 0 0c-14.6-19.6-30.6-40.8-48.2-67.1l0 0c0 0 0 0 0 0C380 70.7 366.6 62.7 353.9 53.8zM249 304.2c6.5 1.1 12.9 2.3 19.1 3.6 23.8 5 45.3 11.7 65.2 19.4 13.4 4.8 26.1 10.1 38.2 15.5 2.6 1.2 5.2 2.4 7.8 3.6 -8-0.4-16.2-0.9-24.7-1.5 -8.9-0.6-18.1-1.4-27.8-2.1 -1.9-1.3-3.9-2.6-5.9-3.8C298.7 324.7 274.7 313.1 249 304.2zM469.7 194.5c-3.9-1.6-7.8-3.3-11.6-5 -11.7-10.6-23.7-21.2-36-32.6 6.4-3.9 13-7.8 20-11.8 12.7 17.8 24.1 34.4 34.3 52.2C474.2 196.4 472 195.5 469.7 194.5zM414.4 302.3c-2.5-5-5-9.8-7.5-14.5 16.7-7.9 34.2-17 54-27.6 -15.1 19.1-28 38.3-39 57.5C419.4 312.4 416.9 307.3 414.4 302.3zM410.8 154c3.7 1 7.4 1.9 11.1 2.8 -25.4 11.8-47.4 23.2-69.1 34.6 -18.2-24.8-36.5-50.3-54.5-82.1C333 126.8 369.6 142.9 410.8 154zM388.1 129.2c11.2 10 22.5 19.1 33.8 27.6 -45.7-11.1-85.6-28.5-123.2-47.4 27.1 5.7 54.9 12.4 86.4 17.2C386.1 127.4 387.1 128.3 388.1 129.2zM422.3 157.1c12.2 11.3 24.1 21.9 35.7 32.4 -7.9 3.7-15.5 7.2-22.8 10.6 -3.9-14.7-8.2-28.8-13-43.1C422.2 157.1 422.2 157.1 422.3 157.1zM399.6 197.5c-16-1.7-31.4-3.8-46.6-6 21.6-11.4 43.7-22.7 69-34.5 4.9 14.4 9.2 28.5 13.1 43.2C422.9 199.6 411.1 198.7 399.6 197.5zM360.6 192.7c23.8 3.4 48.1 6.4 74.5 7.6 -11 26.8-20.9 55.6-28.2 87.4 -17.5-37.1-35.6-66.1-53.9-96.1C355.5 191.9 358.1 192.3 360.6 192.7zM333.2 327c-27.8-35.8-55.4-61.8-81.6-85.2 38.9-18 69.6-34.1 101.1-50.2C344.5 234.6 335.7 277.2 333.2 327zM262.1 218.7c14.5-33.3 27.4-69.1 36.2-109.4 17.9 31.8 36.3 57.4 54.5 82.1 -31.5 16-62.2 32.2-101.1 50.2C255.2 234.1 258.7 226.5 262.1 218.7zM385.4 126.6c17.9 7.3 36.7 13.5 56.6 18.4 -1.4 0.8-2.7 1.6-4.1 2.3 -5.4 3.2-10.7 6.3-15.9 9.4 -0.3-0.3-0.7-0.5-1-0.8C409.1 147 397.2 137.3 385.4 126.6zM364.1 312.2c-10 5.3-20.1 10.2-30.8 14.8 0.2-4.5 0.5-9 0.8-13.4 3.2-44.2 11.2-82.9 18.7-122 18.3 30 36.4 59 53.9 96.1C392.1 296.7 378.2 304.8 364.1 312.2zM248.5 304.1c-0.3-21.1 1.1-41.3 3.2-62.2 15.2 13.7 31 28.2 46.9 45 11.4 12 23 25.3 34.6 40.2C308 317.3 280.2 309.2 248.5 304.1zM314.1 71.7c17.3 6.3 35.5 12.4 55.4 17.9 2.1 5 4.2 9.9 6.2 14.7 3.2 7.7 6.3 15 9.3 22.1 -31.6-4.8-59.5-11.5-86.8-17.2 -3.9-14.7-8-30.5-12.3-47.9C295.1 64.7 304.5 68.2 314.1 71.7zM392.6 86.7c-2.1 13.5-4.7 26.6-7.5 39.6 -4.8-11.5-10-23.7-15.5-36.8 1.2-0.6 2.4-1.2 3.5-1.8 6.7-3.3 13.6-6.6 20.8-9.7C393.5 81 393 83.9 392.6 86.7zM421.8 317.8c-11.4 12.5-21.7 24.4-31.5 35.7 -3.5-2.4-7.1-4.8-10.7-7.2 0 0 0 0 0 0v0c-14.1-6.5-28.9-12.9-44.7-18.6 -0.5-0.2-1-0.4-1.5-0.5 11.9-5.2 23.2-10.8 34.4-16.7 12.9-6.9 25.6-14.3 39-22.5 3.7 6.9 7.4 14.1 11 21.7C419.2 312.2 420.5 315 421.8 317.8zM232 172.9c-1-4.6-1.9-9.2-2.9-14 26.7-18.6 48.5-34.9 69-49.5 -10.8 49.7-27.9 92.5-46.6 132.3C243.8 219.9 237.5 198.2 232 172.9zM229.3 158.6c20.1-26.4 36.1-53.4 49.1-80.7l0 0c2.6-5.5 5.1-11.1 7.5-16.6 4.3 17.4 8.4 33.2 12.3 47.9C277.8 123.7 255.9 140.1 229.3 158.6zM302.7 24.3c20.7 25.6 42.9 47.1 66.6 65.1 -16.4-4.5-31.7-9.5-46.2-14.6 -12.8-4.5-25.1-9.2-37.1-13.6 4.5-14.2 8.4-28.7 11.6-43.4C299.2 20 301 22.2 302.7 24.3zM364.2 72.3c-3.3-5.9-6.7-11.9-10.2-18.3 12.6 8.8 25.9 16.8 39.8 23.9 -7.2 3.2-14 6.4-20.7 9.7C370.2 82.7 367.2 77.6 364.2 72.3zM394 78.1c17.5 26.1 33.5 47.3 48 66.8 -12.2-3-24-6.5-35.4-10.4 -7.3-2.5-14.4-5.2-21.4-8.1 2.3-10.5 4.4-21.2 6.3-32C392.4 89 393.2 83.6 394 78.1zM456.7 248.1c-6.7-17.3-13.8-32.9-21.5-47.9 7.3-3.4 14.9-7 22.9-10.7 5.2 2.3 10.5 4.6 15.8 6.8 0.9 0.4 1.7 0.7 2.6 1.1C469.3 213.3 462.7 230.1 456.7 248.1zM461 260c-19.9 10.6-37.4 19.7-54.1 27.6 7.4-31.8 17.2-60.5 28.2-87.3 0.8 1.5 1.5 3 2.3 4.5 6.8 13.6 13.2 27.8 19.3 43.5l0 0C458.1 252.1 459.6 256 461 260zM422.1 317.4c0.7-1.2 1.4-2.5 2.2-3.7 10.5-17.7 22.5-35.5 36.6-53.3 -5.1 10.5-9.8 21.4-14.1 32.5C438 301.4 429.8 309.6 422.1 317.4zM339.5 366.9c-4.3-8.4-8.5-16.4-12.6-24.1 19.1 1.4 36.3 2.8 52.7 3.6 3.4 2.2 6.7 4.5 10 6.7 0.2 0.1 0.3 0.2 0.5 0.4C374.1 359.1 357.7 363.4 339.5 366.9zM339.2 366.5c-9.5-12.3-19-23.6-28.5-33.8 5.5 3.2 10.8 6.6 16.1 10.1 1 2 2.1 3.9 3.2 5.9C333 354.4 336 360.4 339.2 366.5zM193 252.5c21.3-4.5 40.6-7.9 58.5-10.7 -0.3 2.8-0.5 5.5-0.8 8.3 -1.6 18-2.6 35.6-2.4 53.9C228.5 284 209.9 267.8 193 252.5zM229.1 159.1c6.1 31.5 13.2 57.1 22.4 82.7 -17.9 2.7-37.2 6.2-58.5 10.7C205.9 224.8 218.7 194.5 229.1 159.1zM278.4 77.6c1.1-21.5 1.4-44.8 0.3-70.3 0.3 1.9 0.6 3.9 0.8 5.8 2.5 17.1 4.5 33.1 6.3 48 -0.6 1.5-1.3 3-2 4.5C282.1 69.7 280.3 73.7 278.4 77.6zM297.4 17.7c-1.5 6.9-3.1 13.7-4.9 20.4 -2 7.7-4.2 15.3-6.6 22.9 -1.4-12.2-3.1-25.1-5-38.7 -0.7-5.1-1.4-10.2-2.2-15.5C284.8 10.4 291 14 297.4 17.7zM341.8 31c10.9 21.3 21.3 39.9 31.3 56.7 -1.2 0.6-2.4 1.2-3.5 1.8 -25.7-19.5-49.7-43.2-71.9-71.7C311.4 21.9 325.9 26.5 341.8 31z"
        />
        <g className={styles.main} opacity="0.7">
          <radialGradient
            id="SVGID_1_"
            cx="3419.2"
            cy="1045.5"
            r="222.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <radialGradient
            id="SVGID_2_"
            cx="3468.1"
            cy="985.3"
            r="604.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_2_)"
            points="286.9 104.6 339.2 215.3 367.9 120.3 "
          />
          <radialGradient
            id="SVGID_3_"
            cx="3486.2"
            cy="1203.7"
            r="399.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_3_)"
            points="242.7 195 286.9 104.6 339.2 215.3 "
          />
          <radialGradient
            id="SVGID_4_"
            cx="3353"
            cy="1103.5"
            r="541.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_4_)"
            points="407.5 185.4 367.9 120.3 339.2 215.3 "
          />
          <radialGradient
            id="SVGID_5_"
            cx="3301.9"
            cy="1014"
            r="417.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_5_)"
            points="405.8 230.2 407.5 185.4 339.2 215.3 "
          />
          <radialGradient
            id="SVGID_6_"
            cx="3509.7"
            cy="1351.8"
            r="498.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_6_)"
            points="307.1 296 339.2 215.3 405.8 230.2 "
          />
          <radialGradient
            id="SVGID_7_"
            cx="3184.7"
            cy="1479.6"
            r="475.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_7_)"
            points="242.7 195 339.2 215.3 307.1 296 "
          />
          <radialGradient
            id="SVGID_8_"
            cx="3276.3"
            cy="1379.5"
            r="233.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_8_)"
            points="237.3 277.6 242.7 195 307.1 296 "
          />
          <radialGradient
            id="SVGID_9_"
            cx="3181.5"
            cy="1308.1"
            r="143.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_9_)"
            points="201.6 202 242.7 195 237.3 277.6 "
          />
          <radialGradient
            id="SVGID_10_"
            cx="3094.2"
            cy="1376.2"
            r="293.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_10_)"
            points="226.1 135.5 242.7 195 201.6 202 "
          />
          <radialGradient
            id="SVGID_11_"
            cx="3064.3"
            cy="1277.2"
            r="323.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_11_)"
            points="286.9 104.6 226.1 135.5 242.7 195 "
          />
          <radialGradient
            id="SVGID_12_"
            cx="3236.8"
            cy="837.1"
            r="303.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_12_)"
            points="326.9 85.3 286.9 104.6 226.1 135.5 276.1 93.8 "
          />
          <radialGradient
            id="SVGID_13_"
            cx="3399.9"
            cy="1351.7"
            r="151.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_13_)"
            points="305.2 330.5 307.1 296 237.3 277.6 "
          />
          <radialGradient
            id="SVGID_14_"
            cx="3626.8"
            cy="1266.5"
            r="379.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_14_)"
            points="405.8 230.2 383.5 265.8 307.1 296 "
          />
          <radialGradient
            id="SVGID_15_"
            cx="3546.9"
            cy="1326.2"
            r="183.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_15_)"
            points="329.4 354.2 305.2 330.5 380.5 298.6 "
          />
          <radialGradient
            id="SVGID_16_"
            cx="3451.1"
            cy="1353.9"
            r="242.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_16_)"
            points="383.5 265.8 380.5 298.6 305.2 330.5 307.1 296 "
          />
          <radialGradient
            id="SVGID_17_"
            cx="3370.1"
            cy="1301.7"
            r="36.9"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_17_)"
            points="310.4 362.5 305.2 330.5 293.7 321.5 "
          />
          <radialGradient
            id="SVGID_18_"
            cx="3570.6"
            cy="1359"
            r="258.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_18_)"
            points="329.4 354.2 305.2 330.5 310.4 362.5 "
          />
          <radialGradient
            id="SVGID_19_"
            cx="3530.1"
            cy="1069.3"
            r="133.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_19_)"
            points="380.5 298.6 404.9 304.8 383.5 265.8 "
          />
          <radialGradient
            id="SVGID_20_"
            cx="3587.7"
            cy="1432.3"
            r="357.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_20_)"
            points="373.1 342.5 384.2 299.6 380.5 298.6 329.4 354.2 "
          />
          <radialGradient
            id="SVGID_21_"
            cx="3523.2"
            cy="1222.6"
            r="96.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_21_)"
            points="404.9 304.8 384.2 299.6 377.3 326.4 "
          />
          <radialGradient
            id="SVGID_22_"
            cx="3628.8"
            cy="1182.3"
            r="261.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_22_)"
            points="405.8 230.2 423.2 236.6 383.5 265.8 "
          />
          <radialGradient
            id="SVGID_23_"
            cx="3574.9"
            cy="983"
            r="305.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_23_)"
            points="404.9 304.8 383.5 265.8 423.2 236.6 "
          />
          <radialGradient
            id="SVGID_24_"
            cx="3411.9"
            cy="1090"
            r="205.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_24_)"
            points="367.9 120.3 377 95.8 420.4 125.8 "
          />
          <radialGradient
            id="SVGID_25_"
            cx="3421.2"
            cy="1106.7"
            r="328.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_25_)"
            points="286.9 104.6 326.9 85.3 336.3 79.2 377 95.8 367.9 120.3 "
          />
          <radialGradient
            id="SVGID_26_"
            cx="3154.9"
            cy="1123.8"
            r="61.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_26_)"
            points="279.9 75.9 276.1 93.8 264.9 103.1 "
          />
          <radialGradient
            id="SVGID_27_"
            cx="3060"
            cy="977.7"
            r="302.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_27_)"
            points="336.3 79.2 326.9 85.3 276.1 93.8 279.9 75.9 "
          />
          <radialGradient
            id="SVGID_28_"
            cx="3322.4"
            cy="885.5"
            r="184"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_28_)"
            points="420.4 125.8 377 95.8 404.5 106 "
          />
          <radialGradient
            id="SVGID_29_"
            cx="3432.9"
            cy="1116.3"
            r="344.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_29_)"
            points="407.5 185.4 420.4 125.8 367.9 120.3 "
          />
          <radialGradient
            id="SVGID_30_"
            cx="3479.5"
            cy="992.6"
            r="160.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_30_)"
            points="426.5 188.5 407.5 185.4 405.8 230.2 "
          />
          <radialGradient
            id="SVGID_31_"
            cx="3446.5"
            cy="932.9"
            r="256.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_31_)"
            points="438.7 174.8 426.5 188.5 407.5 185.4 418.1 136.5 "
          />
          <radialGradient
            id="SVGID_32_"
            cx="3614.6"
            cy="965.7"
            r="299.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            fill="url(#SVGID_32_)"
            points="423.2 236.6 438.7 174.8 426.5 188.5 405.8 230.2 "
          />
        </g>
        <radialGradient
          id="strong-paths_1_"
          cx="3561.1"
          cy="686.3"
          r="495.6"
          gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.3" stopColor="#D7E1F2" />
          <stop offset="1" stopColor="#1F1B26" />
        </radialGradient>
        <path
          className={styles.strongPaths}
          fill="url(#strong-paths_1_)"
          d="M425.5 301.4v0l0 0 10-76.7 0 0 0 0 7.8-69.4 0 0v0l-27.9-38.5 1-12 0 0 0 0 -20.2-19.2 0 0 -31.3-7 -46.6-12.1 0 0v0l-61.7 4.6 0 0 0 0 -12.3 31.7 -37.5 40.8v0 0h0l-17 75.7 0 0v0l49.7 76.9h0v0 0l67.7 39.5 24.1 42h0l0.1 0 19.4-11.8 45.8-19 0 0 2.2-18L425.5 301.4zM251.2 95.3l3.9-4.2 27.3-8.4 26.3-8.1 -7.2 4.7 -33.2 21.8 -48.5 33.4 -12.6 8.7L251.2 95.3zM443.2 155.5l-7.8 69.1 -19.8-4.4 16.5-48.3 7.1-10.5L443.2 155.5zM364.9 78.6l51.3 26.1 -57.5 1.7 3.1-13.9L364.9 78.6zM318.1 305.8l23-92.1 74.3 6.5 -7.9 7L318.1 305.8zM396.6 262.1l-78.2 43.6 97-85.3 -17.3 38.3L396.6 262.1zM415.6 220l-4.6-48.6 21 0.5 -16.4 47.9L415.6 220zM411 171.5l4.6 48.7 -74.3-6.5 40.5-24.6L411 171.5zM341.2 213.6l17.4-107.1 52.3 64.8 -62.9 38.1L341.2 213.6zM341 213.7l-107.5-8 34.8-104.4L341 213.7zM233.6 205.8l107.5 8 -23.1 92.1 -68.4-81.1L233.6 205.8zM415.1 221.5l0.5-1.2 15.9 3.6 3.9 0.9 -38.6 37.2L415.1 221.5zM358.6 106.5l-17.5 107.1 -66.1-102.2 -6.6-10.2 37.4 2.2L358.6 106.5zM268.2 101.2l-14.5 43.5 -20.2 60.8 -26.6-62L268.2 101.2zM321 343.6l-2.9-37.6 78.5-43.8 0.9 22.2 0.6 13.8 -49.4 29.1L321 343.6zM425.4 301.3l-23.1-2.7 -4.1-0.5 -1.5-35.9 23.7 32.1L425.4 301.3zM363.2 85.9l-4.6 20.5 -48.2-2.8 -41.9-2.5 1.2-0.8 39.3-25.9 0 0 0 0 9.2-8 46.5 12.1L363.2 85.9zM233.6 205.9l84.4 100.1 -78.3-9.8 -0.9-13.8L233.6 205.9zM318 306l2.9 37.6 -13.7-8 0 0 -67.5-39.4L318 306zM350.6 365.8l-29.6-22.1 36-21.2 40.9-24.1 -43.6 62.2L350.6 365.8zM402.3 298.8l23.1 2.7 -26.7 27.3 1.9-15.7L402.3 298.8zM416 288.3l-19.3-26.1 15.1-14.5 23.7-22.8 -10 76.4L416 288.3zM443.3 155.3l-1.6 2.3 -9.6 14.3 -21-0.5 4.4-54.4L443.3 155.3zM415.4 116.8L415.4 116.8l-4 49.1 -0.4 5.4 -52.3-64.8 57.6-1.7L415.4 116.8zM396.2 85.6l20 18.9 -47.5-24.2 -3.3-1.7L396.2 85.6zM318.1 66.4l-0.4 0.4 -8.7 7.5 -53.9 16.6 1.5-19.9L318.1 66.4zM255.4 85.9l-0.4 5.1 -10.6 11.5 12-31.2L255.4 85.9zM206.8 143.7l23.1 53.8 3.5 8.2 -43.5 13.5L206.8 143.7zM189.9 219.3l43.6-13.5 6 90.2L189.9 219.3zM317.2 341.6l3.7 2.2 9.2 30.2 1 3.4 -23.8-41.5L317.2 341.6zM331.3 377.6l-2.8-9.1 -7.5-24.7 15.7 11.8 13.8 10.3L331.3 377.6zM350.8 365.8l47.3-67.5 4.1 0.5 -5.8 48.1L350.8 365.8z"
        />
        <g className={styles.dots}>
          <radialGradient
            id="SVGID_33_"
            cx="3182.3"
            cy="924.9"
            r="203.4"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_33_)"
            d="M280.4 8.4c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.4-3.5 0.9-1.1 2.4-1.2 3.5-0.3C281.2 5.8 281.3 7.3 280.4 8.4z"
          />
          <radialGradient
            id="SVGID_34_"
            cx="3060.2"
            cy="1012.4"
            r="180.9"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_34_)"
            d="M258.4 72.9c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C259.1 70.2 259.3 71.8 258.4 72.9z"
          />
          <radialGradient
            id="SVGID_35_"
            cx="3438.5"
            cy="1013.7"
            r="361.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_35_)"
            d="M210.5 146.7c-1.7 2.1-4.9 2.4-7 0.7 -2.1-1.7-2.4-4.9-0.7-7 1.7-2.1 4.9-2.4 7-0.7C212 141.5 212.3 144.6 210.5 146.7z"
          />
          <radialGradient
            id="SVGID_36_"
            cx="3374.7"
            cy="1123.8"
            r="105"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_36_)"
            d="M191.8 220.8c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.4-3.5 0.9-1.1 2.4-1.2 3.5-0.3C192.5 218.2 192.7 219.8 191.8 220.8z"
          />
          <radialGradient
            id="SVGID_37_"
            cx="3277.7"
            cy="1151.4"
            r="67"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_37_)"
            d="M235.4 207.4c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C236.1 204.7 236.3 206.3 235.4 207.4z"
          />
          <radialGradient
            id="SVGID_38_"
            cx="3419.6"
            cy="940.5"
            r="172.4"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_38_)"
            d="M367.2 80.2c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C367.9 77.6 368 79.2 367.2 80.2z"
          />
          <radialGradient
            id="SVGID_39_"
            cx="3464.5"
            cy="947.9"
            r="137.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_39_)"
            d="M418 106.1c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.4-3.5 0.9-1.1 2.4-1.2 3.5-0.3C418.8 103.5 418.9 105 418 106.1z"
          />
          <radialGradient
            id="SVGID_40_"
            cx="3246.5"
            cy="977.1"
            r="140.4"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_40_)"
            d="M342.6 31.7c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C342.9 30.6 343 31.2 342.6 31.7z"
          />
          <radialGradient
            id="SVGID_41_"
            cx="3199.6"
            cy="996"
            r="251.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_41_)"
            d="M299.4 19.2c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C299.8 17.7 299.9 18.6 299.4 19.2z"
          />
          <radialGradient
            id="SVGID_42_"
            cx="3222.1"
            cy="1021.5"
            r="37.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_42_)"
            d="M287 62.1c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C287.4 60.6 287.5 61.5 287 62.1z"
          />
          <radialGradient
            id="SVGID_43_"
            cx="3312.9"
            cy="986.3"
            r="294.9"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_43_)"
            d="M395.1 79c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C395.5 77.5 395.6 78.4 395.1 79z"
          />
          <radialGradient
            id="SVGID_44_"
            cx="3414.5"
            cy="936.8"
            r="92.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_44_)"
            d="M397.4 86.6c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C397.7 85.5 397.8 86.2 397.4 86.6z"
          />
          <radialGradient
            id="SVGID_45_"
            cx="3472.9"
            cy="965.4"
            r="299.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_45_)"
            d="M443.1 145.8c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C443.5 144.3 443.6 145.2 443.1 145.8z"
          />
          <radialGradient
            id="SVGID_46_"
            cx="3370.4"
            cy="1005.8"
            r="163.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_46_)"
            d="M256.1 91.8c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C256.5 90.4 256.6 91.2 256.1 91.8z"
          />
          <radialGradient
            id="SVGID_47_"
            cx="3492.6"
            cy="967.9"
            r="46.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_47_)"
            d="M359.8 107.4c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C360.2 105.9 360.3 106.8 359.8 107.4z"
          />
          <radialGradient
            id="SVGID_48_"
            cx="3436.4"
            cy="963.3"
            r="46.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_48_)"
            d="M318.8 67.7c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C319.1 66.2 319.2 67.1 318.8 67.7z"
          />
          <radialGradient
            id="SVGID_49_"
            cx="3406.4"
            cy="1226.6"
            r="141.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_49_)"
            d="M248.8 305c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C249.1 303.9 249.2 304.6 248.8 305z"
          />
          <radialGradient
            id="SVGID_50_"
            cx="3622.5"
            cy="1064.4"
            r="46.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_50_)"
            d="M398.3 263.8c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C398.7 262.3 398.8 263.2 398.3 263.8z"
          />
          <radialGradient
            id="SVGID_51_"
            cx="3562"
            cy="1035.1"
            r="34.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_51_)"
            d="M416.8 221.1c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.2C417.1 220 417.2 220.6 416.8 221.1z"
          />
          <radialGradient
            id="SVGID_52_"
            cx="3597.5"
            cy="1107.8"
            r="34.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_52_)"
            d="M398.3 299.8c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C398.6 298.7 398.6 299.3 398.3 299.8z"
          />
          <radialGradient
            id="SVGID_53_"
            cx="3591.7"
            cy="972.2"
            r="46.3"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_53_)"
            d="M433.1 172.9c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C433.5 171.4 433.6 172.3 433.1 172.9z"
          />
          <radialGradient
            id="SVGID_54_"
            cx="3579.2"
            cy="1026.2"
            r="34.7"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_54_)"
            d="M435.9 225c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C436.2 223.9 436.2 224.6 435.9 225z"
          />
          <radialGradient
            id="SVGID_55_"
            cx="3518.2"
            cy="1039"
            r="60"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_55_)"
            d="M343 215.2c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C343.7 212.5 343.9 214.1 343 215.2z"
          />
          <radialGradient
            id="SVGID_56_"
            cx="3224.7"
            cy="1053.8"
            r="192.9"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_56_)"
            d="M269.9 102.3c-0.7 0.8-1.8 0.9-2.6 0.3 -0.8-0.7-0.9-1.8-0.3-2.6 0.6-0.8 1.8-0.9 2.6-0.3C270.4 100.3 270.6 101.5 269.9 102.3z"
          />
          <radialGradient
            id="SVGID_57_"
            cx="3559.2"
            cy="918.5"
            r="226.4"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_57_)"
            d="M447.1 158.5c-1.7 2.1-4.9 2.4-7 0.7 -2.1-1.7-2.4-4.9-0.7-7 1.7-2.1 4.9-2.4 7-0.7C448.5 153.2 448.8 156.3 447.1 158.5z"
          />
          <radialGradient
            id="SVGID_58_"
            cx="3317.8"
            cy="1228.2"
            r="112.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_58_)"
            d="M193.8 253.1c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C194.1 251.9 194.2 252.6 193.8 253.1z"
          />
          <radialGradient
            id="SVGID_59_"
            cx="3477"
            cy="939.7"
            r="102"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_59_)"
            d="M412.9 172.8c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C413.6 170.2 413.8 171.8 412.9 172.8z"
          />
          <radialGradient
            id="SVGID_60_"
            cx="3581.3"
            cy="956.2"
            r="239.2"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_60_)"
            d="M427.3 303.5c-1.7 2.1-4.9 2.4-7 0.7 -2.1-1.7-2.4-4.9-0.7-7 1.7-2.1 4.9-2.4 7-0.7C428.8 298.2 429.1 301.4 427.3 303.5z"
          />
          <radialGradient
            id="SVGID_61_"
            cx="3551.5"
            cy="1195.4"
            r="92"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_61_)"
            d="M333.2 379.2c-0.9 1.1-2.4 1.2-3.5 0.4 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C333.9 376.6 334.1 378.2 333.2 379.2z"
          />
          <radialGradient
            id="SVGID_62_"
            cx="3579.9"
            cy="1113.8"
            r="53.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_62_)"
            d="M397.5 347.7c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C397.9 346.3 398 347.2 397.5 347.7z"
          />
          <radialGradient
            id="SVGID_63_"
            cx="3424.2"
            cy="1235.7"
            r="184.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_63_)"
            d="M321.7 344.1c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C322 343 322 343.7 321.7 344.1z"
          />
          <radialGradient
            id="SVGID_64_"
            cx="3557.2"
            cy="1157"
            r="53.6"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_64_)"
            d="M352.5 366.8c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C352.9 365.3 353 366.2 352.5 366.8z"
          />
          <radialGradient
            id="SVGID_65_"
            cx="3568"
            cy="1059"
            r="128.1"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_65_)"
            d="M321.9 309.2c-1.7 2.1-4.9 2.4-7 0.7 -2.1-1.7-2.4-4.9-0.7-7 1.7-2.1 4.9-2.4 7-0.7C323.3 303.9 323.6 307.1 321.9 309.2z"
          />
          <radialGradient
            id="SVGID_66_"
            cx="3498.1"
            cy="1156.4"
            r="234.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_66_)"
            d="M241.4 297.5c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.4-3.5 0.9-1.1 2.4-1.2 3.5-0.3C242.1 294.9 242.3 296.5 241.4 297.5z"
          />
          <radialGradient
            id="SVGID_67_"
            cx="3475.7"
            cy="1087.9"
            r="195.9"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_67_)"
            d="M461.9 261.3c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C462.3 259.8 462.4 260.7 461.9 261.3z"
          />
          <radialGradient
            id="SVGID_68_"
            cx="3442.5"
            cy="1022.7"
            r="114.8"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_68_)"
            d="M458.3 190.4c-0.4 0.4-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.4 1-0.5 1.5-0.1C458.6 189.3 458.6 189.9 458.3 190.4z"
          />
          <radialGradient
            id="SVGID_69_"
            cx="3486.2"
            cy="1123.1"
            r="266.4"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_69_)"
            d="M448.3 294.1c-0.5 0.6-1.4 0.7-2 0.2 -0.6-0.5-0.7-1.4-0.2-2 0.5-0.6 1.4-0.7 2-0.2C448.8 292.6 448.8 293.5 448.3 294.1z"
          />
          <radialGradient
            id="SVGID_70_"
            cx="3559"
            cy="1094.7"
            r="221.5"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_70_)"
            d="M422.9 318.1c-0.4 0.5-1 0.5-1.5 0.1 -0.4-0.4-0.5-1-0.1-1.5 0.4-0.5 1-0.5 1.5-0.1C423.2 317 423.3 317.7 422.9 318.1z"
          />
          <radialGradient
            id="SVGID_71_"
            cx="3522.4"
            cy="988.7"
            r="261"
            gradientTransform="matrix(0.773 0.6344 -0.6344 0.773 -1539.9824 -2784.0322)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.3" stopColor="#D7E1F2" />
            <stop offset="1" stopColor="#1F1B26" />
          </radialGradient>
          <path
            fill="url(#SVGID_71_)"
            d="M478.4 199c-0.9 1.1-2.4 1.2-3.5 0.3 -1.1-0.9-1.2-2.4-0.3-3.5 0.9-1.1 2.4-1.2 3.5-0.3C479.1 196.4 479.2 198 478.4 199z"
          />
        </g>
      </g>
    </svg>
  );
};

export const ForwardsBackwards = () => {
  const [master, setMaster] = useState(null);

  return (
    <div className={styles.forwardsBackwards}>
      <SarahAmazingSvg setMaster={setMaster} />
      <button onClick={() => master.pause()}>Pause</button>
      <button onClick={() => master.play()}>Play</button>
      <button onClick={() => master.reverse()}>Reverse</button>
    </div>
  );
};

export default SarahAmazingSvg;
