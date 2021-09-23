import { component } from "riot";
import Hello from "./hello.riot";

component(Hello)(document.getElementById("my-hello"), {
  message: "Hello World!"
});
