const emailCollectorForm = document.getElementById("email-collector");
const main = document.querySelector("main");
emailCollectorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const confirmedMessage = `
  <div class="intro">
      </div>
            <div class="main-content">
       <img
          src="../images/mtblogosm.jpg"
          alt="mike the bartender logo"
          class="logo"
        />
          <h1>Welcome aboard ${firstName}!</h1>

        <p>You will receive an alert when Mike's website goes live.</p>
        <p>He will be sharing unseen photos, drink recipes
  and providing a video tour from inside the resort. </p>
  <p class="fine-print">Mike will never share any of your personal deets without your permission. </p>
  </div>

  `;
  main.innerHTML = confirmedMessage;
});
