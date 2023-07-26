const dataValues = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 41.07,
  },
  {
    day: "fri",
    amount: 43.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const values = document.querySelectorAll("#valuesPerDay");
const columns = document.querySelectorAll(".column");
let index = 0;
let amountValues = [];

values.forEach((val) => {
  val.textContent = `$${dataValues[index].amount}`;
  amountValues.push(dataValues[index].amount);
  index++;
});

let testeNumber;
for (let i = 0; i < amountValues.length; i++) {
  columns[i].style.backgroundColor = "#ec775f";

  columns[i].style.height = `${Math.round(amountValues[i])}%`;
  columns[i].value = Math.round(amountValues[i]);

  if (testeNumber == null) {
    testeNumber = columns[i];
    continue;
  } else {
    if (testeNumber.value > columns[i].value) {
      columns[i].style.backgroundColor = "#ec775f";
      testeNumber.style.backgroundColor = "#76b5bc";
    } else {
      testeNumber = columns[i];
    }
  }
}
