import React, { MouseEvent } from "react";

let grab: boolean = false;
let startPos: number;
let leftScroll: number;

export const forMouseDown = (event: MouseEvent<HTMLElement>) => {
  const carousel: Element = document.querySelector(".carousel")!;
  event.preventDefault();
  grab = true;
  startPos = event.pageX - carousel.getClientRects()[0].left;
  leftScroll = carousel.scrollLeft;
};

export const forMouseLeave = (event: MouseEvent<HTMLElement>) => {
  grab = false;
};

export const forMouseUp = (event: MouseEvent<HTMLElement>) => {
  grab = false;
};

export const forMouseMove = (event: MouseEvent<HTMLElement>) => {
  const carousel: Element = document.querySelector(".carousel")!;
  event.preventDefault();

  if (grab) {
    const currentPos = event.pageX - carousel.getClientRects()[0].left;
    const distance = currentPos - startPos;
    carousel.scrollLeft = leftScroll - distance;
  }
};
