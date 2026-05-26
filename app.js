const helloButton = document.getElementById('helloButton');
const helloMessage = document.getElementById('helloMessage');

if (helloButton && helloMessage) {
	helloButton.addEventListener('click', () => {
		helloMessage.textContent = 'Nice! You just ran your first JavaScript interaction.';
	});
}
