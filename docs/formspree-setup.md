# Formspree Setup — Siflon Group Enquiry Form

## 1. Create the Formspree form
1. Sign in at https://formspree.io.
2. Create a new form. Choose the email that should receive enquiries (e.g. info@siflonpharma.com).
3. Copy the form endpoint URL (e.g. `https://formspree.io/f/xxxxxxxx`).

## 2. Configure locally
1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the endpoint URL from step 1.
3. Restart the dev server (`npm run dev`).

## 3. Configure in production (hosting)
Set the environment variable `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in the hosting provider's environment settings to the same endpoint URL. Do not commit the real value.

## 4. Test
- With endpoint configured: submit the form on `/contact`, expect a success message and an email to the configured recipient.
- With endpoint unset: the form shows an "not configured" message and directs users to email/phone. No fake success is shown.
- On network/API failure: an error banner is shown; the form stays editable.

## 5. Files NOT to commit
- `.env.local` and any file containing the real endpoint.
- Only `.env.example` (with an empty value) is committed.
