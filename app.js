const $ = document;
const bodyElem = $.body;

const radioBtns = $.querySelectorAll("#radio-btn-points");
const submitBtn = $.querySelector(".submit-btn");

let checkedRadioBtn = 0;
submitBtn.addEventListener("click", () => {
  findCheckedRadio();
  if (checkedRadioBtn) {
    CreateDomContent();
  } else {
    if (submitBtn.previousElementSibling.className === "rate-btns") {
      submitBtn.insertAdjacentHTML(
        "beforebegin",
        '<p class="not-selected">* Please selcet an option!</p>'
      );
    }
  }
});

const findCheckedRadio = () => {
  radioBtns.forEach((radioBtn) => {
    if (radioBtn.checked === true) {
      checkedRadioBtn = radioBtn.value;
    }
  });
};

const CreateDomContent = () => {
  bodyElem.insertAdjacentHTML(
    "beforeend",
    `<div class="thank-message wrapper">
      <img class="thank-img" src="assets/images/illustration-thank-you.svg" alt="" />
      <p class="thank-rating">You selected <span>${checkedRadioBtn}</span> out of 5</p>
      
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, dont
        hesitate to get in touch!
      </p>
      </div>`
  );
};
