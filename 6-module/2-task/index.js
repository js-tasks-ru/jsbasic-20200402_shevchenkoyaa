import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.elem.innerHTML = `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
        <span class="card__price">€<!--значение product.price--></span>
    </div>
    <div class="card__body">
        <div class="card__title"><!--значение product.name--></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`
  }
}
