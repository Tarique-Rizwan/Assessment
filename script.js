const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
    {
    id: 4,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 5,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 6,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
    {
    id: 7,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 8,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 9,
    text: "Bananas contain potassium, and because potassium decays, the yellow fruit becomes slightly radioactive.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 10,
    text: "Our genome contains up to 145 genes mutated from bacteria, fungi, other single-celled organisms, and viruses.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 11,
    text: "Sound travels four times faster in water than it does in air.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 12,
    text: "Wearing headphones for an hour multiplies the bacteria in your ear by 700.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 13,
    text: "The adult human body has 206 bones, while a child’s developing body has 300.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 14,
    text: "Motor neurons are the longest cells in the human body. ",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    id: 15,
    text: "The giant salamander is the world’s largest amphibian.",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "science",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  }
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const domain = ["technology","society","science"];

// Smooth scroll to specific div on click
document.querySelector('#technology').addEventListener('click', event => {
  document.querySelector('#green').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('#society').addEventListener('click', event => {
  document.querySelector('#blue').scrollIntoView({behavior: 'smooth'})
})

document.querySelector('#science').addEventListener('click', event => {
  document.querySelector('#grey').scrollIntoView({behavior: 'smooth'})
})

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
// const factsList = document.querySelector(".facts-list");
const factsLists = document.querySelectorAll(".facts-list");
//console.log(factsLists)
let i = 0
for (; i < factsLists.length; i++) {
  factsLists[i].innerHTML = "";

  // Filter and render data according to category
  const filteredData = initialFacts.filter((fact) => fact.category === domain[i]);

  createFactsList(filteredData);
}


function createFactsList(dataArray) {

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  
  factsLists[i].insertAdjacentHTML("afterbegin", html);
}


// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
