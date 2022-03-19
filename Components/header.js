function header(fatherEl) {
	const headerEl = document.createElement('header');
	headerEl.innerHTML = ` <header class="header">
    <div class="header__logo">SANTIAGO</div>
    
    <img src="./media/menu.png" alt="burger menu" class="header__burger">
    <div class="header__menu">
        <ul class="menu__list">
            <li>Portfolio</li>
            <li>Servicios</li>
            <li>Contacto</li>
        </ul>
    </div>
</header>`;

	fatherEl.appendChild(headerEl);
}
