
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});


const YOUR_WHATSAPP_NUMBER = "6374992158";

export function ContactSection() {
  const { toast } = useToast();
  const developerImage = PlaceHolderImages.find(p => p.id === "developer-photo");
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    const { name, email, message } = values;
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    const whatsappUrl = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Simulate a delay to allow the user to send the message
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    toast({
      title: "Ready to Send!",
      description: "Your message has been prepared in WhatsApp.",
    });
    form.reset();
  };

  return (
    <section id="contact" ref={ref} className={cn("transition-all duration-1000 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
      <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto p-0 overflow-hidden bg-transparent border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 md:p-12 bg-white/10 backdrop-blur-2xl">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your project..." {...field} className="min-h-[120px]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full font-bold" size="lg" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
            <div className="relative hidden md:block">
              {developerImage && (
                <Image
                  src={developerImage.imageUrl}
                  alt={developerImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={developerImage.imageHint}
                />
              )}
  
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
