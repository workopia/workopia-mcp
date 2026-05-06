#!/usr/bin/env node
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const mcpRemoteBin = resolve(here, "../node_modules/.bin/mcp-remote");

const child = spawn(
  mcpRemoteBin,
  ["https://workopia.io/api/mcp-gpt"],
  { stdio: "inherit" }
);

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => {
  console.error("Failed to spawn mcp-remote:", err);
  process.exit(1);
});
