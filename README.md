<div align="center">
<h1>jmd-scripts 🛠📦</h1>

<p>CLI toolbox for common scripts for my projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Greenkeeper badge](https://badges.greenkeeper.io/shellthor/jmd-scripts.svg)](https://greenkeeper.io/)
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmcharts]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fshellthor%2Fjmd-scripts.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fshellthor%2Fjmd-scripts?ref=badge_shield)

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## The problem

I want to make it easier to maintain my projects.

## This solution

This is a CLI that abstracts away all configuration for my open source projects
for linting, testing, building, and more.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Usage](#usage)
  * [Overriding Config](#overriding-config)
* [Inspiration](#inspiration)
* [Other Solutions](#other-solutions)
* [Contributors](#contributors)
* [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev jmd-scripts
```

## Usage

This is a CLI and exposes a bin called `jmd-scripts`. I don't really plan on
documenting or testing it super duper well because it's really specific to my
needs. You'll find all available scripts in `src/scripts`.

This project actually dogfoods itself. If you look in the `package.json`, you'll
find scripts with `node src {scriptName}`. This serves as an example of some
of the things you can do with `jmd-scripts`.

### Overriding Config

Unlike `react-scripts`, `jmd-scripts` allows you to specify your own
configuration for things and have that plug directly into the way things work
with `jmd-scripts`. There are various ways that it works, but basically if you
want to have your own config for something, just add the configuration and
`jmd-scripts` will use that instead of it's own internal config. In addition,
`jmd-scripts` exposes its configuration so you can use it and override only
the parts of the config you need to.

This can be a very helpful way to make editor integration work for tools like
ESLint which require project-based ESLint configuration to be present to work.

So, if we were to do this for ESLint, you could create an `.eslintrc` with the
contents of:

```
{"extends": "./node_modules/jmd-scripts/eslint.js"}
```

> Note: for now, you'll have to include an `.eslintignore` in your project until
> [this eslint issue is resolved](https://github.com/eslint/eslint/issues/9227).

Or, for `babel`, a `.babelrc` with:

```
{"presets": ["jmd-scripts/babel"]}
```

Or, for `jest`:

```javascript
const {jest: jestConfig} = require('jmd-scripts/config')
module.exports = Object.assign(jestConfig, {
  // your overrides here

  // for test written in Typescript, add:
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
})
```

> Note: `jmd-scripts` intentionally does not merge things for you when you start
> configuring things to make it less magical and more straightforward. Extending
> can take place on your terms. I think this is actually a great way to do this.

## Inspiration

This is inspired by `react-scripts` and heavily borrows code from `kcd-scripts`.

## Other Solutions

If you are aware of any others, please [make a pull request][prs] and add it
here!

[kcd-scripts][kcd-scripts]

## Contributors

Thanks goes to these people ([emoji key][emojis]):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/649578?v=4" width="100px;"/><br /><sub>Jeff Detmer</sub>](http://www.jeffdetmer.com)<br />[💻](https://github.com/shellthor/jmd-scripts/commits?author=shellthor 'Code') [📖](https://github.com/shellthor/jmd-scripts/commits?author=shellthor 'Documentation') [🚇](#infra-shellthor 'Infrastructure (Hosting, Build-Tools, etc)') |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/shellthor/jmd-scripts.svg?style=flat-square
[build]: https://travis-ci.org/shellthor/jmd-scripts
[coverage-badge]: https://img.shields.io/codecov/c/github/shellthor/jmd-scripts.svg?style=flat-square
[coverage]: https://codecov.io/github/shellthor/jmd-scripts
[version-badge]: https://img.shields.io/npm/v/jmd-scripts.svg?style=flat-square
[package]: https://www.npmjs.com/package/jmd-scripts
[downloads-badge]: https://img.shields.io/npm/dm/jmd-scripts.svg?style=flat-square
[npmcharts]: http://npmcharts.com/compare/jmd-scripts
[license-badge]: https://img.shields.io/npm/l/jmd-scripts.svg?style=flat-square
[license]: https://github.com/shellthor/jmd-scripts/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/shellthor/jmd-scripts/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/shellthor/jmd-scripts.svg?style=social
[github-watch]: https://github.com/shellthor/jmd-scripts/watchers
[github-star-badge]: https://img.shields.io/github/stars/shellthor/jmd-scripts.svg?style=social
[github-star]: https://github.com/shellthor/jmd-scripts/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20jmd-scripts!%20https://github.com/shellthor/jmd-scripts%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/shellthor/jmd-scripts.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[kcd-scripts]: https://github.com/kentcdodds/kcd-scripts


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fshellthor%2Fjmd-scripts.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fshellthor%2Fjmd-scripts?ref=badge_large)