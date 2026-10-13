import { describe, expect, it } from "vitest";

import { buildGifToMp4OutputFilename } from "../gif-to-mp4";

describe("buildGifToMp4OutputFilename", () => {
  it("replaces the input extension with mp4", () => {
    expect(
      buildGifToMp4OutputFilename({
        input: "animation.gif",
        output: "custom-name.mp4",
      }),
    ).toBe("animation.mp4");
  });
});