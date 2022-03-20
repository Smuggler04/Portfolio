function addFooter(fatherEl) {
	const footer = document.createElement('div');
	footer.innerHTML = `
        <div class="footer">
            <div class="footer__logo-container">
                <div class="logo">SANTIAGO</div>
            </div>
            <div class="footer__social-container">
                <a class="social__link" href="http://" target="_blank" >

                    <div class="footer__social">
                        <img class="social__image" src="./media/github.png" />
                        <p class="social__p">Github</p>
                    </div>
                </a>
                  
                <a class="social__link" href="http://" target="_blank" >
                    <div class="footer__social">
                        <img class="social__image" src="./media/linkedin.png" />
                        <p class="social__p">Linkedin</p>
                    </div>
                </a>
                  <a class="social__link" href="http://" target="_blank" >

                      <div class="footer__social">
                          <img class="social__image" src="./media/instagram.png" />
                          <p class="social__p">Instagram</p>
                        </div>
                    </a>
                  
            </div>
        </div>`;

	fatherEl.appendChild(footer);
}
