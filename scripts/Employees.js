import { Orders } from "./Orders.js";
import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li
              data-type="employee"
              data-id="${employee.id}"
              data-name="${employee.name}"
              >${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "employee") {
    const id = itemClicked.dataset.id;
    const employeeName = itemClicked.dataset.name;

    let itemCounter = 0;

    const orders = getOrders();
    for (const order of orders) {
      if (parseInt(id) === order.employeeId) {
        itemCounter++;
      }
    }
    window.alert(`${employeeName} sold ${itemCounter} products`);
  }
});
