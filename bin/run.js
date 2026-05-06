#!/usr/bin/env node
import { spawn } from "node:child_process";

const child = spawn(
  "mcp-proxy",
  ["--transport", "streamablehttp", "https://workopia.io/api/mcp-gpt"],
  { stdio: "inherit" }
);

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => {
  console.error("Failed to spawn mcp-proxy:", err);
  process.exit(1);
});
