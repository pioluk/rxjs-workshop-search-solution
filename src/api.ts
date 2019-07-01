import { from } from "rxjs";
import { delay } from "rxjs/operators";

const URL = `https://api-adresse.data.gouv.fr/search/?limit=10&type=locality&q=`;

function getQueryUrl(query: string): string {
  return URL + query;
}

export function search(query: string) {
  return from(fetch(getQueryUrl(query)).then(response => response.json())).pipe(
    delay(500)
  );
}
