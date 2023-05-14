// Données initiales du tableau
var initialData = [
    { nom: "John Doe", email: "john@example.com" },
    { nom: "Jane Smith", email: "jane@example.com" }
  ];
  
  // Fonction pour générer les lignes du tableau
  function generateTableRows(data) {
    var rows = "";
    for (var i = 0; i < data.length; i++) {
      rows += "<tr>";
      rows += "<td>" + data[i].nom + "</td>";
      rows += "<td>" + data[i].email + "</td>";
      rows += "</tr>";
    }
    return rows;
  }
  
  // Fonction pour ajouter une nouvelle ligne au tableau
  function addTableRow(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name-input");
    var numberInput = document.getElementById("number-input");
    var name = nameInput.value;
    var number = numberInput.value;
  
    if (name && number) {
      var newRow = "<tr><td>" + name + "</td><td>" + number + "</td><td>" + additional + "</td></tr>";
      var tableBody = document.getElementById("table-body");
      tableBody.innerHTML += newRow;
  
      nameInput.value = "";
      numberInput.value = "";
      additionalInput.value = "";
  
      var data = JSON.parse(localStorage.getItem("tableData")) || [];
      data.push({ nom: name, chiffre: number, champSupplementaire: additional }); // Utilisez "champSupplementaire" pour le champ supplémentaire
      localStorage.setItem("tableData", JSON.stringify(data));
    }
  }
  


  function addTableRow(event) {
    event.preventDefault();
    var nameInput = document.getElementById("name-input");
    var numberInput = document.getElementById("number-input");
    var name = nameInput.value;
    var number = numberInput.value;

  
    if (name && number) {
      var newRow = "<tr><td>" + name + "</td><td>" + number + "</td></tr>";
      var tableBody = document.getElementById("table-body");
      tableBody.innerHTML += newRow;
  
      nameInput.value = "";
      numberInput.value = "";
  
      // Sauvegarder les données dans le localStorage
      var data = JSON.parse(localStorage.getItem("tableData")) || [];
      data.push({ nom: name, email: number }); // Utiliser "email" au lieu de "chiffre"
      localStorage.setItem("tableData", JSON.stringify(data));
    }
  }
  
  
  
  
  // Événement de soumission du formulaire pour ajouter une ligne
  var addForm = document.getElementById("add-form");
  addForm.addEventListener("submit", addTableRow);
  
  // Générer les lignes initiales du tableau
  var tableBody = document.getElementById("table-body");
  tableBody.innerHTML = generateTableRows(initialData);

  window.addEventListener("load", function() {
    var data = JSON.parse(localStorage.getItem("tableData")) || [];
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = generateTableRows(data); // Utilisez generateTableRows pour inclure le champ supplémentaire
  });
  




  // Fonction pour réinitialiser les données
function resetTable() {
    localStorage.removeItem("tableData");
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
  }
  
  // Gestionnaire d'événement pour le bouton de réinitialisation
  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetTable);
  



  const rangeInput = document.getElementById('rangeInput');
  const targetElement = document.querySelector('body');
  
  rangeInput.addEventListener('input', function() {
    const hueValue = rangeInput.value;
    const colorValue = `hsl(${hueValue}, 100%, 50%)`;
  
    targetElement.classList.remove('change-color');
    targetElement.style.backgroundColor = colorValue;
  });
  
  
  