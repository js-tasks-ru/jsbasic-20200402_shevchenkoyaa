import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement('div');
    this.render(product);
    this.elem.addEventListener('click', event => this.Onclick(event))
  }


    render(product) {
    this.elem.innerHTML = `<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${product.name} class="card__image" alt="product">
        <span class="card__price">€${product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title"><${product.name}></div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
</div>`;
    }

    /*Onclick(event) {
      if (event.target.closest('.card__button')) {
        let customEvent = new CustomEvent("product-add", { 
        detail: this.product.id, 
        bubbles: true)
        }
        elem.dispatchEvent(customEvent);
     }
     
    }
*/
}
