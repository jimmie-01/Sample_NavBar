function showSection(sectionId) {
	//Hide All sections
	document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));

	//Show selected section
	document.getElementById(sectionId).classList.remove('hidden');

	//Hide submenu if another section is clicked
	if(sectionId !== 'menu-content') {
		document.getElementById('submenu').style.display = 'none';
	}
}

function toggleSubMenu() {
	const submenu = document.getElementById('submenu');
	submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';

	// Always show food by default when submenu opens
	showSection('menu-content');
	showMenuContent('food');
}

function showMenuContent(item) {
	document.getElementById('food').classList.add('hidden');
	document.getElementById('drinks').classList.add('hidden');
	document.getElementById(item).classList.remove('hidden');
}