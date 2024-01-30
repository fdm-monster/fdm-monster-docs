---
title: Client setup
description: Setup the FDM Monster Client for Development
image: ../images/server-running.png # TODO: Change image!
keywords: [fdm-monster, OctoPrint, 3d-printing, monsterpi] #TODO: Keywords!
sidebar_position: 2
id: setup_client
permalink: :baseUrl/:docsUrl/:langPart/:versionPart/:id
---

:::info
This chapter focuses solely on installing the client component!

If you haven't set up the FDM Monster server yet, please refer to the **[Server Setup](./setup_server.md)** guide.
:::

## Prerequisites

Before you begin, ensure that you have the following tools installed on your system:

- Node.js 18 LTS
- Yarn 1.22.0 or higher
- VS Code or WebStorm (your choice of IDE)
- [FDM Monster Server](./setup_server.md)

## Clone the Repository

:::tip
Ensure you are not inside the server directory or any of its subfolders!
:::

To get started, clone the FDM Monster Vue client repository from GitHub

```bash
git clone -b develop https://github.com/fdm-monster/fdm-monster-client.git
```

## Setting Up the Development Environment

1) Navigate to the cloned repository

    ```bash
    cd fdm-monster-client
    ```

1) If you haven't installed `yarn` yet, install `yarn`

   ```bash
   npm install -g yarn
   ```

1) Install the dependencies using `yarn`

   ```bash
   yarn install
   ```

1) Create a run configuration for the Vue development server in your IDE of choice (either VS Code or WebStorm):
    - VS Code: Create a run configuration that executes `yarn run serve` as the command. (See
      [VS Code Run Configuration](#vs-code-run-configuration) for detailed steps.)
    - WebStorm: Create a run configuration that executes `yarn run serve` as the command. (See
      [WebStorm Run Configuration](#webstorm-run-configuration) for detailed steps.)

1) Launch the Vue development server. Please note that the server will automatically reload if you make any changes to
   the source code. Please ensure that the FDM Monster server is running as well.

1) Access the running server at [http://localhost:8080](http://localhost:8080) in your preferred web browser.

## VS Code Run Configuration

:::tip
If the file ".vscode/launch.json" exists and looks correct, you can skip steps 2 to 4.
:::

1) Open VS Code and navigate to the **"Run and Debug"** panel.

1) Click on the link `create a launch.json file` to open the `launch.json` file. You should select Node.js as the type.
   If this does not work, you can manually create the file in the `.vscode` folder in the project root directory.

1) Paste the JSON content provided below into the `launch.json` file:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "FDM Monster Vue Client (serve)",
         "type": "node",
         "request": "launch",
         "runtimeExecutable": "yarn",
         "runtimeArgs": [
           "run",
           "serve"
         ],
         "cwd": "${workspaceFolder}"
       }
     ]
   }
   ```

1) Save the configuration and close the `launch.json` file.

1) In the **"Run and Debug"** panel, select **"FDM Monster Vue Client (serve)"** from the dropdown.

- Press <kbd>ctrl</kbd>+<kbd>F5</kbd> to launch the Vue development server without debugging. Alternatively, you can
  press <kbd>F5</kbd> to launch the Vue development server with debugging (this could potentially be a lot slower).
- For more information on how to develop Vue with VS Code (f.e. using Vetur), refer to the [VS Code VueJS Tutorial](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial).

## WebStorm Run Configuration

1) Open WebStorm and go to the **"Run"** menu.

1) Click on **"Edit Configurations..."** to open the **"Run/Debug Configurations"** dialog.

1) Click on the **"+"** icon to add a new configuration and select **"NPM"** from the dropdown.

1) Provide a name for the configuration (e.g., `FDM Monster Vue Client (serve)`).

1) Set the `package.json` file in the cloned repository: `fdm-monster-client/package.json`.

1) Set the Command to `run`.

1) Set the Scripts to `serve`.

1) Set the **"Node interpreter"** to the appropriate Node.js executable (e.g. v18.14.2).

1) Click **"OK"** to save the configuration.

1) In the top-right corner of WebStorm, select the created configuration from the dropdown.

1) Click on the green play button or press <kbd>shift</kbd>+<kbd>F10</kbd> to launch the server without debugging.
   Alternatively, you can click on the green-red bug button or press <kbd>shift</kbd>+<kbd>F9</kbd> to launch the server
   with debugging.

## Next Steps

Congratulations! You have successfully set up the FDM Monster client. You can now start developing the client.

To set up a Virtual printer follow the [OctoPrint Setup](./setup_octoprint.md) documentation.
