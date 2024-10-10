

document.addEventListener("DOMContentLoaded", function () {
    const countdownTimer = document.getElementById("countdown-timer");
    const messageBox = document.getElementById("message-box"); // Message box element for displaying success/error messages
  
    if (countdownTimer) {
      let timerDuration = parseInt(countdownTimer.getAttribute("data-timer"), 10);
      const timeRemainingEl = document.getElementById("time-remaining");
  
      const updateTimer = () => {
        const minutes = Math.floor(timerDuration / 60);
        const seconds = timerDuration % 60;
        timeRemainingEl.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        if (timerDuration > 0) {
          timerDuration--;
        } else {
          clearInterval(intervalId);
          timeRemainingEl.innerHTML = "Time's up!";
          showMessage("Timer has ended successfully!", "success");
        }
      };
  
      const intervalId = setInterval(updateTimer, 1000);
      updateTimer();
  
      // Simulate a successful operation (e.g., API call)
      performOperation()
        .then(response => {
          showMessage("Operation was successful!", "success");
        })
        .catch(error => {
          showMessage("An error occurred: " + error.message, "error");
        });
    }
  
    // Function to show success or error message
    function showMessage(message, type) {
      if (messageBox) {
        messageBox.style.display = "block";
        messageBox.innerHTML = message;
        messageBox.style.backgroundColor = type === "success" ? "#d4edda" : "#f8d7da";
        messageBox.style.color = type === "success" ? "#155724" : "#721c24";
      }
    }
  
    // Sample async function to simulate an API call or any other operation
    async function performOperation() {
      // Simulating an API call delay
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccessful = Math.random() > 0.5; // Randomly decide if it's successful or not
          if (isSuccessful) {
            resolve({ message: "Success" });
          } else {
            reject(new Error("Something went wrong"));
          }
        }, 2000);
      });
    }
  });
  
  