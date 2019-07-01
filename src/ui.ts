import { APIResponse, Feature } from "./types";

const list: HTMLElement = document.querySelector("ul");
const spinner: HTMLElement = document.querySelector(".lds-spinner");

export function renderApiResponse(response: APIResponse) {
  list.innerHTML = response.features.map(renderFeature).join("");
}

function renderFeature(feature: Feature) {
  return `<li>${feature.properties.label}</li>`;
}

export function showLoader() {
  spinner.style.display = "inline-block";
}

export function hideLoader() {
  spinner.style.display = "none";
}
