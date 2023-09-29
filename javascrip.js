const array = [12, 55, 88, 99, 15, 1, 6, 95, 15, 14, 14, 14, 99, 6, 6, 12, 55, 88];

const arrayCpy = array.slice(0, array.length + 1);

//dao nguoc mang
console.log(arrayCpy)
const array1 = [];
for(let i = array.length - 1; i>=0; i--) {
    array1.push(array[i]);
}
console.log('Mang dao nguoc: ', array1);

//tim so lon thu 2 trong mang
//sap xep
let cache;
for(let i=0; i<arrayCpy.length; i++) {
    for(let j=i+1; j<arrayCpy.length; j++) {
        arrayCpy[i] < arrayCpy[j] ? ( cache = arrayCpy[j], arrayCpy[j] = arrayCpy[i], arrayCpy[i] = cache) : undefined; 
    }
}
console.log('Mang sau khi sap xep: ', arrayCpy)

//tim so lon thu 2
const a = arrayCpy[0];
const Number2 = 0;
for(let i=1; i<arrayCpy.length; i++) {
    if(a === arrayCpy[i]) {}
    else {
        console.log('So thu 2 lon nhat: ', arrayCpy[i]);
        break;
    }
}

//tim chuoi con co tong lon nhat

let maxAve =0;
let largeArray = [];
for(let i=1; i<=array.length; i++) {
    for(let j = 0; j < array.length; j++) {
        let sum =0;
        let cacheArray = [];
        for(let z = 0; z < i; z++) {
            sum = sum + array[j + z];
            cacheArray.push(array[j + z]);
        }
        let ave = sum / i;
        ave > maxAve ? (maxAve = ave, largeArray = cacheArray) : undefined;
    }
}
console.log(`Mảng lớn nhất là: ${largeArray} với giá trị trung bình cộng là ${maxAve}`);

//loai bo phan tu trung lap
for(let j=0; j < array.length; j++){
    for(let i = j+1; i < array.length; i++) {
        array[j] === array[i] ? (array.splice(i, 1), i = i-1) : undefined;
    }
}

console.log('Mang sau khi loai bo gia tri trung lap: ', array);


//-----------------------------------------------------------------------------------//
const users = [
    { id: 'john', name: "John Doe", age: 25 },
    { id: 'jane', name: "Jane Smith", age: 28 },
    { id: 'susan', name: "Susan Johnson", age: 22 },
    { id: 'michael', name: "Michael Brown", age: 30 },
    { id: 'emily', name: "Emily Davis", age: 35 },
    { id: 'david', name: "David Wilson", age: 29 },
    { id: 'sarah', name: "Sarah Martinez", age: 27 },
    { id: 'robert', name: "Robert Taylor", age: 26 },
    { id: 'linda', name: "Linda Anderson", age: 32 },
    { id: 'william', name: "William Thomas", age: 21 }
  ];


//Tinh tong tuoi va tuoi trung binh
//reduce
const totalAgeByReduce = users.reduce((sum, user) => sum + user.age, 0)
console.log('Tổng tuổi sử dụng reduce: ', totalAgeByReduce);
console.log('Tuổi trung bình sử dụng reduce: ', totalAgeByReduce / users.length);

//map
const totalAgeByMap = users.map((user) => user.age).reduce((sum, age) => sum + age, 0);
console.log('Tổng tuổi sử dụng map: ', totalAgeByMap);
console.log('Tuổi trung bình sử dụng reduce: ', totalAgeByMap / users.length);

//filter
const totalAgeByFilter = users.filter(user => user.age > 0).map(user => user.age).reduce((sum, age) => sum + age, 0);
console.log('Tổng tuổi sử dụng filter: ', totalAgeByFilter);
console.log('Tuổi trung bình sử dụng reduce: ', totalAgeByFilter / users.length);


//Sap xep 
function xapxep(element, method_sort) {
    if(method_sort === true){
        if(element === 'id')
          users.sort(function(a, b){
            if (a.id < b.id) {return -1;}
            if (a.id > b.id) {return 1;}
            return 0;
        });
        if(element === 'name')
            users.sort(function(a, b){
            if (a.name < b.name) {return -1;}
            if (a.name > b.name) {return 1;}
            return 0;
        });
        if(element === 'age')
            users.sort((a, b) => { 
            return a.age - b.age;
        });
    }

    else {
        if(element === 'id')
        users.sort(function(a, b){
        if (a.id > b.id) {return -1;}
        if (a.id < b.id) {return 1;}
        return 0;
    });
    if(element === 'name')
        users.sort(function(a, b){
        if (a.name > b.name) {return -1;}
        if (a.name < b.name) {return 1;}
        return 0;
    });
    if(element === 'age')
        users.sort((a, b) => { 
        return b.age - a.age;
    });
    }
}

// xapxep('id', true);
// console.log(users);

// cat chuoi map
const arrayFirst = users.map((user, index) => index < 5 ? user : undefined).filter(user => user !== undefined ? user : undefined);
const arraySecond = users.map((user, index) => index >= 5 ? user : undefined).filter(user => user !== undefined ? user : undefined);

console.log(arrayFirst, arraySecond);

// cat chuoi reduce
const arrayThird = users.reduce((previus, currentVallue, index) => {
    index < 5 ? previus[0].push(currentVallue) : undefined;
    index >= 5 ? previus[1].push(currentVallue) : undefined;
    return previus;
}, [[], []]);
console.log(arrayThird);

//cat chuoi filter
const arrayFour = users.filter((user, index) => index < 5 ? user : undefined);
const arrayFive = users.filter((user, index) => index >= 5? user : undefined);
console.log(arrayFour, arrayFive);

//cat chuoi for
const arraySix = [], arraySeven = [];
for(let i of users) 
    users.indexOf(i) < 5 ? arraySix.push(i) : arraySeven.push(i);
console.log(arraySix, arraySeven);

//Cat chuoi bang cach khac
const arrayCut = function arrayCut(users, index1, index2) {
    const array = [[], []];
    for(let i=index1; i < index2; i++){
        array[0].push(users[i]);
        users.splice(i, 1);
    }
    array[1] = users;
    return array;
}
console.log(arrayCut(users, 0, 5));