const order1 = document.querySelector('[data-key="order1"]'); // Get references to the root elements of each order section
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

const biscuits1 = order1.querySelector(".biscuits .count"); // Access individual item elements within each order section
const donuts1 = order1.querySelector(".donuts .count");
const pancakes1 = order1.querySelector(".pancakes .count");
const status1 = order1.querySelector(".status dd");

const biscuits2 = order2.querySelector(".biscuits .count");
const donuts2 = order2.querySelector(".donuts .count");
const pancakes2 = order2.querySelector(".pancakes .count");
const status2 = order2.querySelector(".status dd");

const biscuits3 = order3.querySelector(".biscuits .count");
const donuts3 = order3.querySelector(".donuts .count");
const pancakes3 = order3.querySelector(".pancakes .count");
const status3 = order3.querySelector(".status dd");

biscuits1.textContent = order1.getAttribute("data-biscuits"); // Update the content of each item element with the data attributes
donuts1.textContent = order1.getAttribute("data-donuts");
pancakes1.textContent = order1.getAttribute("data-pancakes");
status1.textContent =
  order1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

biscuits2.textContent = order2.getAttribute("data-biscuits");
donuts2.textContent = order2.getAttribute("data-donuts");
pancakes2.textContent = order2.getAttribute("data-pancakes");
status2.textContent =
  order2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";

biscuits3.textContent = order3.getAttribute("data-biscuits");
donuts3.textContent = order3.getAttribute("data-donuts");
pancakes3.textContent = order3.getAttribute("data-pancakes");
status3.textContent =
  order3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";
