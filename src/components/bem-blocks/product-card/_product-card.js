const btnsCartProducts = document.querySelectorAll('button[name=product-card__btn-cart]');

btnsCartProducts.forEach(btns => {
  btns.addEventListener('click', function () {
    let card = document.querySelector('.cart-modal__article-item');
    let cloneCard = card.cloneNode(true);
    let count = this.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[3].value;
    let name = this.parentNode.parentNode.childNodes[1].textContent;
    let picture = this.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].cloneNode(true);
    picture.style.padding = '0.2rem 0';
    picture.style.height = '200px';
    picture.style.height = '100px';
    cloneCard.childNodes[1].append(picture);
    cloneCard.childNodes[1].childNodes[1].remove();
    cloneCard.childNodes[3].childNodes[1].textContent = `МАСЛО "${name}" 250 мл`;
    cloneCard.childNodes[5].childNodes[1].textContent = count * 115;
    cloneCard.childNodes[3].childNodes[5].value = count;
    document.querySelector('.header__cart-btn').dataset.counter++;
    document.querySelector('.cart-modal__article').append(cloneCard);
    let closeCard = document.querySelectorAll('.cart-modal__article-item__price-close');
    for (let i = 0; i < closeCard.length; i++) {
      closeCard[i].addEventListener('click', clickHandler);
    }
    let btnsCounterModal = document.querySelectorAll('button[name=counter__btn-modal]');

    btnsCounterModal.forEach(btn => {
      btn.addEventListener('click', buttonCounter)
    })
  })
});

let btnsCounterCard = document.querySelectorAll('button[name=counter__btn-card]');

btnsCounterCard.forEach(btn => {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__text');
        const price = this.parentNode.parentNode.childNodes[5];
        const currentValue = +inp.value;
        let newValue;
        const currentPrice = +price.dataset.amount;
        let newPrice;
        if (direction === 'plus') {
            newValue = currentValue + 1;
            newPrice = currentPrice + 115;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            newPrice = currentPrice - 115 > 0 ? currentPrice - 115 : 0;
        }
        inp.value = newValue;
        price.dataset.amount = newPrice;
        price.textContent = newPrice + ' грн.';
    })
});

