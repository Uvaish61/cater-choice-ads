"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const HERO_BUSINESS_TYPES = ["Restaurant", "Cafe", "Takeaway", "Catering", "Other"] as const;

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  businessType: z.string().min(1, "Select your business type"),
});

type FormValues = z.infer<typeof schema>;

export function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-green-100 shadow-xl p-8 text-center">
        <div className="inline-flex p-4 bg-green-50 rounded-full mb-4">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          We&apos;ll call you within 2 business hours with your personalised wholesale pricing.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-6 sm:p-8">
      {/* Card header */}
      <div className="mb-6">
        <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Free · No Commitment
        </span>
        <h2 className="text-xl font-bold text-gray-900 leading-snug">
          Get Your Trade Price List
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Join 5,000+ UK businesses. Response within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <Label htmlFor="hero-name" className="text-sm font-medium text-gray-700">
            Full Name
          </Label>
          <Input
            id="hero-name"
            placeholder="John Smith"
            className={cn(
              "h-11 rounded-xl border-gray-200 focus-visible:ring-green-500",
              errors.name && "border-red-300 focus-visible:ring-red-400"
            )}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <Label htmlFor="hero-phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </Label>
          <Input
            id="hero-phone"
            type="tel"
            placeholder="+44 7700 000000"
            className={cn(
              "h-11 rounded-xl border-gray-200 focus-visible:ring-green-500",
              errors.phone && "border-red-300 focus-visible:ring-red-400"
            )}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Business Type */}
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-700">Business Type</Label>
          <Select onValueChange={(val) => { if (typeof val === "string" && val) setValue("businessType", val); }}>
            <SelectTrigger
              className={cn(
                "h-11 rounded-xl border-gray-200",
                errors.businessType && "border-red-300"
              )}
            >
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {HERO_BUSINESS_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.businessType && (
            <p className="text-red-500 text-xs">{errors.businessType.message}</p>
          )}
        </div>

        {/* CTA */}
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 rounded-xl shadow-md shadow-green-200 text-sm cursor-pointer mt-2"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Get Wholesale Pricing Today"
          )}
        </Button>
      </form>

      {/* Trust signals */}
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5 text-green-500 shrink-0" />
          Your data is safe — we never share it with third parties
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Clock className="h-3.5 w-3.5 text-green-500 shrink-0" />
          We respond within 2 business hours, Mon–Fri
        </div>
      </div>
    </div>
  );
}
