 # Workopia MCP Server                                                                                                                                                               
                  
  Job search, resume builder & career advice — available via the Model Context Protocol for Claude Desktop, ChatGPT, Cursor, Windsurf, and other MCP clients.                         
  
  > **Note:** This is a hosted closed-source MCP server. Connect via the public endpoint below — no installation or API key required.                                                 
                  
  ## Endpoint                                                                                                                                                                         
                  
  ```
  https://workopia.io/api/mcp-gpt
  ```                                                                                                                                                                                 
  
  - **Transport:** Streamable HTTP                                                                                                                                                    
  - **Auth:** None
  - **Website:** https://workopia.io                                                                                                                                                  
  
  ## Tools                                                                                                                                                                            
                  
  | Tool | What it does |
  |------|--------------|
  | `job_tool` | Search millions of jobs sourced from employer career pages and ATS feeds (Lever, Greenhouse). No scraping. |
  | `resume_tool` | Generate PDF resumes with 50+ templates (JSON Resume format). |                                                                                                   
  | `career_tool` | AI-powered career transition advice and skill gap analysis. |                                                                                                     
                                                                                                                                                                                      
  ## Quick Start                                                                                                                                                                      
                                                                                                                                                                                      
  **Claude Desktop** — add to `claude_desktop_config.json`:                                                                                                                           
  
  ```json                                                                                                                                                                             
  {               
    "mcpServers": {
      "workopia": {
        "type": "streamable-http",
        "url": "https://workopia.io/api/mcp-gpt"
      }                                                                                                                                                                               
    }
  }                                                                                                                                                                                   
  ```             

  **Cursor** — `.cursor/mcp.json`:                                                                                                                                                    
  
  ```json                                                                                                                                                                             
  {               
    "mcpServers": {
      "workopia": { "url": "https://workopia.io/api/mcp-gpt" }
    }
  }                                                                                                                                                                                   
  ```
                                                                                                                                                                                      
  **ChatGPT** — search "Workopia" in the ChatGPT App Store.

  ## Also listed on                                                                                                                                                                   
  
  - MCP Registry: `io.github.Shuangshuang007/workopia`                                                                                                                                
  - npm: [`@shuang_workopia/workopia-mcp`](https://www.npmjs.com/package/@shuang_workopia/workopia-mcp)
  - OpenClaw ClawHub: [`Shuangshuang007/workopia`](https://clawhub.ai/Shuangshuang007/workopia)                                                                                       
                                                                                                                                                                                      
  ## About                                                                                                                                                                            
                                                                                                                                                                                      
  Built by **HERAAI PTY LLC**. Privacy policy: https://workopia.io/privacy                                                                                                            
