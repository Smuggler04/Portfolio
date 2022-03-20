function main() {
	const headerEl = document.querySelector('.header-container');
	const servicesEl = document.querySelector('.services-container');
	const formEl = document.querySelector('.form-container');
	const footerEl = document.querySelector('.footer-container');

	addHeader(headerEl);
	showServices(servicesEl);
	addForm(formEl);
	addFooter(footerEl);
}

main();
