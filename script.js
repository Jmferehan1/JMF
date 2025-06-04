const container = document.getElementById('puzzle-container');
const doneBtn = document.getElementById('doneBtn');

const correctOrder = [...Array(16).keys()];
const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);

shuffled.forEach(index => {
  const piece = document.createElement("div");
  piece.className = "puzzle-piece";
  piece.dataset.index = index;
  const x = (index % 4) * -80;
  const y = Math.floor(index / 4) * -80;
  piece.style.backgroundPosition = `${x}px ${y}px`;
  container.appendChild(piece);
});

const sortableInstance = Sortable.create(container, {
  animation: 150
});

doneBtn.addEventListener("click", () => {
  const currentOrder = Array.from(container.children).map(el => parseInt(el.dataset.index));
  const isCorrect = currentOrder.every((val, idx) => val === idx);
  if (isCorrect) {
    window.location.href = 'message.html';
  } else {
    alert("Hmm, not quite right. Try again! 😊");
  }
});
