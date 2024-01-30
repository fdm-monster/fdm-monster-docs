---
title: Linux Service
description: How to use a Linux service for your FDM-Monster environment (deprecated)
image: ../images/server-running.png # TODO: Change image!
keywords: [fdm-monster, OctoPrint, 3d-printing, monsterpi] #TODO: Keywords!
sidebar_position: 4
id: linux_service
permalink: :baseUrl/:docsUrl/:langPart/:versionPart/installing/:id
---

:::danger
The Linux service installation is deprecated!

Documentation for the Linux Service is provided as-is and will not be supported.
:::

The scripts on this page are available on GitHub in [installations/fdm-monster-node-linux](https://github.com/fdm-monster/fdm-monster/tree/main/installations/fdm-monster-node-linux).

![A running instance of FDM Monster 3D Printing Server with the Printing Grid opened.
Only one disabled printer is shown on the grid and it's disabled.
The rest of the grid is showing empty tiles.](../images/server-running.png)
*This is the FDM Monster web app after installation (visit [http://127.0.0.1:4000](http://127.0.0.1:4000))*

## Preparation of the Linux Service installation

Please ensure the following dependencies are installed and working:

- NodeJS 18 or higher
- MongoDB 4.4 or higher
- git
- yarn (npm package)
- FDM monster source files (GitHub cloned source code)
- node-linux (npm package)

## Installation of the service

Please ensure that:

- You've cloned the repository
- Changed directory to [installations/fdm-monster-node-linux](https://github.com/fdm-monster/fdm-monster/tree/main/installations/fdm-monster-node-linux)
- `yarn` dependencies are installed in `fdm-monster/server/`
- `npm` dependencies are installed in `fdm-monster-node-linux/`

Please ensure the service is installed (executed inside `fdm-monster-node-linux`):

```bash
npm i
```

This will call `node ./install-fdm-monster.js` indirectly.

## Configuring server environment

The server has configuration options that allow changing how it operates. Warning, wrong configuration might cause the
server unable to correctly startup.

Each configuration change requires you to run the update script:

```bash
npm i
```

Please read the [Environment configuration](../2_configuration/preconfiguration.md) section for adjusting the `.env` file.

## Updating the server

The server is easily updated with the provided script `update-fdm-monster.sh`.
You will need to run this with elevation:

```bash
sudo bash ./update-fdm-monster.sh
```
