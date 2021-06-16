import faker from "faker";

// the userData array contains information taken
// from faker.js library

const userData = [];

for (let i = 0; i < 15; i++) {
  userData.push({
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    createdTimeStamp: faker.date.past(),
    isAdmin: faker.datatype.number() % 2 === 1 ? true : false,
  });
}

export default userData;
