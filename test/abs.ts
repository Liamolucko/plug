import { resolve } from "../test_deps.ts";
import { run } from "./helpers.ts";

await run(resolve("./test_plugin/target/debug"));
