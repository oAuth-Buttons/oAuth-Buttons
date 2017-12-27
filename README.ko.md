# oAuth-Buttons

oAuth 서비스들의 로그인 버튼들입니다.

## Getting Started

dist 폴더를 복사하여 당신의 웹 서버에서 접근 가능하게 만든 후 oauth-buttons.min.css를 당신의 웹 페이지에 연결하세요. 버튼 디자인 스펙은 example 폴더 내부를 보면 알 수 있습니다.

만약 직접 빌드하기를 원할 경우 아래의 가이드를 참고하세요.

### Prerequisites

* [Node.js](https://nodejs.org/ko/) 런타임과 npm이 필요합니다.

### Installing

먼저 Grunt CLI의 설치가 필요합니다. 커맨드라인에서 다음 명령어를 실행하세요.

```
npm install -g grunt-cli
```

그리고 다음 명령으로 참조 라이브러리들을 다운로드하세요.

```
npm install
```

그리고 다음 명령으로 css를 빌드하세요.

```
npm run build
```

다음 명령을 전부 수행했을 경우 dist 폴더에 성공적으로 파일이 추가/변경될 것입니다.

## Deployment

oauth-buttons.min.css와 로고가 정상적으로 참조되었다면 당신은 멋진 버튼을 제공할 수 있을 것입니다!

## Built With

* [NPM](https://www.npmjs.com/) - 의존성 관리
* [Grunt](https://gruntjs.com/) - 빌드 시스템

## Contributing

[CONTRIBUTING.ko.md](CONTRIBUTING.ko.md) 에서 이 프로젝트에 기여하기 위한 가이드를 제공하고 있습니다.

## Versioning

이 프로젝트는 [SemVer 2.0.0](http://semver.org/lang/ko)을 준수합니다. 존재하는 버전은 [태그에서 확인하세요](https://github.com/RanolP/oAuth-Buttons/tags).

## Authors

* **small_sunshine** - *CSS, JS, 빌드 시스템* - [small-sunshines](https://github.com/small-sunshines)
* **Ranol** - *로고, 브랜드 컬러 제공 및 총괄* - [RanolP](https://github.com/RanolP)

[기여자 목록](https://github.com/RanolP/oAuth-Buttons/contributors)에서 더 많은 기여자들을 확인하세요.

## License

이 프로젝트는 MIT 라이선스로 관리됩니다. - [라이선스](LICENSE) 파일에서 자세한 사항을 확인하세요.

## Acknowledgments

* 본 프로젝트는 svg를 사용하므로 svg 미지원 브라우저의 경우 정상적인 렌더링을 할 수 없습니다.
* 본 프로젝트는 대부분의 브라우저에서 동작하나 일부 브라우저는 지원되지 않습니다.