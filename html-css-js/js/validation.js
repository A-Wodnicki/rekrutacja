const f = document.querySelector("form");

function isNameValid(name) {
  const pattern = /^[A-Z][a-z]+$/;
  return pattern.test(name);
}

f.addEventListener("submit", function (e) {
  const checkboxesSection = document.querySelector(".sections-checkboxes");

  document.querySelectorAll(".validation").forEach((e) => e.remove());

  if (!(isNameValid(f.firstName.value) && isNameValid(f.lastName.value))) {
    if (!isNameValid(f.firstName.value))
      f.firstName.insertAdjacentHTML(
        "afterend",
        "<span class='validation'>Imię powinno składać się z jednej wielkiej litery i co najmniej jednej małej litery</span>"
      );
    else
      f.lastName.insertAdjacentHTML(
        "afterend",
        "<span class='validation'>Nazwisko powinno składać się z jednej wielkiej litery i co najmnej jednej małej litery</span>"
      );
    e.preventDefault();
    return;
  }

  if (f.email.value === "") {
    f.email.insertAdjacentHTML(
      "afterend",
      "<span class='validation'>Proszę wypełnić to pole</span>"
    );
    e.preventDefault();
    return;
  }

  if (!Array.prototype.some.call(f.section, (checkbox) => checkbox.checked)) {
    checkboxesSection.insertAdjacentHTML(
      "afterend",
      "<span class='validation'>Proszę zaznaczyć przynajmniej jedną pozycję</span>"
    );
    e.preventDefault();
    return;
  }
});
