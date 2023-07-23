const findTheOldest = function (people) {
    const oldest = people.reduce((obj, person) => {
        if ('yearOfDeath' in person) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        return (obj.age > person.age) ? obj : person;
    }, {});

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
