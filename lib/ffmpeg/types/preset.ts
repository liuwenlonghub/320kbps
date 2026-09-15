export type PresetCategory =
  | "audio"
  | "video"
  | "image";

export type PresetInput = {
  type: "media";
  extensions: readonly string[];
};

export type SelectOption<T extends string | number> = {
  label: string;
  value: T;
};

export type SelectField<T extends string | number> = {
  type: "select";
  id: string;
  label: string;
  options: readonly SelectOption<T>[];
  defaultValue: T;
};

export type PresetField =
  | SelectField<string>
  | SelectField<number>;

export type Preset<TOptions = Record<string, unknown>> = {
  id: string;
  title: string;
  description: string;
  category: PresetCategory;
  input: PresetInput;
  options: TOptions;
  fields: readonly PresetField[];
};