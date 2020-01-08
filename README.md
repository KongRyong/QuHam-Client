# QuHam-Client

### 프로젝트 setup

https://facebook.github.io/react-native/docs/getting-started

1. install Dependency

```
brew install node
brew install watchman
cd QuHam-Client
npm install -D
```

2. setup

- ios

```
sudo gem install cocoapods
```

- android

```
// 1. JDK8 설치
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
// 2. Android Studio 설치 (위 가이드 잘 참고)
// 3. Android 관련 PATH 및 JAVA_HOME을 jdk8로 설정
```

3. run

- ios

```
npx react-native run-ios
```

- android

```
npx react-native run-android
```
