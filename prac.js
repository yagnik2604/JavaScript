const intervalId = setInterval(() => {
    console.log("Runs every 1 second");
  }, 1000);
  


  // Stop after 5 seconds
  setTimeout(() => {
    clearInterval(intervalId);
  }, 5000);
  


  