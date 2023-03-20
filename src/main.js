import "css-free-style/build/reset.min.css";
import App from "./App.svelte";
import "./styles/reset.scss";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
