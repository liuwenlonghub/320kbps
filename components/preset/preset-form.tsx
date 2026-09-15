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
        if (field.type === "file") {
          return (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-sm font-medium"
              >
                {field.label}
              </label>

              <input
                id={field.id}
                type="file"
                accept={field.accept}
                onChange={(event) => {
                  const file = event.target.files?.[0];

                  if (file) {
                    onChange(field.id, file.name);
                  }
                }}
                className="mt-2 block w-full text-sm text-zinc-500 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-700 hover:file:bg-zinc-200"
              />

              {values[field.id] && (
                <p className="mt-2 text-sm text-zinc-500">
                  {values[field.id]}
                </p>
              )}
            </div>
          );
        }
        if (field.type === "text") {
          return (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-sm font-medium"
              >
                {field.label}
              </label>

              <input
                id={field.id}
                type="text"
                value={values[field.id] ?? ""}
                placeholder={field.placeholder}
                onChange={(event) =>
                  onChange(field.id, event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400"
              />
            </div>
          );
        }

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