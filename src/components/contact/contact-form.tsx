"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactSchema,
  CONTACT_DEFAULT_VALUES,
  type ContactValues,
} from "@/lib/validation/contact";
import { DESTINATION_GROUPS, DESTINATION_NOT_SURE } from "@/data/contact-destinations";
import { CONTACT } from "@/data/nav";
import { ContactSuccess } from "./contact-success";

const ALL_DESTINATION_VALUES = [
  ...DESTINATION_GROUPS.flatMap((group) => group.options),
  DESTINATION_NOT_SURE,
];

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: CONTACT_DEFAULT_VALUES,
  });

  // Mirrors legacy's initDestinationPrefill() exactly: read window.location
  // directly (not next/navigation's useSearchParams) so this form renders
  // in full on the very first paint — useSearchParams would force Next's
  // static export to prerender the Suspense fallback instead of real HTML.
  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("destination");
    if (!wanted) return;
    const match = ALL_DESTINATION_VALUES.find(
      (value) => value.toLowerCase() === wanted.toLowerCase()
    );
    if (match) form.setValue("destination", match);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(values: ContactValues) {
    setSubmitError(null);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New trip enquiry from ${values.name}`,
          _template: "table",
          _captcha: "false",
          ...values,
        }),
      });
      const json = await res.json();
      if (!res.ok || json.success === false || json.success === "false") {
        throw new Error(json.message || `FormSubmit responded ${res.status}`);
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong sending that — please call or WhatsApp us directly, or try again in a moment."
      );
    }
  }

  if (submitted) return <ContactSuccess />;

  return (
    <Form {...form}>
      <form className="contact-form" onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <div className="field-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Full name</FormLabel>
                <FormControl>
                  <Input id="name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="phone">Phone / WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="field-row">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input id="email" type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="dates">
                  Preferred travel dates{" "}
                  <span className="text-muted-foreground font-normal">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input id="dates" placeholder="e.g. late December, flexible" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="destination">Destination</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger id="destination" className="w-full">
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {DESTINATION_GROUPS.map((group) => (
                    <SelectGroup key={group.label}>
                      <SelectLabel>{group.label}</SelectLabel>
                      {group.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                  <SelectItem value={DESTINATION_NOT_SURE}>Not sure yet — ask me</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Group size, trip style, anything you already have in mind..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {submitError && <p className="form-error">{submitError}</p>}

        <div>
          <Button type="submit" variant="accent" size="brand" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Sending…" : "Send Enquiry"}
          </Button>
          <p className="form-note">
            We reply within one business day. No booking or payment happens here — this is the
            start of a conversation.
          </p>
        </div>
      </form>
    </Form>
  );
}
