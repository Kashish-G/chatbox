const chatContainer = document.getElementById("chat-container");
const chatIcon = document.getElementById("chat-icon");
const chatInput = document.getElementById("chat-input");
const chatSendBtn = document.getElementById("chat-send-btn");
const chatMessages = document.getElementById("chat-messages");

// Show/hide chat window on click of chat icon
chatIcon.addEventListener("click", function() {
  chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
});

 // Get worker status elements
 const workerStatusDiv = document.querySelector("#worker-status");
 const statusText = document.querySelector("#status-text");



// Keep track of worker status
let workerStatus = "not hired";

// Send message on click of send button
chatSendBtn.addEventListener("click", function() {
  const message = chatInput.value;

  // Check if input is a number
  if (!isNaN(message)) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = message + " &nbsp; <i class='fas fa-check'></i> &nbsp; <i class='fas fa-times'></i>";
    chatMessages.appendChild(messageElement);

    // Add event listener for tick icon
    messageElement.querySelector(".fa-check").addEventListener("click", function() {
      const acceptMessage = document.createElement("div");
      acceptMessage.innerHTML = "Your offer is accepted";
      chatMessages.appendChild(acceptMessage);

      // Update worker status
      workerStatus = "hired";

      // Add green circle around tick icon
      this.classList.add("accepted");
    });

    // Add event listener for cross icon
    messageElement.querySelector(".fa-times").addEventListener("click", function() {
      const rejectMessage = document.createElement("div");
      rejectMessage.innerHTML = "Your offer is rejected";
      chatMessages.appendChild(rejectMessage);

      // Add red circle around cross icon
      this.classList.add("rejected");
    });

    // Clear input field
    chatInput.value = "";
  } else {
    alert("Please enter a valid number");
  }
});

  
  
