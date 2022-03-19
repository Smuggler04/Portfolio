function showServices(fatherEl) {
	const servicesData = fetch(
		'https://cdn.contentful.com/spaces/ceqz6xa8k2vu/environments/master/entries?access_token=h2TH_vHPOJ1j9A8voiSWMaaGc_YC99TFfqGjLhSU50I&content_type=service'
	);

	servicesData
		.then((res) => {
			const data = res.json();
			return data;
		})
		.then((res) => {
			for (let i = 0; i < res.items.length; i++) {
				let img = 'https:' + res.includes.Asset[i].fields.file.url;
				let title = res.items[i].fields.title;
				let description =
					res.items[i].fields.description.content[0].content[0].value;

				const serviceEl = document.createElement('div');
				serviceEl.innerHTML = ` <div class="service">
                <img class="service__image" src="${img}" alt="">
                <h3 class="service__title">${title}</h3>
                <p class="service__description">${description}</p>
            </div>`;
				console.log(description);
				fatherEl.appendChild(serviceEl);
			}
		});
}
