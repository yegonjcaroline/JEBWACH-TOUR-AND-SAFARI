"use strict";

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "Close Menu" : "Menu";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "Menu";
        });
    });
}

// Update the copyright year automatically
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Handle the tour enquiry form
const enquiryForm = document.getElementById("enquiryForm");
const formStatus = document.getElementById("formStatus");

if (enquiryForm && formStatus) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        formStatus.textContent =
            "Your form passed browser validation. No enquiry has been sent yet. Please contact the business directly until online form delivery is configured.";

        enquiryForm.reset();
    });
}