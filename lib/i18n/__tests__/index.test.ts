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

  it("returns localized copy for the image resizing preset", () => {
    const preset = {
      id: "resize-image",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.resizeImage.title,
      description: getDictionary("zh-cn").presets.resizeImage.description,
    });
  });

  it("returns localized copy for the image compression preset", () => {
    const preset = {
      id: "compress-image",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.compressImage.title,
      description: getDictionary("zh-cn").presets.compressImage.description,
    });
  });

  it("returns localized copy for the image to JPEG preset", () => {
    const preset = {
      id: "image-to-jpeg",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.imageToJpeg.title,
      description: getDictionary("zh-cn").presets.imageToJpeg.description,
    });
  });

  it("returns localized copy for the image to PNG preset", () => {
    const preset = {
      id: "image-to-png",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.imageToPng.title,
      description: getDictionary("zh-cn").presets.imageToPng.description,
    });
  });

  it("returns localized copy for the image format converter preset", () => {
    const preset = {
      id: "image-to-image-format",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.imageToImageFormat.title,
      description:
        getDictionary("zh-cn").presets.imageToImageFormat.description,
    });
  });

  it("returns localized copy for the general audio-to-MP3 preset", () => {
    const preset = {
      id: "audio-to-mp3",
      title: "Fallback title",
      description: "Fallback description",
    };

    expect(getPresetCopy(preset, "zh-cn")).toEqual({
      title: getDictionary("zh-cn").presets.audioToMp3.title,
      description: getDictionary("zh-cn").presets.audioToMp3.description,
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
