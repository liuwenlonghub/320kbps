export type PresetCategory =
  | "audio"
  | "video"
  | "image";

export type PresetInput = {
  type: "media";
  extensions: readonly string[];
};

export type TextField = {
  type: "text";
  id: string;
  label: string;
  placeholder?: string;
  defaultValue: string;
};

export type FileField = {
  type: "file";
  id: string;
  label: string;
  accept?: string;
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
  | TextField
  | FileField
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