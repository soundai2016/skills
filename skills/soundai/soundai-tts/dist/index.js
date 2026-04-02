// index.ts
import { definePluginEntry } from "openclaw/plugin-sdk";

// audio.ts
var DEFAULT_SOUNDAI_TTS_BASE_URL = "https://openapi-gateway-azero.soundai.com";
var DEFAULT_SOUNDAI_TTS_VOICE = "zh-CN-XiaoxiaoNeural";
async function generateSoundAiAudio(options, settings = {}) {
  const baseUrl = settings.baseUrl || DEFAULT_SOUNDAI_TTS_BASE_URL;
  const url = `${baseUrl}/tts-api/v3/speech`;
  const apiKey = settings.apiKey || process.env.SOUNDAI_API_KEY;
  if (!apiKey) {
    throw new Error("SoundAI API key is missing. Please set SOUNDAI_API_KEY in your environment or provide it in settings.");
  }
  const requestBody = {
    text: options.text,
    voice: settings.voice || DEFAULT_SOUNDAI_TTS_VOICE,
    speed: settings.speed ?? 1,
    volume: settings.volume ?? 80,
    format: settings.format || "mp3"
  };
  const timeoutMs = settings.timeoutMs || 3e4;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `SaiApi ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status} ${response.statusText}`;
      try {
        const errorText = await response.text();
        if (errorText) {
          errorMessage += ` - ${errorText}`;
        }
      } catch (e) {
      }
      throw new Error(`SoundAI TTS failed: ${errorMessage}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return {
      buffer,
      mime: "audio/mp3"
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error(`SoundAI TTS request timed out after ${timeoutMs}ms`);
    }
    throw error;
  }
}
var soundAiTTSProvider = {
  async generateAudio(options) {
    return generateSoundAiAudio(options);
  }
};

// index.ts
var index_default = definePluginEntry({
  mediaGeneration: {
    "soundai-tts": soundAiTTSProvider
  }
});
export {
  index_default as default
};
