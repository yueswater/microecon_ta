document$.subscribe(() => {
  document.querySelectorAll("form.quiz").forEach((form, idx) => {
    const answer = form.dataset.answer;
    const feedback = form.nextElementSibling;
    form.querySelectorAll("input[type=radio]").forEach(input => {
      input.addEventListener("change", () => {
        const selected = form.querySelector("input[type=radio]:checked")?.value;
        feedback.innerHTML = "";

        if (selected === answer) {
          feedback.innerHTML = `<span class="correct">✅ 恭喜你，答對了！</span>`;
        } else {
          feedback.innerHTML = `<span class="wrong">❌ 再想想看喔～</span>`;
        }
      });
    });
  });
});
