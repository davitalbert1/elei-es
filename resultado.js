const resultados = {
    "Candidato A": 20,
    "Candidato B": 30,
    "Candidato C": 15,
    "Candidato D": 35
  };

  // create a Chart.js graph
  const ctx = document.getElementById("eleicao").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(resultados),
      datasets: [{
        label: "Votos",
        data: Object.values(resultados),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "Resultados de eleição."
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });