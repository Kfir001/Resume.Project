// Create this new file
function showModal(content) {
  const modal = document.getElementById("modal");
  const modalBody = modal.querySelector(".modal-body");

  // Remove close button from content
  modalBody.innerHTML = content;

  modal.classList.add("show");

  // Force reflow to trigger animation
  modal.offsetHeight;
  modal.querySelector(".modal-content").style.opacity = "1";
  modal.querySelector(".modal-content").style.transform = "scale(1)";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.querySelector(".modal-content").style.opacity = "0";
  modal.querySelector(".modal-content").style.transform = "scale(0.7)";

  setTimeout(() => {
    modal.classList.remove("show");
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const closeButton = modal.querySelector(".close-button");

  // Content for each section
  const sectionContent = {
    section1: {
      title: "כותרת ראשונה",
      content: "תוכן מפורט של הסעיף הראשון",
    },
    // Add more sections as needed
  };

  // Add click listeners to all section headings
  document.querySelectorAll(".section h2").forEach((heading) => {
    heading.style.cursor = "pointer";
    heading.addEventListener("click", function () {
      const sectionId = this.getAttribute("data-section");
      const content = sectionContent[sectionId];
      if (content) {
        showModal(`
                    <h2>${content.title}</h2>
                    <div>${content.content}</div>
                `);
      }
    });
  });

  // Add click listeners for items
  document
    .querySelectorAll(".experience-item, .education-item")
    .forEach((item) => {
      item.style.cursor = "pointer";
      item.addEventListener("click", function () {
        showModal(this.innerHTML);
      });
    });

  // Close modal handlers
  closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
