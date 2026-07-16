import React, { useState, useRef, useId } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { FieldShell } from "./FieldShell";

/**
 * FileInputField — a drag-and-drop styled file uploader zone with a
 * file list / preview state (name, size, progress bar, remove button).
 *
 * Props: label, description, error, accept, multiple (default true),
 * maxSizeMb (display only), onFilesChange(File[]), wrapperClassName.
 */
export function FileInputField({
  label,
  description,
  error,
  accept,
  multiple = true,
  maxSizeMb = 10,
  onFilesChange,
  wrapperClassName = "",
}) {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);
  const fieldId = useId();

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList).map((file) => ({
      file,
      id: `${file.name}-${file.size}-${Math.random().toString(36).slice(2, 8)}`,
      progress: 100,
    }));
    const next = multiple ? [...files, ...incoming] : incoming;
    setFiles(next);
    onFilesChange?.(next.map((f) => f.file));
  };

  const removeFile = (id) => {
    const next = files.filter((f) => f.id !== id);
    setFiles(next);
    onFilesChange?.(next.map((f) => f.file));
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <FieldShell id={fieldId} label={label} description={description} error={error} className={wrapperClassName}>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-all duration-150 ${
          isDragging
            ? "border-[var(--color-primary)] bg-[var(--color-primary-soft)]"
            : error
            ? "border-[var(--color-danger)]/50 bg-[var(--color-danger-soft)]"
            : "border-[var(--color-border-strong)] bg-[var(--color-background)] hover:border-[var(--color-primary)]/50 hover:bg-[var(--color-primary-soft)]/40"
        }`}
      >
        <input
          ref={inputRef}
          id={fieldId}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={(e) => e.target.files?.length && addFiles(e.target.files)}
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
          <UploadCloud size={18} />
        </div>
        <p className="text-sm font-medium text-[var(--color-foreground)]">
          <span className="text-[var(--color-primary)]">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-[var(--color-muted-text)]">
          {accept ? accept.split(",").join(", ").toUpperCase() : "Any file"} · up to {maxSizeMb}MB
        </p>
      </div>

      {files.length > 0 && (
        <ul className="mt-1 flex flex-col gap-2">
          {files.map(({ file, id, progress }) => (
            <li
              key={id}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-2.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                <FileText size={15} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-[var(--color-foreground)]">{file.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--color-border)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-primary)] transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-[10px] text-[var(--color-muted-text)]">
                    {formatSize(file.size)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(id);
                }}
                className="shrink-0 rounded-md p-1 text-[var(--color-muted-text)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-danger)]"
                aria-label={`Remove ${file.name}`}
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </FieldShell>
  );
}

export default FileInputField;