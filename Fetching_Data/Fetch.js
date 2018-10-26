const url = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
const stuffList = document.querySelector('.champlist');
const title = document.querySelector('.title');

// Empty array the JSON data from the url is supposed to be push() into; I ended up pushing the data in,
// but I did not use the array in displaying the data in the DOM, instead I used localStorage
var cities = [];

// Example JSON files I made locally to display in the DOM
const testFile = {
        name: "Jon",
        height: "5ft.5in.",
        weight: "130lbs."
}

const testFile1 = {
        name: "Johnny",
        height: "5ft.5in.",
        weight: "130lbs."
}

const testFile2 = {
        name: "Jonathan",
        height: "5ft.5in.",
        weight: "130lbs."
}

// Array of the JSON examples above
const test = [testFile, testFile1, testFile2];
// JSON.stringify(test);
// test.toString();
// testFile.toString();
console.log(test);

// Stored in localStorage
localStorage.setItem('items',JSON.stringify(test));

// -------------------------------------------------------------- //

// JSON file from remote url
console.log(url);

// Fetching function; instead of using the array of data resulting from the below fetch and then push functions,
// I directly stored the data from the fetch in localStorage; from there, I pulled the data from localStorage,
// and used that in the DOM display process, instead of the array "cities"
var fetchUrl = fetch(url)
.then(blob => blob.json())
.then(data => {
        cities.push(...data);
        localStorage.setItem('cities', JSON.stringify(data));
        return data;
});

console.log(fetchUrl);

// Storing remote JSON data in const, from localStorage; called "flatCities", because this array of data can do what a
// flattened version of the "users" array can do
const flatCities = JSON.parse(localStorage.getItem('cities'));
console.log(flatCities);

// onClick anywhere in the window, the function will display in the DOM an unordered list of each person from the test
// JSON files (Jon, Johnny and Jonathan), and all the city names from the remote JSON file; the formatting does not look
// the best, due to the commas in the lists remaining there
var showName = function() {
    // Pulling test JSON data from localStorage
    const people = JSON.parse(localStorage.getItem('items'));
    console.log(people);
    // Creating the "output" variable, adding list items of people's names
    var output = people.map(person => {
            const personName = person.name;
            return `<li>${personName}</li>`;
    })
    // Adding to the "output" variable; adds on the names of the cities in the remote JSON file
    const indvFlatCities = flatCities.map(flatCity => {
            return `<li>${flatCity.city}</li>`;
    })
    output = output + indvFlatCities;

    // Puts the "output" variable into the list
    stuffList.innerHTML = output;

    //     const output = people.map(person => {
//         const indvFlatCity = flatCities.map(flatCity => {
//                 return " " + flatCity.city;
//         })
//         const personName = person.name;
//         return `<li>${personName}</li>
//                 <li>${indvFlatCity}</li>`
//     })
}

window.addEventListener('click', showName);

// var stringUsers = users.map(user => {
//         return JSON.stringify(user);
// })
// console.log(stringUsers);
// var flatUsers = users.flat();
// console.log(flatUsers);

// console.log(users);

// var flatUsers;
// console.log(flatUsers);
// localStorage.setItem('users', JSON.stringify(fetchUrl));

//     people.forEach(person => {
//             const personName = person.name;
//             const output = `<li>${personName}</li>`;
//             champList.innerHTML = output;
//     })

// for (let i = 0; users.length; i += 1) {
// let newListItem = document.createElement('li');
// newListItem.setAttribute('class', 'paragraph');
// newListItem.innerHTML = "hi";
// champList.appendChild(newListItem);
// console.log(newListItem);
// console.log("works");
// }