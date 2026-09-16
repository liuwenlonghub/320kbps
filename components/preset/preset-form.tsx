"use client";

import { useState } from "react";
import type { DragEvent, ChangeEvent } from "react";
import type { PresetField } from "@/lib/ffmpeg/types/preset";

type PresetFormProps = {
  fields: readonly PresetField[];
  values: Record<string, string | number>;
  onChange: (id: string, value: string | number) => void;
  onFileChange?: (id: string, file: File) => void;
};

function formatAcceptedTypes(
  accept?: string,
): string | null {
  if (!accept) {
    return null;
  }

  const formats = accept
    .split(",")
    .map((value) => value.trim())
    .map((value) => {
      const extension = value.split("/").pop();

      if (!extension) {
        return value;
      }

      const aliases: Record<string, string> = {
        "x-matroska": "MKV",
        "quicktime": "MOV",
        "x-msvideo": "AVI",
        "mpeg": "MPG",
        "jpeg": "JPG",
        "webp": "WebP",
      };

      return (
        aliases[extension] ??
        extension.toUpperCase()
      );
    });

  return [...new Set(formats)].join(", ");
}

export function PresetForm({
  fields,
  values,
  onChange,
  onFileChange,
}: PresetFormProps) {
  const [draggingField, setDraggingField] =
    useState<string | null>(null);

  function handleFile(
    fieldId: string,
    file: File,
  ) {
    onChange(fieldId, file.name);
    onFileChange?.(fieldId, file);
  }

  function handleInputChange(
    fieldId: string,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const file = event.target.files?.[0];

    if (file) {
      handleFile(fieldId, file);
    }
  }

  function handleDragOver(
    fieldId: string,
    event: DragEvent<HTMLLabelElement>,
  ) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    setDraggingField(fieldId);
  }

  function handleDragLeave(
    fieldId: string,
    event: DragEvent<HTMLLabelElement>,
  ) {
    event.preventDefault();

    if (event.currentTarget.contains(event.relatedTarget as Node)) {
      return;
    }

    setDraggingField((current) =>
      current === fieldId ? null : current,
    );
  }

  function handleDrop(
    fieldId: string,
    event: DragEvent<HTMLLabelElement>,
  ) {
    event.preventDefault();
    setDraggingField(null);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      handleFile(fieldId, file);
    }
  }

  return (
    <div className="space-y-6">
      {fields.map((field) => {
        const acceptedTypes =
          field.type === "file"
            ? formatAcceptedTypes(field.accept)
            : null;

        if (field.type === "file") {
          const isDragging =
            draggingField === field.id;

          return (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="text-sm font-medium"
              >
                {field.label}
              </label>

              <label
                htmlFor={field.id}
                onDragOver={(event) =>
                  handleDragOver(field.id, event)
                }
                onDragLeave={(event) =>
                  handleDragLeave(field.id, event)
                }
                onDrop={(event) =>
                  handleDrop(field.id, event)
                }
                className={`mt-2 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-8 text-center transition-colors ${
                  isDragging
                    ? "border-zinc-950 bg-zinc-100"
                    : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-zinc-100/70"
                }`}
              >
                <span className="text-sm font-medium text-zinc-950">
                  {isDragging
                    ? "Release to upload"
                    : "Drop your file here"}
                </span>

                <span className="mt-1 text-sm text-zinc-500">
                  or click to choose a file
                </span>

                {acceptedTypes && (
                  <span className="mt-3 text-xs text-zinc-400">
                    Supported formats: {acceptedTypes}
                  </span>
                )}

                <input
                  id={field.id}
                  type="file"
                  accept={field.accept}
                  onChange={(event) =>
                    handleInputChange(
                      field.id,
                      event,
                    )
                  }
                  className="sr-only"
                />
              </label>

              {values[field.id] && (
                <div className="mt-3 flex items-center justify-between rounded-xl bg-zinc-50 px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-zinc-950">
                      {values[field.id]}
                    </p>

                    <p className="mt-1 text-xs text-zinc-400">
                      Selected file
                    </p>
                  </div>

                  <span className="ml-4 shrink-0 text-xs text-zinc-400">
                    Ready
                  </span>
                </div>
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
                  onChange(
                    field.id,
                    event.target.value,
                  )
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