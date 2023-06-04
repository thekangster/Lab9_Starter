class MyError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "MyError"; // (2)
  }
}
function test() {
  TrackJS.track("Testing TrackJS!");
  throw new MyError("Whoops!");
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish
for (let b of errorBtns) {
  b.addEventListener("click", (_) => {
    let type = b.innerHTML;
    if (type === "Console Log") console.log("console log demo");
    else if (type === "Console Error") console.error("console error demo");
    else if (type === "Console Count") console.count("count");
    else if (type === "Console Warn") console.warn("console warn demo");
    else if (type === "Console Assert")
      console.assert(2 === 3, {
        number: 2,
        errorMsg: "The number does not equal 3",
      });
    else if (type === "Console Clear") console.clear();
    else if (type === "Console Dir") console.dir(document.head);
    else if (type === "Console dirxml") console.dirxml(document);
    else if (type === "Console Group Start") console.group("console.group");
    else if (type === "Console Group End") console.groupEnd("My Group");
    else if (type === "Console Table")
      console.table([
        { name: "Software Engineering", num: 110 },
        {
          name: "Programming Languages: Principles and Paradigms",
          num: 130,
        },
        { name: "Advanced Software Engineering", num: 112 },
      ]);
    else if (type === "Start Timer") console.time("My Timer");
    else if (type === "End Timer") console.timeEnd("My Timer");
    else if (type === "Console Trace") handleBtnClick();
    else {
      try {
        test();
      } catch (err) {
        alert(err.message);
        alert(err.name);
        alert(err.stack);
      } finally {
        console.log("finally");
      }
    }
  });
}

window.addEventListener("error", () => {
  console.log("Sadly an error happened my friend");
});

function handleBtnClick() {
  function deep() {
    function deeper() {
      function deepest() {
        console.trace();
      }
      deepest();
    }
    deeper();
  }
  deep();
}
