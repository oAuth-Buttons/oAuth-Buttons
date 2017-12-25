function install(options) {
    console.log("Install the oAuth-Buttons")
    window.themes = {}
    window.guides = {}

    installTheme('default', {
        'brand-color': '#000000'
    })
    installTheme('naver', {
        'brand-color': '#1ec800',
        'logo': 'logo/naver.svg'
    })
    installTheme('google', {
        'brand-color': '#ea4335',
        'logo': 'logo/google.png'
    })
    installTheme('kakao', {
        'brand-color': '#ffeb00',
        'text-color': '3c1e1e',
        'logo': 'logo/kakao.png'
    })
    installTheme('facebook', {
        'brand-color': '#3c5a99',
        'logo': 'logo/facebook.png'
    })

    installGuide('flat', {
        'border-radius': '2px',
        'flex-direction': 'row',
        'background-color': '$brand-color',
        'color': 'white',
        'logo-color': 'white',
        'logo-background': 'transparent',
        'font-size': '1.5em',
        'font-family': "'나눔바른고딕', 'NanumBarunGothic', 'Noto Sans', 'Roboto', sans-serif"
    })

    applyStyle()
}

function installGuide(name, guide) {
    window.guides[name] = guide
}

function installTheme(name, theme) {
    window.themes[name] = theme
}

function applyStyle() {
    let parent = document.getElementById('oauth-buttons')
    if (parent && parent.hasChildNodes) {
        for (let button of parent.childNodes) {
            updateStyle(button)
        }
    } else {
        alert('oAuth-Buttons error!\nthere are no login buttons!')
    }
}

function updateStyle(element) {
    let dataset = element.dataset
    if (dataset) {
        element.style.display = 'flex'
        element.flex = 'initial'
        let guide = getGuide(element)
        let theme = getTheme(element)
        let attribute = getAttribute(element)
        let height = getHeight(element)

        let logo = element.getElementsByClassName('logo')[0]
        if (logo && theme.logo) {
            logo.style.flex = 'initial'
            // logo.type = 'image/svg+xml'
            // logo.data = theme.logo
            // logo.style.height = logo.style.width = logo.height = logo.width = height
        }

        let full = element.querySelector('.label.full')
        let short = element.querySelector('.label.short')
        let logout = element.querySelector('.label.logout')

        element.style.height = `${height}px`

        full.style.display = 'none'
        short.style.display = 'none'
        logout.style.display = 'none'
        if (attribute.full) {
            element.style.width = element.width = `${height * 5}px`
            if (!attribute.logout) {
                full.style.display = 'flex'
            }
        } else if (attribute.short) {
            element.style.width = element.width = `${height * 2.5}px`
            if (!attribute.logout) {
                short.style.display = 'flex'
            }
        }
        if (attribute.logout) {
            logout.style.display = 'flex'
        }

        for (let [k, v] of Object.entries(theme)) {
            if (v && typeof v == 'string' && v[0] == '$') {
                theme[k] = theme[v.substring(1)]
            }
        }
        for (let [k, v] of Object.entries(guide)) {
            if (v && typeof v == 'string' && v[0] == '$') {
                guide[k] = theme[v.substring(1)]
            }
            if (k == 'logo-color') {
                let svgDoc = logo.contentDocument
                let targets = svgDoc.querySelectorAll('.logo')
                for (target of targets) {
                    target.setAttribute('fill', guide[k])
                }
            } else if (k == 'logo-background') {
                let svgDoc = logo.contentDocument
                let targets = svgDoc.querySelectorAll('.background')
                for (target of targets) {
                    target.setAttribute('fill', guide[k])
                }
            } else {
                element.style[k] = guide[k]
            }
        }
    }
}

function getHeight(element) {
    let height
    if (element.dataset && element.dataset.obHeight) {
        height = element.dataset.obHeight
    }
    return height || '64px'
}
function getTheme(element) {
    let theme
    if (element.dataset && element.dataset.obTheme) {
        theme = window.themes[element.dataset.obTheme]
    }
    return theme || window.themes['default']
}

function getGuide(element) {
    let guide
    if (element.dataset && element.dataset.obGuide) {
        guide = window.guides[element.dataset.obGuide]
    }
    return guide || window.guides['flat']
}

function getAttribute(element) {
    let result = {}
    if (element.dataset) {
        let dataset = element.dataset
        if (dataset.obFull !== undefined) {
            result.full = true
        }
        if (dataset.obShort !== undefined) {
            result.short = true
        }
        if (dataset.obLogout !== undefined) {
            result.logout = true
        }
    }
    return result
}