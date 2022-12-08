const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var nameElem = document.getElementById("name");
    var emailElem = document.getElementById("email");
    var messageElem = document.getElementById("message");

    var name = nameElem.value;
    var email = emailElem.value;
    var message = messageElem.value;

    if (!name.length || !email.length || !message.length) {
      nameElem.classList.add("input-error");
      emailElem.classList.add("input-error");
      messageElem.classList.add("input-error");
      return;
    }

    if (!emailRegex.test(email)) {
      emailElem.classList.add("input-error");
      return;
    }

    if (message.length < 4) {
      messageElem.classList.add("input-error");
      return;
    }

    alert(
      "Thank you for your message, we will reach you as soon as possible !"
    );
  });
