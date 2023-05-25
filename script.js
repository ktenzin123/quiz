// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the capital of India?",
    a: [{
            text: "gandhinagar",
            isCorrect: false
        },
        {
            text: "Surat",
            isCorrect: false
        },
        {
            text: "Delhi",
            isCorrect: true
        },
        {
            text: "mumbai",
            isCorrect: false
        }
    ]

},
{
    id: 1,
    q: "What is the capital of Nepal?",
    a: [{
            text: "Lampang",
            isCorrect: false,
            isSelected: false
        },
        {
            text: "phuket",
            isCorrect: false
        },
        {
            text: "Dheli",
            isCorrect: false
        },
        {
            text: "Kathmandu",
            isCorrect: true
        }
    ]

},
{
    id: 2,
    q: "What is the capital of England?",
    a: [{
            text: "New York",
            isCorrect: false
        },
        {
            text: "Tokyo",
            isCorrect: false
        },
        {
            text: "London",
            isCorrect: true
        },
        {
            text: "rajkot",
            isCorrect: false
        }
    ]

},
{
    id: 3,
    q: "What is the capital of Australia?",
    a: [{
            text: "Melbourne",
            isCorrect: false
        },
        {
            text: "Sydney",
            isCorrect: false
        },
        {
            text: "Canberra",
            isCorrect: true
        },
        {
            text: "Perth",
            isCorrect: false
        }
    ]
},
{
    id: 4,
    q: "what is the biggest city in world?",
    a: [{
            text: "Brooklyn",
            isCorrect: false
        },
        {
            text: "Washington",
            isCorrect: false
        },
        {
            text: "NYC",
            isCorrect: true
        },
        {
            text: "Tokyo",
            isCorrect: false
        }
    ]
},
{
    id: 5,
    q: "What is the capital of Canada?",
    a: [{
            text: "Toronto",
            isCorrect: false
        },
        {
            text: "Ottawa",
            isCorrect: true
        },
        {
            text: "Vancouver",
            isCorrect: false
        },
        {
            text: "Montreal",
            isCorrect: false
        }
    ]
},
{
    id: 6,
    q: "What is the capital of Japan?",
    a: [{
            text: "Tokyo",
            isCorrect: true
        },
        {
            text: "Osaka",
            isCorrect: false
        },
        {
            text: "Kyoto",
            isCorrect: false
        },
        {
            text: "Hiroshima",
            isCorrect: false
        }
    ]
},
{
    id: 7,
    q: "What is the capital of France?",
    a: [{
            text: "Paris",
            isCorrect: true
        },
        {
            text: "Marseille",
            isCorrect: false
        },
        {
            text: "Lyon",
            isCorrect: false
        },
        {
            text: "Nice",
            isCorrect: false
        }
    ]
},
{
    id: 8,
    q: "What is the capital of USA?",
    a: [{
            text: "Washington D.C",
            isCorrect: true
        },
        {
            text: "NYC",
            isCorrect: false
        },
        {
            text: "Texas",
            isCorrect: false
        },
        {
            text: "Mumbai",
            isCorrect: false
        }
    ]
},
{
    id: 9,
    q: "What is the biggest mountain in the world?",
    a: [{
            text: "Mount Elgon",
            isCorrect: false
        },
        {
            text: "Mount Toubkal",
            isCorrect: false
        },
        {
            text: "Mount Everest",
            isCorrect: true
        },
        {
            text: "Mount Kazbek",
            isCorrect: false
        }
    ]
}
];

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");

// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
});

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
});

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
});

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
});

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "TRUE";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "FALSE";
        result[0].style.color = "red";
    }
});
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < Questions.length - 1) {
    id++;
    iterate(id);
    console.log(id);
}
});
