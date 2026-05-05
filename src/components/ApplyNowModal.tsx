import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitApplication } from "@/lib/api";
import dbsLogo from "@/assets/dbs-logo.png";
import {
  CheckCircle2,
  Loader2,
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  MessageSquare,
} from "lucide-react";

// ── Validation schema ─────────────────────────────────────────────────────────

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[+]?[0-9]{10,15}$/, "Enter a valid phone number (10–15 digits)"),
  course: z.string().min(1, "Please select a course"),
  qualification: z.string().min(1, "Please select your qualification"),
  city: z
    .string()
    .min(1, "City is required")
    .max(100, "City name is too long"),
  message: z.string().max(1000, "Message must not exceed 1000 characters").optional(),
});

type FormValues = z.infer<typeof formSchema>;

// ── Data ──────────────────────────────────────────────────────────────────────

const COURSES = [
  "BBA",
  "B.Com with ICAI",
  "MBA",
  "BBA + MBA (Integrated)",
  "B.Tech CSE (AI & ML)",
  "B.Tech CSE (Cyber Security)",
  "BCA",
  "BA Liberal Arts",
  "MA",
  "B.Pharm",
  "D.Pharm",
  "B.Pharm Lateral",
  "BA Film & TV",
  "BA Digital Media",
  "MBA Media",
  "B.Sc Agriculture",
  "B.Sc Forestry",
  "M.Sc Agronomy",
  "BA LLB (Hons.)",
  "BBA LLB",
  "LLM",
  "GNM",
  "SAP",
  "SAS",
  "Artificial Intelligence",
];

const QUALIFICATIONS = [
  "10th (Secondary)",
  "12th (Higher Secondary)",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
];

// ── Props ─────────────────────────────────────────────────────────────────────

interface ApplyNowModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ApplyNowModal({ open, onOpenChange }: ApplyNowModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      course: "",
      qualification: "",
      city: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormValues) {
    setServerError(null);
    try {
      await submitApplication(values);
      setSubmitted(true);
    } catch (err: unknown) {
      const apiErr = err as Error & {
        status?: number;
        apiErrors?: Record<string, string[]>;
      };

      // Map server-side field errors back into react-hook-form
      if (apiErr.apiErrors) {
        Object.entries(apiErr.apiErrors).forEach(([field, messages]) => {
          form.setError(field as keyof FormValues, {
            message: messages[0],
          });
        });
      } else {
        setServerError(apiErr.message ?? "Something went wrong. Please try again.");
      }
    }
  }

  function handleClose(open: boolean) {
    if (!open) {
      // Reset state when dialog closes
      setTimeout(() => {
        setSubmitted(false);
        setServerError(null);
        form.reset();
      }, 300);
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 rounded-2xl">
        {/* Header */}
        <div className="px-8 pt-7 pb-6 rounded-t-2xl border-b border-border bg-white">
          <div className="flex items-center gap-4">
            <img
              src={dbsLogo}
              alt="DBS Global University"
              className="h-11 shrink-0"
            />
            <div className="w-px h-10 bg-border shrink-0" />
            <DialogHeader className="space-y-0">
              <DialogTitle className="text-foreground font-display text-lg leading-tight">
                Admissions Application
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm font-body mt-0.5">
                Fill in your details and our team will reach out to you.
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center py-10 gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-muted-foreground font-body text-sm max-w-sm">
                    Thank you for applying to DBS Global University. Our admissions
                    team will review your application and contact you within 2–3
                    business days.
                  </p>
                </div>
                <Button
                  onClick={() => handleClose(false)}
                  className="rounded-full px-8 bg-primary hover:bg-primary/90 font-body"
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              /* ── Form state ── */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Server-level error banner */}
                {serverError && (
                  <div className="mb-5 px-4 py-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-body">
                    {serverError}
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    {/* Row 1: Full Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-muted-foreground" />
                              Full Name <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Priya Sharma"
                                className="rounded-xl font-body"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                              Email Address <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@example.com"
                                className="rounded-xl font-body"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 2: Phone + City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                              Phone Number <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+91 9876543210"
                                className="rounded-xl font-body"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                              City <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Dehradun"
                                className="rounded-xl font-body"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 3: Course + Qualification */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <GraduationCap className="w-3.5 h-3.5 text-muted-foreground" />
                              Course Interested In <span className="text-destructive">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl font-body">
                                  <SelectValue placeholder="Select a course" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-60">
                                {COURSES.map((c) => (
                                  <SelectItem key={c} value={c} className="font-body">
                                    {c}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="qualification"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
                              Highest Qualification <span className="text-destructive">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl font-body">
                                  <SelectValue placeholder="Select qualification" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {QUALIFICATIONS.map((q) => (
                                  <SelectItem key={q} value={q} className="font-body">
                                    {q}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="font-body text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 4: Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-body text-sm font-medium flex items-center gap-1.5">
                            <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                            Message{" "}
                            <span className="text-muted-foreground font-normal">(optional)</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any questions or additional information you'd like to share..."
                              className="rounded-xl font-body resize-none min-h-[90px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="font-body text-xs" />
                        </FormItem>
                      )}
                    />

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 rounded-full py-5 font-body font-semibold bg-primary hover:bg-primary/90 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleClose(false)}
                        className="rounded-full py-5 font-body px-8"
                      >
                        Cancel
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground font-body text-center">
                      By submitting, you agree to be contacted by our admissions team.
                      Fields marked <span className="text-destructive">*</span> are required.
                    </p>
                  </form>
                </Form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
