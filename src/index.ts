import { fromEvent } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap,
  filter
} from "rxjs/operators";
import { search } from "./api";
import "./styles.css";
import { hideLoader, renderApiResponse, showLoader } from "./ui";

const input = document.querySelector("input[type=search");

const query$ = fromEvent<KeyboardEvent>(input, "input").pipe(
  map(event => (event.target as HTMLInputElement).value.trim()),
  distinctUntilChanged(),
  debounceTime(800)
);

const result$ = query$.pipe(
  filter(q => q !== ""),
  tap(() => {
    showLoader();
  }),
  switchMap(search)
);

result$.subscribe({
  next: response => {
    hideLoader();
    renderApiResponse(response);
  },
  error: console.error
});
