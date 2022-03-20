function addForm(fatherEl) {
	const form = document.createElement('div');

	form.innerHTML = `   <section class="form">
    <h2 class="form__title">Escribime</h2>
    <div class="form__input">
        <label for="nombre">NOMBRE </label>
            <input type="text" name="nombre" id="nombre">
    </div>
    <div class="form__input">
        <label for="email">EMAIL</label>
            <input type="email" name="email" id="email">
    </div>
    <div class="form__input">
        <label for="mensaje">Mensaje</label>
            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
    </div>
    <button class="form__button">Enviar</button>
    <!-- <div class="form__button">
    </div> -->
</section>
</div>`;

	fatherEl.appendChild(form);
}
