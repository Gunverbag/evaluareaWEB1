function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({имя: 'Алиса', возраст: 25}));
console.log(objectToArray({город: 'Нью-Йорк', страна: 'США'}));
