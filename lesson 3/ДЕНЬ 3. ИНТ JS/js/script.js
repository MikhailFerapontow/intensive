window.addEventListener('DOMContentLoaded', function () {
	//получаем инфу
let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName('button'),
		btnopen = document.getElementsByClassName('open')[0];
//корзина
		function createCart () {
			//создание корзины
			let cart = document.createElement('div'),
				field = document.createElement('div'),
				heading = document.createElement('h2'),
				close = document.createElement('button')
				//классы элементов
			cart.classList.add('cart');
			field.classList.add('cart-field');
			close.classList.add('close');
			//текст для элементов
			close.textContent = 'Закрыть';
			heading.textContent = 'В нашей корзине';
			//добавили на страницу
			document.body.appendChild(cart);
			cart.appendChild(heading);
			cart.appendChild(field);
			cart.appendChild(close);
	}
	createCart();

	let field = document.querySelector('.cart-field'),
			cart = document.querySelector('.cart'),
			close = document.querySelector('.close');

	for ( let i = 0; i < buttons.length-1; i++) {
		//на каждую кнопку
		buttons[i].addEventListener('click', function() {
			//создание копии
			let item = products[i].cloneNode(true),
				btn = item.querySelector('button');

				btn.textContent = 'Убрать';
				field.appendChild(item);
				products[i].style.display = 'none';
				//удаление предмета из корзины
				btn.addEventListener('click', function () {
	 			item.style.display = 'none',
	 			products[i].style.display = 'block';
	 			 })
		})
	}
	//открыте коризины
	 btnopen.addEventListener('click', function () {
	 	cart.style.display = 'block';
	 })
	 //закрытие корзины
	 	close.addEventListener('click', function () {
		cart.style.display = 'none';
	})

}	


 )