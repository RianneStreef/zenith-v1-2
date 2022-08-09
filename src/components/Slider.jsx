import React from "react";

import "../styles/Slider.css";

import { images } from "../content/slider.js";

const Slider = () => {
  const imagesList = images.map((image) => {
    return (
      <div key={image} className={`slide-image-container slide-${image}`}>
        <img src={image} className="slide-image" alt="" />
      </div>
    );
  });

  const imagesListEnd = images.slice(0, 1).map((image) => {
    return (
      <div key={image} className={`slide-image-container slide-${image}`}>
        <img src={image} className="slide-image" alt="" />
      </div>
    );
  });

  function setSliderLeft() {
    let slider = document.getElementById("image-slider");
    let sliderElement = document.getElementById("slider-element");
    let sliderContainer = document.getElementById("slider-container");
    let imageSize = (window.innerWidth / 100) * 90;
    let compStyles = window.getComputedStyle(slider);
    let leftMarginPX = compStyles.marginLeft;

    let leftMarginString = leftMarginPX.replace("px", "");
    let leftMargin = parseFloat(leftMarginString);

    sliderContainer.parentElement.removeChild(sliderContainer);

    if (leftMargin < 0 && leftMargin > -imageSize) {
      slider.style.setProperty("animation-delay", "-29s");
    }
    if (leftMargin < -imageSize && leftMargin > -2 * imageSize) {
      slider.style.setProperty("animation-delay", "-2s");
    }
    if (leftMargin < -2 * imageSize && leftMargin > -3 * imageSize) {
      slider.style.setProperty("animation-delay", "-5s");
    }
    if (leftMargin < -3 * imageSize && leftMargin > -4 * imageSize) {
      slider.style.setProperty("animation-delay", "-8s");
    }
    if (leftMargin < -4 * imageSize && leftMargin > -5 * imageSize) {
      slider.style.setProperty("animation-delay", "-11s");
    }
    if (leftMargin < -5 * imageSize && leftMargin > -6 * imageSize) {
      slider.style.setProperty("animation-delay", "-14s");
    }
    if (leftMargin < -6 * imageSize && leftMargin > -7 * imageSize) {
      slider.style.setProperty("animation-delay", "-17s");
    }
    if (leftMargin < -7 * imageSize && leftMargin > -8 * imageSize) {
      slider.style.setProperty("animation-delay", "-20s");
    }
    if (leftMargin < -8 * imageSize && leftMargin > -9 * imageSize) {
      slider.style.setProperty("animation-delay", "-23s");
    }
    if (leftMargin < -9 * imageSize && leftMargin > -10 * imageSize) {
      slider.style.setProperty("animation-delay", "-26s");
    }
    sliderElement.appendChild(sliderContainer);
  }

  function setSliderRight() {
    let slider = document.getElementById("image-slider");
    let sliderElement = document.getElementById("slider-element");
    let sliderContainer = document.getElementById("slider-container");

    let imageSize = (window.innerWidth / 100) * 90;
    let compStyles = window.getComputedStyle(slider);
    let leftMarginPX = compStyles.marginLeft;

    let leftMarginString = leftMarginPX.replace("px", "");
    let leftMargin = parseFloat(leftMarginString);

    sliderContainer.parentElement.removeChild(sliderContainer);

    if (leftMargin < 0 && leftMargin > -imageSize) {
      slider.style.setProperty("animation-delay", "-3s");
    }
    if (leftMargin < -imageSize && leftMargin > -2 * imageSize) {
      slider.style.setProperty("animation-delay", "-6s");
    }
    if (leftMargin < -2 * imageSize && leftMargin > -3 * imageSize) {
      slider.style.setProperty("animation-delay", "-9s");
    }
    if (leftMargin < -3 * imageSize && leftMargin > -4 * imageSize) {
      slider.style.setProperty("animation-delay", "-12s");
    }
    if (leftMargin < -4 * imageSize && leftMargin > -5 * imageSize) {
      slider.style.setProperty("animation-delay", "-15s");
    }
    if (leftMargin < -5 * imageSize && leftMargin > -6 * imageSize) {
      slider.style.setProperty("animation-delay", "-18s");
    }
    if (leftMargin < -6 * imageSize && leftMargin > -7 * imageSize) {
      slider.style.setProperty("animation-delay", "-21s");
    }
    if (leftMargin < -7 * imageSize && leftMargin > -8 * imageSize) {
      slider.style.setProperty("animation-delay", "-24s");
    }
    if (leftMargin < -8 * imageSize && leftMargin > -9 * imageSize) {
      slider.style.setProperty("animation-delay", "-27s");
    }
    if (leftMargin < -9 * imageSize && leftMargin > -10 * imageSize) {
      slider.style.setProperty("animation-delay", "0s");
    }

    sliderElement.appendChild(sliderContainer);
  }

  return (
    <div id="slider-element">
      <div className="slider-container  hidden-mobile" id="slider-container">
        <div className="control-container">
          <span
            className="controls control-left"
            id="control"
            onClick={() => setSliderLeft()}
          >
            &#60;
          </span>
          <span
            className="controls control-right"
            onClick={() => setSliderRight()}
          >
            &#62;
          </span>
        </div>
        <div className="image-slider" id="image-slider">
          {imagesList}
          {imagesListEnd}
        </div>
      </div>
    </div>
  );
};

export default Slider;
