import faker from "faker";

function FakerRandomWords() {
	function handleClick(e) {
		document.querySelector('#fakerRandomWords .generated').innerHTML = faker.random.words(50)
	}

	return (
		<div className="card faker randomWords" id="fakerRandomWords">
			<h4>50 Random Words{" "}
			<button onClick={handleClick}>Regenerate</button>
			</h4>
			<div className="generated">
			{faker.random.words(50)}
			</div>
		</div>
	);
}

function FakerFakeWords() {
	function handleClick(e) {
		document.querySelector('#fakerFakeWords .generated').innerHTML = faker.lorem.words(50)
	}

	return (
		<div className="card faker fakeWords" id="fakerFakeWords">
			<h4>50 Fake Words {" "}
			<button onClick={handleClick}>Regenerate</button>
			</h4>
			<div className="generated">{faker.lorem.words(50)}</div>
		</div>
	);
}

export default function Words() {
	return (
		<div>
			<header>
				<hgroup>
					<h2>Words</h2>
					<h3>
						Either chosen at random from a list, or procedurally generated using
						random values.
					</h3>
				</hgroup>
			</header>
			<article>
					<FakerRandomWords />
					<FakerFakeWords />
			</article>
		</div>
	);
}


fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
  .then(resp => resp.text())
  .then(console.log);
// → the content

fetch("example/data.txt", {method: "DELETE"}).then(resp => {
  console.log(resp.status);
  // → 405
});

fetch("example/data.txt")
  .then(resp => resp.text())
  .then(text => console.log(text));
// → This is the content of data.txt

let list = document.querySelector("select");
let note = document.querySelector("textarea");

let state;
function setState(newState) {
	list.textContent = "";
	for (let name of Object.keys(newState.notes)) {
		let option = document.createElement("option");
		option.textContent = name;
		if (newState.selected == name) option.selected = true;
		list.appendChild(option);
	}
	note.value = newState.notes[newState.selected];

	localStorage.setItem("Notes", JSON.stringify(newState));
	state = newState;
}
setState(JSON.parse(localStorage.getItem("Notes")) || {
	notes: {"shopping list": "Carrots\nRaisins"},
	selected: "shopping list"
});

list.addEventListener("change", () => {
	setState({notes: state.notes, selected: list.value});
});
note.addEventListener("change", () => {
	setState({
		notes: Object.assign({}, state.notes,
												 {[state.selected]: note.value}),
		selected: state.selected
	});
});
document.querySelector("button")
	.addEventListener("click", () => {
		let name = prompt("Note name");
		if (name) setState({
			notes: Object.assign({}, state.notes, {[name]: ""}),
			selected: name
		});
	});
