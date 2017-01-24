import { observable } from "mobx";
import { SimpleForm } from "mobx-form-reactions";

class TestForm extends SimpleForm {

}

class Model {
  @observable foo = "";
}

// Works
const foo = new SimpleForm(new Model());

// Doesn't work
const bar = new TestForm(new Model());
