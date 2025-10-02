# Master Claude Code

## Objective

- Claude Code Features
- Adopt Agentic Workflows
- Context Engineering
- Build Real World Applications with AI
- FUTURE

## Target Audience

- Software Engineers (Cursor Experience)
- Data Scientists (Cursor Experience)
- Technical Product Managers
- Anyone who is comfortable with Code
- GenAI experience is required

## Pre-requisites

- Python / TypeScript knowledge
- Vibe Coding Experience (Cursor / Windsurf)
- Git usage
- Virtual Environments, environment variables
- RAG, Agents, Cursor

## Claude Code Context Philosophy

- Claude Code addresses these challenges through a **hierarchical, persistent, and dynamic context
  management system** that implements all four core context engineering strategies:
    - **Write Context:** Persistent memory systems
    - **Select Context:** Intelligent context retrieval and injection
    - **Compress Context:** Efficient context representation and summarization
    - **Isolate Context:** Multi-agent and scoped context management

## HookHub Project

- cd `hookhub`
- npx create-next-app@latest
- npm run dev
- Install Claude
    - npm install -g @anthropic-ai/claude-code
    - npm config get prefix
    - echo 'export PATH="/usr/local/Cellar/node/24.9.0/bin:$PATH"' >> ~/.zshrc
    - source ~/.zshrc
    - claude --version
- Claude Code Extension in Cursor IDE
    - cursor --install-extension ~
      /.claude/local/node_modules/@anthropic-ai/claude-code/vendor/claude-code.vsix
    - find ~/.claude -name "claude-code.vsix" 2>/dev/null
    - claude
    - /terminal-setup
    - /ide
    - /init -> gives claude context of current project

## MCP

- claude mcp add playwright npx @playwright/mcp@latest -s user
- /mcp
- open browser on cnn.com

## Resources

- [Discord Server](https://discord.com/invite/GrbzSbnvFX)
- [GitHub Repo](https://github.com/emarco177/claude-code-crash-course)
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Cursor MCP Docs](https://cursor.com/docs/context/mcp)
- [Context Engineering](https://blog.langchain.com/context-engineering-for-agents/)
- [Context Poisoning](https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html?ref=blog.langchain.com#context-poisoning)
- [GitHub: Playwright MCP](https://github.com/microsoft/playwright-mcp)
