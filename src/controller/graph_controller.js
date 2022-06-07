import Chart from "chart.js/auto";
async function showBarChart(ctx, products) {
  let productMap = {};
  await products.forEach((element) => {
    let pro_name = element.product_name;
    if (Object.prototype.hasOwnProperty.call(productMap, pro_name)) {
      //checking if already key is added
      productMap[pro_name] = productMap[pro_name] + element.quantity;
    } else {
      productMap[pro_name] = element.quantity;
    }
  });
  let lables = Object.keys(productMap); //sorting key
  let values = Object.values(productMap); //sorting value
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: lables,
      datasets: [
        {
          label: "# of Votes",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  myChart;
}
export default showBarChart;
