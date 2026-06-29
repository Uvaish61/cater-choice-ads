"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send, Loader2, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COMPANY, WHATSAPP_URL, BUSINESS_TYPES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  businessName: z.string().min(2, "Please enter your business name"),
  businessType: z.string().min(1, "Please select your business type"),
  productsNeeded: z.string().min(3, "Please tell us what products you need"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="lead-form" className="py-[60px] sm:py-[120px] bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started Today
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Request Your <span className="text-green-600">Free Trade Quote</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Fill in the form below and your dedicated account manager will be in touch within 2 hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-3xl border border-green-100 border-t-[3px] border-t-green-600 shadow-sm"
            >
              <div className="inline-flex p-5 bg-green-50 rounded-full mb-6">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thank you! We&apos;ll be in touch shortly.
              </h3>
              <p className="text-gray-500 text-base max-w-sm mx-auto mb-8">
                Your account manager will contact you within 2 business hours with a personalised quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "border-green-300 text-green-700 hover:bg-green-50"
                  )}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants(),
                    "bg-green-600 hover:bg-green-700 text-white"
                  )}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 border-t-[3px] border-t-green-600 shadow-sm p-8 sm:p-12"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      className={cn(
                        "h-12 rounded-xl border-gray-200",
                        errors.name && "border-red-300"
                      )}
                      {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@restaurant.co.uk"
                      className={cn("h-12 rounded-xl border-gray-200", errors.email && "border-red-300")}
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+44 7700 000000"
                      className={cn("h-12 rounded-xl border-gray-200", errors.phone && "border-red-300")}
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName" className="text-gray-700 font-medium">
                      Business Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="businessName"
                      placeholder="The Green Restaurant"
                      className={cn("h-12 rounded-xl border-gray-200", errors.businessName && "border-red-300")}
                      {...register("businessName")}
                    />
                    {errors.businessName && <p className="text-red-500 text-xs">{errors.businessName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700 font-medium">
                      Business Type <span className="text-red-400">*</span>
                    </Label>
                    <Select onValueChange={(val) => { if (val) setValue("businessType", String(val)); }}>
                      <SelectTrigger className={cn("h-12 rounded-xl border-gray-200", errors.businessType && "border-red-300")}>
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        {BUSINESS_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.businessType && <p className="text-red-500 text-xs">{errors.businessType.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productsNeeded" className="text-gray-700 font-medium">
                      Products Needed <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="productsNeeded"
                      placeholder="e.g. Frozen chicken, cooking oil, packaging, sauces..."
                      className={cn("rounded-xl border-gray-200 resize-none min-h-[80px]", errors.productsNeeded && "border-red-300")}
                      {...register("productsNeeded")}
                    />
                    {errors.productsNeeded && <p className="text-red-500 text-xs">{errors.productsNeeded.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Anything else? (optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business or any specific products you need..."
                    className="rounded-xl border-gray-200 resize-none min-h-[100px]"
                    {...register("message")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-base rounded-xl shadow-lg shadow-green-200 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending your request...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Get Wholesale Pricing Today
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-400">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> Your information is secure. We never share your data with third parties.
                </p>
              </form>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500"
          >
            <span>Prefer to speak directly?</span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <span className="hidden sm:block text-gray-300">|</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-700 font-semibold hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
