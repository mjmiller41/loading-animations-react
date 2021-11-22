[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h1 align="center">loading-animations-react</h1>
<h2 align='center'>A collection of animated loading elements for use with <a href="https://reactjs.org">React</a><h2>
  <p align='center'>
    <a href="https://michael-joseph-miller.github.io/loading-animations-react/">View Demo</a>
    ·
    <a href="https://github.com/michael-joseph-miller/loading-animations-react/issues">Report Bug</a>
    ·
    <a href="https://github.com/michael-joseph-miller/loading-animations-react/issues">Request Feature</a>
</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

---

## Installation

```sh
npm i loading-animations-react
```

## Usage

1. Import the component you would like to use into the appropriate file.
   ```js
   import { Dots } from 'loading-animations-react';
   ```
2. Use that component in your react code.
   ```html
   <Dots />
   ```

## Attributes

Each tag has attributes that can be used to customize the component. All attributes are optional.

### Global attributes (used by all)

- **id** \<string>
  - sets the components id for styling and referencing.
  ```html
  <Dots id="componentId" />
  ```
- **className** \<string>
  - sets the components class for styling and referencing.
  ```html
  <Dots className="componentClass" />
  ```
- **text** \<string>
  - sets the text to be displayed winth the component.
  ```html
  <Dots text="Loading..." />
  ```

### Components specific attributes

- Dots

  - **dotColors** [\<string>]
    - Up to six strings defining colors. Standard css color definitions are used.
    - Although their are six dots, you can define from 1 to 6 colors. If less than six are given, the component will choose more starting from the beginning of the list supplied.
    ```html
    <Dots dotColors=[ 'red', 'white', 'blue', '#123abc', 'rgb(50,50,50)',
    'hsla(235, 100%, 50%, .5)' ] />
    ```

- Progreas Bar

  - **borderColor** \<string>
  - **sliderColor** \<string>
  - **sliderBackground** \<string>

    All three take css colors as strings.

    ```html
    <ProgressBar
      borderColor="blue"
      sliderColor="#fff"
      sliderBackground="rgb(0,0,0)"
    />
    ```

- Waves

  - **waveColor** \<string>
  - **backgroundColor** \<string>

    Both take css colors as strings

    ```html
    <Waves waveColor="cyan" backgroundColor="#000" />
    ```

- Spinner

  - **color1** \<string>
    - one of the gradient colors
  - **color2** \<string>
    - the other gradient color
  - **textColor** \<string>

    All three take css colors as strings.

    ```html
    <Spinner color1="blue" color2="#fff" textColor="rgba(0,0,0, 0.5)" />
    ```

- Minimal Spinner

  - **color** \<string>
    - takes a css color string
    ```html
    <MinimalSpinner color="blue" />
    ```

- Trinity Spinner
  - **color** \<string>
    - takes a css color string
    ```html
    <TrinitySpinner color="blue" />
    ```

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/michael-joseph-miller/loading-animations-react](https://github.com/michael-joseph-miller/loading-animations-react)

<!-- LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/michael-joseph-miller/loading-animations-react?color=blue
[contributors-url]: https://github.com/michael-joseph-miller/loading-animations-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/michael-joseph-miller/loading-animations-react
[forks-url]: https://github.com/michael-joseph-miller/loading-animations-react/network/members
[stars-shield]: https://img.shields.io/github/stars/michael-joseph-miller/loading-animations-react
[stars-url]: https://github.com/michael-joseph-miller/loading-animations-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/michael-joseph-miller/loading-animations-react?color=blue
[issues-url]: https://github.com/michael-joseph-miller/loading-animations-react/issues
[license-shield]: https://img.shields.io/github/license/michael-joseph-miller/loading-animations-react?color=blue
[license-url]: https://github.com/michael-joseph-miller/loading-animations-react/blob/main/LICENSE
[react]: https://reactjs.org
