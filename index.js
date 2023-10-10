#!/usr/bin/env node

import { $ } from "zx"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import chalk from "chalk"
import ora from "ora"

$.verbose = false
const airport =
  "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport"

const startWifi = async () => {
  await $`networksetup -setairportpower en1 on`
  console.log("🚀 WiFi started.")
}

const stopWifi = async () => {
  await $`networksetup -setairportpower en1 off`
  console.log("🚫 WiFi stopped.")
}

const restartWifi = async () => {
  await $`networksetup -setairportpower en1 off`
  await $`networksetup -setairportpower en1 on`
  console.log("🔄 WiFi restarted.")
}

const listSsid = async () => {
  const spinner = ora("Loading networks...").start()
  spinner.color = "blue"

  const result = await $`${airport} scan`

  spinner.stop()
  console.log("")
  console.log(result.stdout)
}

const showNetworkInfo = async () => {
  const info = await $`${airport} -I`
  console.log("")
  console.log(info.stdout)
}

yargs(hideBin(process.argv))
  .scriptName(chalk.cyan("wifi-tool"))
  .usage(chalk.white("Usage: $0 [<command>|--help]"))
  .command("start", chalk.black("Start WiFi"), {}, startWifi)
  .command("stop", chalk.black("Stop WiFi"), {}, stopWifi)
  .command("restart", chalk.black("Restart WiFi"), {}, restartWifi)
  .command("list", chalk.black("List SSID"), {}, listSsid)
  .command("info", chalk.black("Show network information"), {}, showNetworkInfo)
  .demandCommand(1, "")
  .help()
  .version("1.0.0")
  .epilogue(chalk.yellow("For more information, check out the documentation."))
  .fail((msg, err, yargsInstance) => {
    if (!msg) {
      yargsInstance.showHelp()
      process.exit(0)
    }
    if (err) throw err
    console.error(chalk.red("Error!"))
    console.error(chalk.red(msg))
    process.exit(1)
  }).argv
