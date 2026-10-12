import { describe, expect, it } from "vitest";

import { getDictionary, getPresetCopy } from "../index";

describe("getPresetCopy", () => {
  it("returns localized copy for a registered preset", () => {
    const preset = {
      id: "video-to-mp3",
      title: "Fallback title",
      description: "Fallback description",
    };
    const dictionary = getDictionary("zh-cn");

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: dictionary.presets.videoToMp3.title,
      description: dictionary.presets.videoToMp3.description,
    });
  });

  it("uses preset copy when there is no translation mapping", () => {
    const preset = {
      id: "new-preset",
      title: "Preset title",
      description: "Preset description",
    };

    expect(getPresetCopy(preset, "en")).toEqual({
      title: "Preset title",
      description: "Preset description",
    });
  });
});
