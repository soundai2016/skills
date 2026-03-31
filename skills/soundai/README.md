# SoundAI Plugins for OpenClaw

This repository folder contains the official SoundAI integration plugins for the OpenClaw ecosystem. These plugins allow OpenClaw agents to leverage SoundAI's advanced AI capabilities, including speech recognition, text-to-speech, and large language models.

## Available Plugins

We currently provide three core plugins. You can install them directly via the ClawHub registry:

### 1. SoundAI LLM Provider (`soundai-llm`)
Integrates SoundAI's AzeroGPT models as a native LLM provider in OpenClaw.
- **Install**: `openclaw plugins install clawhub:soundai-llm`
- **Registry**: [View on ClawHub](https://clawhub.ai/plugins/soundai-llm)
- **Source**: [`soundai-llm-provider/`](./soundai-llm-provider)

### 2. SoundAI ASR Provider (`soundai-asr-provider`)
Enables OpenClaw to transcribe audio using SoundAI's highly accurate Automatic Speech Recognition.
- **Install**: `openclaw plugins install clawhub:soundai-asr-provider`
- **Registry**: [View on ClawHub](https://clawhub.ai/plugins/soundai-asr-provider)

### 3. SoundAI TTS Provider (`soundai-tts-provider`)
Allows OpenClaw to synthesize natural-sounding speech from text using SoundAI's Text-to-Speech engine.
- **Install**: `openclaw plugins install clawhub:soundai-tts-provider`
- **Registry**: [View on ClawHub](https://clawhub.ai/plugins/soundai-tts-provider)

## Quick Start

1. Install the desired plugins using the commands above.
2. Restart the OpenClaw gateway to load the newly installed plugins:
   ```bash
   openclaw gateway restart
   ```
3. Run the OpenClaw onboarding wizard to configure your SoundAI API keys:
   ```bash
   openclaw onboard
   ```

## Security & Trust

When installing these plugins, OpenClaw may prompt you to trust local/external code. You can explicitly allowlist the SoundAI plugins by running:

```bash
openclaw config set plugins.allow '["soundai", "soundai-llm", "soundai-asr-provider", "soundai-tts-provider"]'
openclaw gateway restart
```

## License
MIT

