# SoundAI LLM Provider for OpenClaw

This is the official SoundAI LLM provider plugin for OpenClaw. It integrates SoundAI's AzeroGPT models directly into the OpenClaw ecosystem, allowing you to use SoundAI as your primary conversational AI within the terminal.

## Features

- **Seamless Integration**: Native integration with OpenClaw's model catalog and onboarding wizard.
- **AzeroGPT Model**: Access to SoundAI's powerful `soundai/azerogpt` model.
- **API Key Authentication**: Secure API key management via OpenClaw's built-in token store.

## Installation

### From ClawHub (Recommended)

You can install this plugin directly from the OpenClaw registry:

```bash
openclaw plugins install clawhub:soundai-llm
```

### From Source

If you prefer to build from source:

1. Clone this repository and navigate to the plugin folder.
2. Build and pack the plugin:
   ```bash
   npm install
   npm run build
   npm pack
   ```
3. Install the generated `.tgz` file into OpenClaw:
   ```bash
   openclaw plugins install ./soundai-llm-*.tgz
   ```

## Configuration

After installation, restart the OpenClaw gateway to load the new plugin:

```bash
openclaw gateway restart
```

Then, run the onboarding wizard to configure your SoundAI API key and set AzeroGPT as your default model:

```bash
openclaw onboard
```
Select **SoundAI** from the list of providers and paste your API key when prompted.

### Security Allowlist (Optional)

If OpenClaw warns you about untrusted local code (usually when installing from a local source instead of the official registry), you can whitelist this plugin:

```bash
openclaw config set plugins.allow '["soundai", "soundai-llm"]'
openclaw gateway restart
```

## Usage

Once configured, OpenClaw will automatically use `soundai/azerogpt` for your conversations. You can verify the model is active by running:

```bash
openclaw models list --all --provider soundai
```

## License

MIT
