# oAuth-Buttons

[![npm version](https://badge.fury.io/js/oauth-buttons.svg)](https://badge.fury.io/js/oauth-buttons)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRanolP%2FoAuth-Buttons.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FRanolP%2FoAuth-Buttons?ref=badge_shield)

[![NPM](https://nodei.co/npm/oauth-buttons.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/oauth-buttons/)

The login buttons for oAuth services

## Getting Started

Copy 'dist' folder and make it accessible on your web server. After that, link 'oauth-buttons.min.css' on your web page. The design spec of button is in the 'example' folder. If you want to see the design of button, check out the [Preview Page](https://ranolp.github.io/oAuth-Buttons).

If you want to build directly. Refer to below guides.

### Prerequisites

* Requires [Node.js](https://nodejs.org/ko/) runtime and NPM

### Installing

First, Install the Grunt CLI. Run the following command

```
npm install -g grunt-cli
```

And then run the following command to install dependencies.

```
npm install
```

And then run the following command to build stylesheet

```
npm run build
```

If you have done all of the following commands, the files will be successfully added / changed on 'dist' folder.

## Deployment

If the 'oauth-buttons.min.css' and logo are properly linked, You can provide nice buttons! 

## Built With

* [NPM](https://www.npmjs.com/) - Dependency management
* [Grunt](https://gruntjs.com/) - Build system

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

## Versioning

We use [SemVer 2.0.0](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RanolP/oAuth-Buttons/tags).

## Authors

* **small_sunshine** - *CSS, JS, build system* - [small-sunshines](https://github.com/small-sunshines)
* **Ranol** - *Provides logo and brand color, the owner.* - [RanolP](https://github.com/RanolP)

See also the list of [contributors](https://github.com/RanolP/oAuth-Buttons/contributors) who participated in this project.

## License

This project licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FRanolP%2FoAuth-Buttons.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FRanolP%2FoAuth-Buttons?ref=badge_large)

## Acknowledgments

* This project uses svg, If your browser can't support svg, It can't render normally.
* Indirectly, We supports png rendering. If you applies dedicated script, It replaces SVG to PNG if browsers that don't support SVG.
* This project works on most browsers. However, Some browsers won't work.
* The translation may not be correct.