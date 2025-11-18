function showName() {
	const form = document.querySelector(`.form`);
	const nameShow = document.querySelector(`.nameShow`);
	const surnameShow = document.querySelector(`.surnameShow`);
	const weightShow = document.querySelector(`.weightShow`);
	const heightShow = document.querySelector(`.heightShow`);
	const emailShow = document.querySelector(`.emailShow`);
	const people = []; //array that keep data sent on inputs

	function receiveEventForm(event) {
		event.preventDefault(); //cancel page reset
		const name = form.querySelector(`#name`);
		const surname = form.querySelector(`#surname`);
		const weight = form.querySelector(`#weight`);
		const height = form.querySelector(`#height`);
		const email = form.querySelector(`#email`);

		const person = {
				"name": name.value,
				"surname": surname.value,
				"weight": weight.value,
				"height": height.value,
				"email": email.value
			}

		people.push(person); //sent data to array 

		nameShow.innerHTML += `<p>${name.value || "&nbsp;"}</p>`; 
		surnameShow.innerHTML += `<p>${surname.value || "&nbsp;"}</p>`;
		weightShow.innerHTML += `<p>${weight.value || "&nbsp;"}</p>`;   // if some field get empty, data sent on the next submit go to the next line
		heightShow.innerHTML += `<p>${height.value || "&nbsp;"}</p>`;
		emailShow.innerHTML += `<p>${email.value || "&nbsp;"}</p>`; 

		console.log(people); //show data on array
			
	};

	function clearInput(event) { //clear fields on submit action
		form.reset();
	};

	form.addEventListener(`submit`, receiveEventForm);
	form.addEventListener(`submit`, clearInput);
};

showName();