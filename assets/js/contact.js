(function () {
  "use strict";

  function initMap() {
    const mapEl = document.getElementById("map");
    if (!mapEl || typeof L === "undefined") return;

    const map = L.map("map", {
      scrollWheelZoom: false,
    }).setView([52.0907, 5.1214], 11);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    const marker = L.marker([52.0907, 5.1214]).addTo(map);
    marker.bindPopup("<strong>Utrecht, Nederland</strong><br>Regio waar ik werk en studeer.").openPopup();

    mapEl.addEventListener("click", function () {
      map.scrollWheelZoom.enable();
    });
  }

  function validateForm(form) {
    let valid = true;
    const fields = form.querySelectorAll("[required]");

    form.querySelectorAll(".form-error").forEach(function (el) {
      el.remove();
    });

    fields.forEach(function (field) {
      field.setAttribute("aria-invalid", "false");

      if (!field.value.trim()) {
        valid = false;
        showFieldError(field, "Dit veld is verplicht.");
        return;
      }

      if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        valid = false;
        showFieldError(field, "Voer een geldig e-mailadres in.");
      }
    });

    return valid;
  }

  function showFieldError(field, message) {
    field.setAttribute("aria-invalid", "true");
    const error = document.createElement("p");
    error.className = "form-error";
    error.textContent = message;
    error.setAttribute("role", "alert");
    field.parentNode.appendChild(error);
  }

  function initForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const statusEl = document.getElementById("form-status");
      if (statusEl) {
        statusEl.innerHTML = "";
        statusEl.className = "";
      }

      if (!validateForm(form)) return;

      const formData = new FormData(form);

      fetch("contact.php", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (statusEl) {
            if (data.success) {
              statusEl.className = "form-success";
              statusEl.textContent = "Bedankt! Je bericht is verzonden. Ik neem zo snel mogelijk contact op.";
              form.reset();
            } else {
              statusEl.className = "form-error-msg";
              statusEl.textContent = data.message || "Er ging iets mis. Probeer het later opnieuw.";
            }
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.className = "form-error-msg";
            statusEl.textContent =
              "Verzenden mislukt. Stuur je bericht direct naar abdulmalekalrajawy30@gmail.com";
          }
        });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMap();
    initForm();
  });
})();
