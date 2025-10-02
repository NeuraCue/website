# Claude HookHub App

## Set Up Project

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
- npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*"

## MCP

- claude mcp add playwright npx @playwright/mcp@latest -s user
- /mcp
- open browser on cnn.com
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)
- [Context7 MCP](https://context7.com/)
    - claude mcp add --transport http context7 https://mcp.context7.com/mcp --header 
      "CONTEXT7_API_KEY: YOUR_API_KEY" --scope project
    - claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY

## Hook

- python3 -m venv venv
- source venv/bin/activate
- pip install pygame
- python3 play_sound.py
- /hook ->

## Notifications

- https://ntfy.sh/
