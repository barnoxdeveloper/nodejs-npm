import { writeToFile } from "./write.js";

writeToFile("hello.log", "Hello Wordl");

console.info("hello world");

export function sayHello(name) {
    console.info(name);
}
