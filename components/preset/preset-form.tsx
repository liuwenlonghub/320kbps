"use client";

import type { PresetField } from "@/lib/ffmpeg/types/preset";

type PresetFormProps = {
  fields: readonly PresetField[];
  values: Record<string, string | number>;
  onChange: (id: string, value: string | number) => void;
};

export function PresetForm({
  fields,
  values,
  onChange,
}: PresetFormProps) {
  return (
    <div className="space-y-6">
      {fields.map((field) => {
        if (field.type === "select") {
          return (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-sm font-medium"
              >
                {field.label}
              </label>

              <select
                id={field.id}
                value={values[field.id]}
                onChange={(event) => {
                  const value =
                    typeof field.defaultValue === "number"
                      ? Number(event.target.value)
                      : event.target.value;

                  onChange(field.id, value);
                }}
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400"
              >
                {field.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}