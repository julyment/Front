ask = (question, yes, no) => {
  if (confirm(question)) yes();
  no();
};
ask(
  "Вы согласны?",
  function () {
    alert("Вы согласились.");
  },
  function () {
    alert("Вы отменили выполнение.");
  }
);
