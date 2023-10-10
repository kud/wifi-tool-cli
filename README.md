# 📡 WiFi Tool

A simple command line tool to manage your WiFi settings on macOS.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Support](#support)
5. [License](#license)

## Features

- **Start**, **Stop**, or **Restart** your WiFi with ease.
- **List** available SSIDs around you. (Note: doesn't work when sharing is ON).
- **Info**: Display the current network's information.

## Installation

Make sure you have Node.js installed. If not, download it from the [Node.js official website](https://nodejs.org/).

Then, install the tool globally:

```bash
$ npm install -g wifi-tool
```

## Usage

Use the following commands:

```bash
# To start the WiFi
$ wifi-tool start

# To stop the WiFi
$ wifi-tool stop

# To restart the WiFi
$ wifi-tool restart

# To list SSIDs
$ wifi-tool list

# To get info about the current network
$ wifi-tool info
```

For more options:

```bash
$ wifi-tool --help
```

## Support

For more information, check out the documentation or open an issue [here](https://github.com/kud/wifi-tool-cli).

## License

This project is licensed under the MIT License.
