"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  try {
    // Here you would typically send an email, save to a database, etc.
    // For this example, we'll just simulate a successful submission.
    console.log("Form submitted successfully:", values);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true, message: "Form submitted successfully." };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
