import * as func from './modules/functions.js'

import $ from 'jquery';
import 'slick-carousel'






	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		dots: true,
	})


















document.querySelector('.nav__burger').addEventListener('click', () => {
	document.querySelector('.nav__burger').classList.toggle('nav__burger_active')
})




// отправка формы + валидация

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form')
	form.addEventListener('submit', formSend)
})

async function formSend(e) {
	e.preventDefault()

	let error = formValidate(form)

	if (error === 0) {
		try {
			let formeData = new FormData(from)
			const response = await fetch('ssss', {
				method: 'POST',
				body: formeData,
			})
		} catch (error) {
			alert('Форма не отправлена')
			form.reset()
		}
	} else {
		alert('Необходимо заполнить форму корректно')
	}
}

// валидация
function formValidate(e) {
	let error = 0
	let formReq = document.querySelectorAll('._req')

	for (const oneForm of formReq) {
		const input = oneForm
		formRemoveError(input)

		if (input.classList.contains('form__name')) {
			if (!nameTest(input) || input.value === '') {
				formAddError(input)
				error++
			}
		}

		if (input.classList.contains('form__email')) {
			if (!emailTest(input) || input.value === '') {
				formAddError(input)
				error++
			}
		}

		if (input.classList.contains('form__massage')) {
			if (!massageTest(input) || input.value === '') {
				formAddError(input)
				error++
			}
		}
	}

	return error
}

function formAddError(input) {
	input.parentElement.classList.add('_error')
	input.classList.add('_error')
}

function formRemoveError(input) {
	input.parentElement.classList.remove('_error')
	input.classList.remove('_error')
}

//функции для проверки

function emailTest(input) {
	return /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(
		input.value
	)
}

function nameTest(input) {
	const name = input.value.split('').length

	return !!(20 > name && name > 4)
}

function massageTest(input) {
	const text = input.value.split('').length

	return !!(40 > text && text > 1)
}
