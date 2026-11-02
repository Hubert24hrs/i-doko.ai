"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm, type FieldError } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { budgetOptions, contactSchema, serviceOptions, type ContactInput } from "@/lib/validators";

type Status = "idle" | "success" | "error" | "rate_limited";

const inputClass =
  "border-line-strong bg-surface text-ink placeholder:text-subtle mt-1.5 block w-full rounded-md border px-3 py-2.5 text-[0.9375rem] transition-colors aria-[invalid=true]:border-danger";

function Field({
  id,
  label,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  error?: FieldError;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-danger">
          {error.message}
        </p>
      ) : null}
    </div>
  );
}

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus(response.status === 429 ? "rate_limited" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  function aria(name: keyof ContactInput) {
    return {
      "aria-invalid": errors[name] ? true : undefined,
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-line bg-surface p-6 sm:p-8">
        <CircleCheck className="size-6 text-success" strokeWidth={1.75} aria-hidden />
        <h2 className="mt-4 text-h3">Thanks, we have your request</h2>
        <p className="mt-2 text-muted">
          We&apos;ll read it and reply by email to arrange a consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-accent-text hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-lg border border-line bg-surface p-6 sm:grid-cols-2 sm:p-8"
    >
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          {...aria("name")}
          {...register("name")}
        />
      </Field>

      <Field id="email" label="Work email" error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          {...aria("email")}
          {...register("email")}
        />
      </Field>

      <Field id="company" label="Company" error={errors.company} className="sm:col-span-2">
        <input
          id="company"
          type="text"
          autoComplete="organization"
          className={inputClass}
          {...aria("company")}
          {...register("company")}
        />
      </Field>

      <Field id="service" label="Service of interest" error={errors.service}>
        <select
          id="service"
          defaultValue=""
          className={inputClass}
          {...aria("service")}
          {...register("service")}
        >
          <option value="" disabled>
            Choose one
          </option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field id="budget" label="Budget (USD)" error={errors.budget}>
        <select
          id="budget"
          defaultValue=""
          className={inputClass}
          {...aria("budget")}
          {...register("budget")}
        >
          <option value="" disabled>
            Choose one
          </option>
          {budgetOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field
        id="message"
        label="What do you need built?"
        error={errors.message}
        className="sm:col-span-2"
      >
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, "resize-y")}
          {...aria("message")}
          {...register("message")}
        />
      </Field>

      {/* Honeypot, kept off-screen rather than display:none so bots still fill it. */}
      <div aria-hidden className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="sm:col-span-2">
        {status === "error" || status === "rate_limited" ? (
          <p role="alert" className="mb-4 text-sm text-danger">
            {status === "rate_limited"
              ? "Too many requests. Please wait a few minutes and try again."
              : `That didn't send. Please try again shortly${
                  site.contact.email ? `, or email ${site.contact.email}` : ""
                }.`}
          </p>
        ) : null}
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending" : "Request a consultation"}
        </Button>
      </div>
    </form>
  );
}
