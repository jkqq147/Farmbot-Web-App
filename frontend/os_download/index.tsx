import { render } from "react-dom";
import I from "i18next";
import { detectLanguage } from "../i18n";
import * as _React from "react";
import { createElement } from "react";
import { OsDownload } from "./content";

const node = document.createElement("DIV");
node.id = "root";
document.body.appendChild(node);
const domElem = document.getElementById("root");
const reactElem = createElement(OsDownload, {});

const ok = () => domElem && render(reactElem, domElem);

detectLanguage().then(conf => I.init(conf, ok));
