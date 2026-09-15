"use client";

import { useState } from "react";
import { buildOutputFilename } from "@/lib/ffmpeg/output/build-output-filename";
import type { Preset } from "@/lib/ffmpeg/types/preset";

export function usePresetValues<
  TOptions extends Record<string, string | number>,
>(preset: Preset<TOptions>) {
  const [values, setValues] = useState(preset.options);

  function handleOptionChange(
    id: string,
    value: string | number,
  ) {
    setValues((current) => {
      const currentOutput = String(
        current.output ?? "",
      );

      const previousDefaultOutput =
        buildOutputFilename(
          preset,
          current,
        );

      const initialOutput = String(
        preset.options.output ?? "",
      );

      const nextValues = {
        ...current,
        [id]: value,
      };

      const shouldUpdateOutput =
        id !== "output" &&
        (
          currentOutput === initialOutput ||
          currentOutput === previousDefaultOutput
        );

      return shouldUpdateOutput
        ? {
            ...nextValues,
            output: buildOutputFilename(
              preset,
              nextValues,
            ),
          }
        : nextValues;
    });
  }

  function handleFileChange(
    id: string,
    file: File,
  ) {
    if (id !== "input") {
      return;
    }

    const filename = file.name;

    setValues((current) => {
      const currentOutput = String(
        current.output ?? "",
      );

      const previousDefaultOutput =
        buildOutputFilename(
          preset,
          current,
        );

      const initialOutput = String(
        preset.options.output ?? "",
      );

      const nextValues = {
        ...current,
        input: filename,
      };

      const shouldUpdateOutput =
        !currentOutput ||
        currentOutput === initialOutput ||
        currentOutput === previousDefaultOutput;

      return shouldUpdateOutput
        ? {
            ...nextValues,
            output: buildOutputFilename(
              preset,
              nextValues,
            ),
          }
        : nextValues;
    });
  }

  return {
    values,
    handleOptionChange,
    handleFileChange,
  };
}