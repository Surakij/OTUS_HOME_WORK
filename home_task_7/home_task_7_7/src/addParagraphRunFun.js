import { smartMarkup } from "./addParagraph.js";

const { body } = document;
const el = body.querySelector(".wrapper");
body.append(el);
smartMarkup(el);
