# fdm-monster-docs

The documentation for FDM Monster 3D Printing server based on Docusaurus

## Contributors ✨

These are the people involved in the project.  Find the meaning of the emoji keys [here](https://allcontributors.org/docs/en/emoji-key).

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/davidzwa"><img src="https://avatars.githubusercontent.com/u/6005355?v=4?s=100" width="100px;" alt="David Zwart"/><br /><sub><b>David Zwart</b></sub></a><br /><a href="https://github.com/fdm-monster/fdm-monster-docs/issues?q=author%3Adavidzwa" title="Bug reports">🐛</a> <a href="https://github.com/fdm-monster/fdm-monster-docs/commits?author=davidzwa" title="Code">💻</a> <a href="#maintenance-davidzwa" title="Maintenance">🚧</a> <a href="#userTesting-davidzwa" title="User Testing">📓</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kevenaar.name"><img src="https://avatars.githubusercontent.com/u/834643?v=4?s=100" width="100px;" alt="Maurice Kevenaar"/><br /><sub><b>Maurice Kevenaar</b></sub></a><br /><a href="#maintenance-mkevenaar" title="Maintenance">🚧</a> <a href="#ideas-mkevenaar" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Docs Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
yarn
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
