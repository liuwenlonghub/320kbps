export type PresetCategory =
  | "audio"
  | "video"
  | "image";

export type PresetInput = {
  type: "media";
  extensions: readonly string[];
};

export type Preset<TOptions = Record<string, unknown>> = {
  id: string;
  title: string;
  description: string;
  category: PresetCategory;
  input: PresetInput;
  options: TOptions;
};