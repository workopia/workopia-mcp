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

## Sign up and sign in

There is no separate GitHub-repository account and no API key to create. The first time an MCP client calls a Workopia tool, it opens the Workopia authorization page in your browser. Sign in with an email code, Google, LinkedIn, or GitHub.

- If that verified email already has a Workopia profile, the MCP connection uses it.
- Otherwise Workopia creates a minimal profile for that verified email.
- The MCP client stores and refreshes its OAuth token. Disconnect or remove Workopia in the client to revoke its local connection.
- Using the same verified email from another supported client connects activity to the same Workopia profile; it does not create a separate MCP-only account.

OAuth uses Authorization Code + PKCE and Dynamic Client Registration. Never paste a Workopia password, email code, OAuth token, or resume into this repository or a GitHub issue.

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

## Account activity and privacy

Authenticated tool actions such as job searches, job views, saved jobs, applications, resume operations, and cover-letter creation may be associated with your Workopia profile so your dashboard and history work across supported MCP clients. Workopia records the integration family (for example MCP) and, when the OAuth client identifies itself, the client type (for example Codex, Claude Code, Cursor, or Windsurf).

Conversation transcripts are not collected by this MCP server. Activity records do not contain OAuth tokens or raw resume text. Resume content needed for a requested resume operation is handled under the Workopia privacy policy linked below.

## Report a bug / request a feature

Found something broken or want a tool improved? **[Open an issue](https://github.com/workopia/workopia-mcp/issues/new/choose)** — this repo is where we track bugs and feedback for the Workopia MCP server and Claude Code plugin. For account, billing, or anything private, email `shuang@heraai.one`.

## About

Built by **HERAAI PTY LLC**. Privacy policy: https://workopia.io/privacy
