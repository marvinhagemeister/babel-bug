import { Foo } from "x-dummy-package";

class Baz extends Foo {
  run() {
    console.log("I'm Baz")
  }
}

const a = new Baz();
console.log(a);
