import axios from "axios";

const testDiv = document.querySelector("#test");

axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.data)
  .then((data) => {
    testDiv.innerHTML = JSON.stringify(data);
  });
