let startGame = document.querySelector(".start-game");
startGame.onclick = function () {
  let fullPage = document.querySelector(".fullPage");
  let yourName = prompt("Inter You Name");
  let name = document.querySelector(".name span");
  if (yourName === "" || yourName === null) {
    name.innerHTML = "Unknown";
  } else {
    name.innerHTML = yourName;
  }
  fullPage.remove();
};

// ##################

let blocksContainer = document.querySelector(".memory-game-blocks");
let boxs = document.querySelectorAll(".memory-game-blocks .box");

let blocks = Array.from(boxs);
console.log(blocks);
let orderRange = Array.from(Array(blocks.length).keys());

arrayTesting(orderRange);

blocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  console.log(block);
  block.addEventListener("click", () => {
    flipBlock(block);
  });
});

function flipBlock(flip) {
  flip.classList.add("is-flipped");

  let numTheFlipBlocks = blocks.filter((el) =>
    el.classList.contains("is-flipped")
  );

  if (numTheFlipBlocks.length === 2) {
    stopTheBlocks();
    chackIsTrueOrFalse(numTheFlipBlocks[0], numTheFlipBlocks[1]);
  }
}

function stopTheBlocks() {
  blocksContainer.classList.add("stop-block");

  setTimeout(() => {
    blocksContainer.classList.remove("stop-block");
  }, 1000);
}

function chackIsTrueOrFalse(firstBlock, secondBlock) {
  let tries = document.querySelector(".false span");
  if (firstBlock.dataset.animale === secondBlock.dataset.animale) {
    firstBlock.classList.remove("is-flipped");
    secondBlock.classList.remove("is-flipped");

    firstBlock.classList.add("has");
    secondBlock.classList.add("has");
  } else {
    tries.innerHTML = tries.innerHTML + 1;
    setTimeout(() => {
      firstBlock.classList.remove("is-flipped");
      secondBlock.classList.remove("is-flipped");
    }, 1000);
  }
}

function arrayTesting(el) {
  let currnet = el.length,
    temp;

  for (let i = 0; i < currnet; i++) {
    let random = Math.floor(Math.random() * currnet);

    temp = el[currnet];

    el[currnet] = el[random];
    el[random] = temp;
  }
  return el;
}
