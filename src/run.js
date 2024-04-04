#!/usr/bin/node

import "dotenv/config";
import ora from "ora";
import path from "path";
import { execSync } from "child_process";

const directory = process.cwd();
const spinner = ora("Importing the content types to Contentstack").start();
const whoamiOutput = execSync("csdx whoami", { encoding: "utf8" });

if (!process.env.CONTENTSTACK_API_KEY) {
  spinner.fail("You need to set the CONTENTSTACK_API_KEY environment variable");
  process.exit(1);
}

if (whoamiOutput.includes("You are not logged in")) {
  spinner.fail("You need to login to Contentstack. Use pnpm run login.");
  process.exit(1);
}

try {
  execSync(
    "csdx cm:stacks:import -d " +
      path.join(directory, "./data") +
      " -k " +
      process.env.CONTENTSTACK_API_KEY +
      " --skip-audit"
  );

  spinner.succeed("Content types imported");
} catch (e) {
  spinner.fail("Error importing content types");
  console.log(e);
}
