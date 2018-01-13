var services = [
	'naver', 'google', 'kakao', 'facebook', 'twitter',
	'github', 'discord', 'steam', 'slack', 'linkedin',
	'instagram', 'twitch', 'pinterest', 'wordpress', 'telegram'
]

var styles = [
	'none', 'flat', 'white', 'flat-white'
]

// css filter detect
if (!Modernizr_oauth_buttons.cssfilters) {
	styles.shift()
	styles.shift()
}

window.onload = function () {
	var list = document.getElementById('service-list')
	var currentService = services[0]

	var btn = document.getElementsByClassName('lbtn')[0]
	var label = document.getElementsByClassName('label')[0]

	var flatElem = document.getElementById('flat-button')

	var buttonStyles = document.getElementById('button-styles')
	var lengthElem = document.getElementById('length')

	var currentLength = 'none'

	for (var service in services) {
		var optionElem = document.createElement('option')
		optionElem.innerText = services[service]
		list.appendChild(optionElem)
	}

	for (var style in styles) {
		var optionElem = document.createElement('option')
		optionElem.innerText = styles[style]
		if(style == 0) {
			optionElem.setAttribute('selected', '')
		}
		buttonStyles.appendChild(optionElem)
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

	function updateButton(arg) {
		var updateLabel
		if (arg.service) {
			btn.classList.remove('lbtn-' + currentService)
			currentService = list.value
			btn.classList.add('lbtn-' + currentService)
			updateLabel = true
		}
		if (arg.style) {
			btn.classList.remove('lbtn-flat')
			btn.classList.remove('white')
			switch (buttonStyles.value) {
				case 'flat':
					btn.classList.add('lbtn-flat')
					break
				case 'white':
					btn.classList.add('white')
					break
				case 'flat-white':
					btn.classList.add('lbtn-flat')
					btn.classList.add('white')
					break
				default: break
			}
		}
		if (arg.length) {
			btn.classList.remove('long')
			btn.classList.remove('short')
			btn.classList.remove('logo-only')
			currentLength = lengthElem.value

			if (currentLength != 'none') {
				btn.classList.add(currentLength)
			}

			var updateLabel = true
		}

		if (updateLabel) {
			switch (currentLength) {
				case 'long':
				case 'none':
					label.innerText = currentService + '아이디로 로그인'
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
