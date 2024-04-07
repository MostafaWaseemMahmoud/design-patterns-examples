const log = (function () {
  //private Var And Funcs

  const text = "Any_Text";
  const logText = function () {
    console.log(text);
  };

  return {
    callTextLog: function () {
      logText();
    },
  };
})();

log.callTextLog();
