//Part 1:Number Facts
//Make a request to API and return a fact in JSON format


// let favNumber = 4; //list fav numbers
// let baseURL = "http://numbersapi.com"; //server from database to me

// async function fetchFact() {
//     try {
//         let response = await fetch(`${baseURL}/${favNumber}?json`); //fetch data
//         let data = await response.json(); //converts response to JSON 
//         document.getElementById("fact").innerText = data.text; //display fact 
//     } catch (error) {
//         console.log("Error fetching data for part1:", error);
//         document.getElementById("fact").innerText = "Failed to load fact."; //display error
//     }
// }
// fetchFact(); //calls
// //add event listener to the button
// document.getElementById("getFact").addEventListener("click", fetchFact); //event listener to add trigger on button to display fact


//Axios is an API for sending HTTP requests and handling responses. And supports Promise-based behavior, async/await syntax,
//  let response = await axios.get(`${baseURL}/${favNumber}?json`);

// How This Works
// User clicks the button (#getFact).
// fetchFact() is called.
// Fetch request is sent to http://numbersapi.com/5?json.
// API responds with a JSON object (e.g., { "text": "5 is the number of fingers on a hand.", ... }).
// The fact is displayed inside the <p> tag.



//2. 
//Get multiple responses by passing in an array in single request
//switch up numbers in the let favNumber = array


// const favNumbers = [7, 11, 9];
// let baseURL2 = "http://numbersapi.com";
// async function fetchMultipleFacts() {
//     try {
//         let response = await fetch(`${baseURL}/${favNumbers.join(",")}?json`); //modify API to request multiple numbers
//         let data = await response.json(); //convert response to JSON

//         let factsContainer = document.getElementById("fact");
//         factsContainer.innerHTML = ""; //clear previous facts

//         //Loop thru returned data to create <p> elements to display each fact in paragraphs 
//         for (let num in data) {
//             let factParagraph = document.createElement("p");
//             factParagraph.innerText = `${data[num]}`; //Foramt the fact
//             factsContainer.appendChild(factParagraph);
//         }

//     }catch (error) {
//         console.log("Error fetching data for part2:", error);
//         document.getElementById("fact").innerText = "Failed to load fact.";
//     }

// }
// // Event listener for button click
// document.getElementById("getFact").addEventListener("click", fetchMultipleFacts);


//3. 
//Get 4 facts about your favorite number then display them on the page
let favoriteNumber = 9; //defined my favorite number to fatch facts
let baseURL3 = "http://numbersapi.com"; //API link
let numFacts = 4; //we want to fetch 4 responses

//Function to fetch multiple facts abt my favorite number
async function fetchFourFacts() {
    try {
        let factsContainer = document.getElementById("fact"); //get <p> container
        factsContainer.innerHTML = ""; //clear previous facts before displaying new ones
        let factRequests = []; //Store multiple fetch promises

        //loop to make multiple requests (API normally only gives 1 fact)
        for (let i = 0; i < numFacts; i++) {
            factRequests.push(fetch(`${baseURL3}/${favoriteNumber}?json`).then(res => res.json()));
        }
        //use Promise.all to wait for all fetch requests to be complete
        let responses = await Promise.all(factRequests);
        
        //loop thru each response and display each fact
        responses.forEach(data => {
            let factParagraph = document.createElement("p"); //create a <p> element
            factParagraph.innerText = `${data.text}`; //set fact text
            factsContainer.appendChild(factParagraph); //append to container
        });
    }catch(error) {
        console.log("Error fetching data:", error); //log any errors
        document.getElementById("fact").innerText = "Failed to load facts" //display an error

    }
}
//add event listener to button to fetch facts when clicked
document.getElementById("getFact").addEventListener("click", fetchFourFacts);
 




// //add event listener to the button
// document.getElementById("getFact").addEventListener("click", fetchFact);

//My code on my own- Didnt work
// function fetchNumbersAPI() {
//     //fetch() returns a promise
//     // Fetch data from Numbers API for a specific number (e.g., 7) and request JSON format
//     fetch("http://numbersapi.com/7?json")
//     .then(response => {
//         //convert to JSON
//         return response.json(); 
//     })
//     .then(data => {
//         //logs fetched data
//         console.log(data);
//     })
//     .catch(error => {
//         //handles any errors
//         console.error('Error fetching data', error); 
//     });
// }

// fetchNumbersAPI();

