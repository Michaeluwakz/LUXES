
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { useToast } from "@/hooks/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// This is a placeholder for the server action.
// In a real app, you would implement this to send an email.
async function submitContactForm(data: ContactFormValues) {
  console.log("Contact form submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // throw new Error("Failed to send message. Please try again."); // Uncomment to test error
  return { success: true, message: "Your message has been sent successfully!" };
}


export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        form.reset();
      } else {
        throw new Error(result.message || "An unexpected error occurred.");
      }
    } catch (error) {
       const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
       toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto max-w-screen-md px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-semibold text-primary">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-foreground/80">
            Have questions or need assistance? Fill out the form below, and we'll get back to you shortly.
          </p>
        </div>
        <Card className="p-6 sm:p-8 md:p-10 shadow-xl rounded-xl bg-card border-border/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center text-foreground/90">
                      <User className="w-4 h-4 mr-2 text-primary" /> Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} className="bg-background border-input focus:ring-primary text-base"/>
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
                    <FormLabel className="flex items-center text-foreground/90">
                      <Mail className="w-4 h-4 mr-2 text-primary" /> Email Address
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="bg-background border-input focus:ring-primary text-base"/>
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
                    <FormLabel className="flex items-center text-foreground/90">
                      <MessageSquare className="w-4 h-4 mr-2 text-primary" /> Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help..."
                        className="min-h-[120px] bg-background border-input focus:ring-primary text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting} 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-3"
                size="lg"
              >
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
