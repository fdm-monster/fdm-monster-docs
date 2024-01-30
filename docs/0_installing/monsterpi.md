---
title: MonsterPi for Raspberry Pi
description: How to setup MonsterPi for your FDM-Monster environment
image: ../images/raspberrypi/raspberrypi-imager.png
keywords: [ fdm-monster, OctoPrint, 3d-printing, monsterpi ]
sidebar_position: 1
id: monsterpi
permalink: :baseUrl/:docsUrl/:langPart/:versionPart/installing/:id
---

[MonsterPi](https://github.com/fdm-monster/MonsterPi) is a [Raspberry Pi](https://www.raspberrypi.org/) image built
using [CustomPiOS](https://github.com/guysoft/CustomPiOS).

This Raspberry Pi image includes [FDM Monster](https://fdm-monster.net/) and [MongoDB](https://www.mongodb.com/).

All released image versions can be downloaded from the [Releases](https://github.com/fdm-monster/MonsterPi/releases)
page.

## Latest Version

[![Latest Version](https://img.shields.io/github/v/release/fdm-monster/monsterpi.svg?color=d52828&label=stable)](https://github.com/fdm-monster/monsterpi/releases/latest)
[![Latest pre-release](https://img.shields.io/github/v/release/fdm-monster/monsterpi?include_prereleases&color=d52828&label=pre-release)](https://github.com/fdm-monster/MonsterPi/releases)

The downloaded file needs to be unzipped before flashing it to your SD Card. Use your favorite unzipping application to
extract the files.

:::note
Older MonsterPi releases can be downloaded from [GitHub Releases](https://github.com/fdm-monster/MonsterPi/releases).
:::

### Installing MonsterPi

Steps:

1) Download [Raspberry Pi Imager](https://www.raspberrypi.com/software/)
1) Insert a 16GB+ SD Card of high quality (class 10) and decent brand, **do not save money on this**!
1) Flash the image on the SD card. Do not forget to set the configuration (WiFi, SSH, hostname) according to your
   specifications: ![Screenshot of Raspberry Pi Imager advanced options](../images/raspberrypi/raspberrypi-imager.png)
1) Insert the SD card into your Raspberry Pi 3 or 4 and power it up (with a recommended 5.1V power supply)
1) Visit [http://monsterpi.local:4000](http://monsterpi.local:4000) to access FDM Monster
1) Alternatively, you can visit [http://monsterpi.local](http://monsterpi.local)
   or [https://monsterpi.local (Self-Signed SSL Certificate)](https://monsterpi.local) to access FDM Monster

## Upgrading FDM Monster in MonsterPi

:::warning
Upgrading MonsterPi requires you to have SSH knowledge. If you do not feel comfortable making those changes, please do
not continue and ask an expert to assist you!
:::

### MonsterPi Version 0.2.0 -> 0.3.0+

Run the following commands as the `pi` user and execute an update with root elevation.

```bash
cd ~/fdm-monster-daemon

# Deploy the FDM Monster server update
sudo bash ./update-fdm-monster.sh 
```

### Updating MonsterPi manually 0.1.x -> 0.2.0

:::warning
This strategy allows you to stick with 0.1.1. I cannot recommend it in the long run, because the image of 0.2.0
has changed quite a bit.

This upgrade will **not** install:

- HAProxy
- gencert (SSL certificate generator)
- welcome script

:::

We will be downloading a gist from Github. You can also download the latest version of the file yourself
from [this Github URL](https://github.com/fdm-monster/MonsterPi/blob/main/src/modules/monsterpi/filesystem/home/pi/fdm-monster-daemon/update-fdm-monster.sh).

Run the following commands as the `pi` user and execute an update with root elevation.

```bash
cd ~/fdm-monster-daemon

# Download new script
wget https://gist.githubusercontent.com/davidzwa/f0e094bd2223a0f1907009d576ad0b77/raw/4cf65be675dc09439873d504acf25abd32cda9c3/update-fdm-monster.sh -O ~/fdm-monster-daemon/update-fdm-monster.sh

# Deploy the FDM Monster server update
sudo bash ./update-fdm-monster.sh 
```
