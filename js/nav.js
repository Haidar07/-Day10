function burger() {
            const x = document.getElementById("hamburger-menu-list");
            if (x.style.display === "none") {
              x.style.display = "flex";
            } else {
              x.style.display = "none";
            }
          }