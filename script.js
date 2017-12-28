let services = [
	'naver', 'google', 'kakao', 'facebook', 'twitter',
	'github', 'discord', 'steam', 'slack', 'linkedin',
	'instagram', 'twitch', 'pinterest', 'wordpress'
]

window.onload = function () {
	let list = document.getElementById('service-list')
	let currentService = services[0]

	let btn = document.getElementsByClassName('lbtn')[0]
	let label = document.getElementsByClassName('label')[0]

	let flatElem = document.getElementById('flat-button')

	let buttonStyles = document.getElementById('button-styles')
	let lengthElem = document.getElementById('length')

	let currentLength = 'none'

	for (service of services) {
		let optionElem = document.createElement('option')
		optionElem.innerText = service
		list.appendChild(optionElem)
	}

	list.onchange = function () {
		updateButton({ service: true })
	}
	buttonStyles.onchange = function () {
		updateButton({ style: true })
	}
	lengthElem.onchange = function () {
		updateButton({ length: true })
	}

	function updateButton({ service, style, length } = { service: false, style: false, length: false }) {
		let updateLabel
		if (service) {
			btn.classList.remove(`lbtn-${currentService}`)
			currentService = list.value
			btn.classList.add(`lbtn-${currentService}`)
			updateLabel = true
		}
		if (style) {
			btn.classList.remove('lbtn-flat')
			btn.classList.remove('white')
			switch (buttonStyles.value) {
				case 'flat':
					btn.classList.add('lbtn-flat')
					break
				case 'white':
					btn.classList.add('white')
					break
				default: break
			}
		}
		if (length) {
			btn.classList.remove('long')
			btn.classList.remove('short')
			btn.classList.remove('logo-only')
			currentLength = lengthElem.value

			if (currentLength != 'none') {
				btn.classList.add(currentLength)
			}

			updateLabel = true
		}

		if (!!updateLabel) {
			switch (currentLength) {
				case 'long':
				case 'none':
					label.innerText = `${currentService} 아이디로 로그인`
					break
				case 'short':
					label.innerText = '로그인'
					break
				case 'logo-only':
					label.innerText = ''
					break
			}
		}
	}

	updateButton({ service: true, style: true, length: true })
}
