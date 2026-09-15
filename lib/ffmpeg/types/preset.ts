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

export type PresetExplanation = {
  title: string;
  description: string;
  parameters: readonly {
    flag: string;
    description: string;
  }[];

  dynamic?: {
    field: string;
    title: string;
    values: Record<
      string,
      {
        label: string;
        description: string;
      }
    >;
  };
};

export type Preset<
  TOptions extends Record<string, string | number> = Record<
    string,
    string | number
  >,
> = {
  id: string;
  title: string;
  description: string;
  category: PresetCategory;
  input: PresetInput;
  options: TOptions;

  output?: {
    extension: string;
    suffix?: string;
  };

  fields: readonly PresetField[];
  explanation: PresetExplanation;
};