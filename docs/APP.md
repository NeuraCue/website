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

## MCP

- claude mcp add playwright npx @playwright/mcp@latest -s user
- /mcp
- open browser on cnn.com
