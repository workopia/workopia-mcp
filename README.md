# Workopia MCP Server

Job search, resume tailoring, cover letters & application tracking — available via the Model Context Protocol for Claude Code, Claude Desktop, Cursor, Windsurf, and other MCP clients.

> **Note:** This is a hosted MCP server. Connect via the public endpoint below and sign in with Workopia (OAuth) — no API key to manage. All tools require a free Workopia sign-in; searching, job detail, resume tailoring, cover letters, and your dashboard are all scoped to your account. Resume tailoring and cover letters run on your own AI client's model — Workopia hosts no LLM and never charges for AI.

## Endpoint

```
https://workopia.io/api/mcp-jobs
```

- **Transport:** Streamable HTTP
- **Auth:** OAuth 2.0 (Dynamic Client Registration + PKCE; handled automatically by the client)
- **Website:** https://workopia.io

## Install as a Claude Code plugin

```
/plugin marketplace add workopia/workopia-mcp
/plugin install workopia-jobs
```

On first tool use, Claude Code opens the Workopia OAuth flow in your browser; the token is then stored and refreshed automatically.

## Tools

| Tool | What it does |
|------|--------------|
| `job_tool` | Search millions of live jobs across 90+ countries (employer career pages + ATS feeds — Lever, Greenhouse, Workday). Save a job to your account (sign-in). |
| `job_detail_tool` | Full detail for a single job — salary, requirements, skills, company. |
| `tailor_resume_tool` | Tailor your resume to a specific job description. |
| `cover_letter_tool` | Draft a cover letter for a specific role. |
| `dashboard_tool` | Open your Workopia dashboard — saved, tailored & applied jobs + latest resume (sign-in). |

## Quick start (manual config)

**Claude Desktop** — add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "workopia": {
      "type": "streamable-http",
      "url": "https://workopia.io/api/mcp-jobs"
    }
  }
}
```

**Cursor** — `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "workopia": { "url": "https://workopia.io/api/mcp-jobs" }
  }
}
```

**ChatGPT** — search "Workopia" in the ChatGPT App Store.

## Also listed on

- MCP Registry: `io.github.Shuangshuang007/workopia`
- npm: [`@shuang_workopia/workopia-mcp`](https://www.npmjs.com/package/@shuang_workopia/workopia-mcp)
- OpenClaw ClawHub: [`Shuangshuang007/workopia`](https://clawhub.ai/Shuangshuang007/workopia)

## Live on Glama

[![workopia-mcp MCP server](https://glama.ai/mcp/servers/workopia/workopia-mcp/badges/score.svg)](https://glama.ai/mcp/servers/workopia/workopia-mcp)

## Quota

Free at launch. A free Workopia sign-in (OAuth) is required to use the tools — searching, job detail, resume tailoring, cover letters, and your dashboard. Need a higher quota or a custom arrangement? Email `shuang@heraai.one`.

## Report a bug / request a feature

Found something broken or want a tool improved? **[Open an issue](https://github.com/workopia/workopia-mcp/issues/new/choose)** — this repo is where we track bugs and feedback for the Workopia MCP server and Claude Code plugin. For account, billing, or anything private, email `shuang@heraai.one`.

## About

Built by **HERAAI PTY LLC**. Privacy policy: https://workopia.io/privacy
