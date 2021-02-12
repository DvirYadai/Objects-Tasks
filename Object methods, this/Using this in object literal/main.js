function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

let asd = user.ref().name;
asd;
