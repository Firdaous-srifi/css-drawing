//***fetchiiing */
function fetchAndDisplayDrone() {
    fetch("dropdrone.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        displayBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }