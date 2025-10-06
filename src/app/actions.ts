
"use server";

// This file is no longer used for the contact form submission, 
// as the logic has been moved to the client-side to open WhatsApp.
// You can remove this file or repurpose it for other server actions.

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  try {
    // This server action is no longer directly used by the contact form.
    // The client-side now handles opening WhatsApp.
    console.log("Form values (not sent):", values);
    
    return { success: true, message: "Action executed, but WhatsApp is handled client-side." };
  } catch (error) {
    console.error("Error in unused form action:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}
