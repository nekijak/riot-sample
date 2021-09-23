import { register, mount } from "riot";
import Parent from "./parent.riot";
import Child1 from "./child1.riot";
import Child2 from "./child2.riot";

register("my-child1", Child1);
register("my-child2", Child2);

register("my-parent", Parent);
mount("my-parent");

//component(Parent)(document.getElementById("root"));
