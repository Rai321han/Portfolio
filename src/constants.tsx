import {
  CSS_ICON,
  HTML_ICON,
  JEST_ICON,
  JS_ICON,
  REACT_ICON,
  REDUX_ICON,
  TAILWIND_ICON,
  TS_ICON,
} from "./components/icons";

// name
export const JS = "js";
export const REACT = "react";
export const CSS = "css";
export const TAILWIND = "tailwind";
export const TS = "ts";
export const JEST = "jest";
export const REDUX = "redux";
export const HTML = "html";

export const iconMap = {
  js: JS_ICON,
  react: REACT_ICON,
  css: CSS_ICON,
  tailwind: TAILWIND_ICON,
  ts: TS_ICON,
  jest: JEST_ICON,
  redux: REDUX_ICON,
  html: HTML_ICON,
};

export type TechStack = keyof typeof iconMap;
