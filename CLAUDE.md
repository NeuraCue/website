# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this
repository.

## Project Overview

Ice Breaker is a Flask-based web application that generates personalized conversation starters by
analyzing LinkedIn and Twitter profiles using LangChain and OpenAI.

## Development Commands

### Running the Application

```bash
# Install dependencies
pipenv install

# Run the Flask application
pipenv run python app.py

# Or directly with pipenv shell
pipenv shell
python app.py
```

### Code Quality Tools

```bash
# Format code with Black
pipenv run black .

# Sort imports with isort
pipenv run isort .

# Lint code with pylint
pipenv run pylint [module_name]
```

### Testing

```bash
# Note: No test files currently exist, but the README mentions pytest
pipenv run pytest .
```

## Architecture & Key Components

### Core Pipeline Flow (`ice_breaker.py:ice_break_with()`)

The main orchestration function follows this sequence:

1. **Profile Discovery**: ReAct agents use Tavily search to find LinkedIn/Twitter URLs from a
   person's name
2. **Data Scraping**: Third-party APIs fetch profile and tweet data
3. **AI Processing**: Three parallel LangChain chains process the data:
    - Summary chain (temp=0): Generates profile summary + 2 interesting facts
    - Interests chain (temp=0): Identifies 3 topics of interest
    - Ice breaker chain (temp=1): Creates 2 creative conversation starters
4. **Output Formatting**: Pydantic parsers structure responses into JSON-serializable objects
5. **API Response**: Flask endpoint returns all data plus profile photo URL

### LangChain Chain Architecture (`chains/custom_chains.py`)

All chains follow the LCEL (LangChain Expression Language) pattern:

```python
PromptTemplate | ChatOpenAI | PydanticOutputParser
```

- Chains use `|` pipe operator for composition (LCEL syntax)
- Pydantic parsers inject format instructions into prompts automatically
- Output parsers validate and structure LLM responses into typed objects

### Key Modules

- **agents/**: LangChain ReAct agents for profile discovery
    - Uses `create_react_agent()` with hwchase17/react prompt from LangChain Hub
    - Agents run with `verbose=True` for debugging
    - Tools: `get_profile_url_tavily()` for web search

- **chains/**: Custom LangChain sequences for AI processing
    - Three distinct chains: summary (temp=0), interests (temp=0), ice breakers (temp=1)
    - All use GPT-3.5-turbo model via `ChatOpenAI`
    - Ice breaker chain uses creative temperature (1.0) for variety

- **third_parties/**: External API integrations
    - `linkedin.py`: Scrapin.io API wrapper (supports `mock=True` flag for testing)
    - `twitter.py`: Twitter API integration with mock fallback

- **output_parsers.py**: Pydantic models with `to_dict()` methods
    - `Summary`: summary (str) + facts (List[str])
    - `TopicOfInterest`: topics_of_interest (List[str])
    - `IceBreaker`: ice_breakers (List[str])

## API Dependencies

Required environment variables in `.env`:

- `OPENAI_API_KEY` - OpenAI API for LLM
- `SCRAPIN_API_KEY` - Scrapin.io for LinkedIn data (note: `.env.example` shows `PROXYCURL_API_KEY`
  but code uses `SCRAPIN_API_KEY`)
- `TAVILY_API_KEY` - Tavily for web search
- Twitter API credentials (optional, mock mode available):
    - `TWITTER_API_KEY`, `TWITTER_API_KEY_SECRET`, `TWITTER_BEARER_TOKEN`
    - `TWITTER_ACCESS_TOKEN`, `TWITTER_ACCESS_SECRET`

Optional LangSmith tracing:

- `LANGCHAIN_TRACING_V2=true`
- `LANGCHAIN_API_KEY`
- `LANGCHAIN_PROJECT=ice_breaker`

**Important**: LangSmith tracing requires a valid API key if enabled, otherwise the app will error.

## Development Notes

- Agents use GPT-4o-mini, chains use GPT-3.5-turbo
- Current implementation uses `scrape_user_tweets_mock()` in [ice_breaker.py:25](ice_breaker.py#L25)
  instead of real Twitter API
- LinkedIn scraping supports mock mode via `scrape_linkedin_profile(url, mock=True)`
- Flask runs in debug mode by default on 0.0.0.0:5000
- ReAct agents print verbose execution traces to console
- No unit tests currently exist despite pytest being a dependency
- `.env.example` lists PROXYCURL_API_KEY but actual code expects SCRAPIN_API_KEY
