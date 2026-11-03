const form = document.querySelector("#ticketForm");
const section = document.querySelector("section")
const type = document.querySelector("#type");
const eventDate = document.querySelector("#eventDate")
const addition = document.querySelector("#addition")
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

type.addEventListener("change", function (event) {
  event.preventDefault();

  if(form.type.value == "student") {
      addition.innerHTML = `
          <div class="field full">
              <label for="newCategory">Student I#</label>
              <input id="newCategory" name="newCategory" type="textbox" maxlength="9" required />
          </div>
      `;
  }
  
  else if(form.type.value == "guest") {
    addition.innerHTML = `
        <div class="field full">
            <label for="newCategory">Access Code</label>
            <input id="newCategory" name="newCategory" type="textbox" required />
        </div>
    `;
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.innerHTML = ""

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const newCategory = form.newCategory.value;

  if(type == "student" && newCategory.length != 9) {
    output.textContent = "Student I# must be 9 digits."
    return;
  }
  else if(type == "guest" && newCategory != "EVENT131") {
    console.log("Confirmed")
    output.textContent = "The access code is invalid."
    return;
  }

  else if (isPastDate(eventDate.value)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  else {
    output.innerHTML = `
    <h2>Preference Submitted</h2>
    <br>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Student/Guest: ${type}</p>
    <p>Date: ${eventDate.value}</p>
    `;
  }
});