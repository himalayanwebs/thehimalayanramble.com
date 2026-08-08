import { z } from "zod";

// Mirrors legacy script.js's initContactForm() validation exactly:
// required fields non-empty, email regex, phone regex — dates/destination
// stay optional. Kept as a single source of truth for both the client
// resolver and (if we ever add one) a server-side check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-\s()]{7,15}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a valid phone number.")
    .regex(PHONE_RE, "Enter a valid phone number."),
  email: z
    .string()
    .trim()
    .min(1, "Enter a valid email address.")
    .regex(EMAIL_RE, "Enter a valid email address."),
  dates: z.string().trim().optional(),
  destination: z.string().optional(),
  message: z.string().trim().min(1, "Let us know a little about your trip."),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const CONTACT_DEFAULT_VALUES: ContactValues = {
  name: "",
  phone: "",
  email: "",
  dates: "",
  destination: "",
  message: "",
};
