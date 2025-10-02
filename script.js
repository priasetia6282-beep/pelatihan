
function ubahNama() {
      let input = document.getElementById("inputNama").value;
      if (input.trim() !== "") {
        document.getElementById("nama").textContent = input;
        document.getElementById("inputNama").value = "";
      } else {
        alert("Isi dulu nama barunya!");
      }
    }

    function sapa() {
      let nama = document.getElementById("nama").textContent;
      alert("Halo, " + nama + " 👋");
    }
