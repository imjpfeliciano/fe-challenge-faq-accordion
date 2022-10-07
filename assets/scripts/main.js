const ITEM_SELECTED_CLASS = "active";
const faqElements = Array.from(document.getElementsByClassName("faq-item"));

faqElements.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle(ITEM_SELECTED_CLASS);

    const answer = item.getElementsByClassName("faq-answer")[0];
    answer.classList.toggle(ITEM_SELECTED_CLASS);

    const control = item.getElementsByClassName("faq-control")[0];
    control.classList.toggle(ITEM_SELECTED_CLASS);
  });
});
