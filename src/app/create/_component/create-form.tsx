"use client";

import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function FormFields({
  step,
  form,
}: {
  step: number;
  form: UseFormReturn<
    {
      gender: "MAN" | "WOMAN";
      name: string;
      partnerName: string;
      first: string;
      second: string;
    },
    undefined
  >;
}) {
  const gender = form.watch("gender"); // Watch the gender field

  return (
    <>
      {step === 1 && (
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center text-amber-500 md:text-2xl">
                  You identify as a...
                </h2>
              </div>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="gap-2"
                >
                  {/* Radio card #1 */}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
                        <RadioGroupItem
                          value="MAN"
                          className="order-1 after:absolute after:inset-0"
                        />
                        <div className="grid grow gap-2">
                          <Label>
                            Man{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                              (The Original Blueprint)
                            </span>
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            For those who were created first and sometimes
                            forget to take out the trash.
                          </p>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>

                  {/* Radio card #2 */}
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <div className="relative flex w-full items-start gap-2 rounded-lg border border-input p-4 shadow-sm shadow-black/5 has-[[data-state=checked]]:border-ring">
                        <RadioGroupItem
                          value="WOMAN"
                          className="order-1 after:absolute after:inset-0"
                        />
                        <div className="grid grow gap-2">
                          <Label>
                            Woman{" "}
                            <span className="text-xs font-normal leading-[inherit] text-muted-foreground">
                              (The Missing ribs?)
                            </span>
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            For those who multitask like pros, whether it&apos;s
                            running a business or running a household
                          </p>
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {step === 2 && (
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full px-6">
              <FormLabel>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center text-amber-500 md:text-2xl">
                    What&apos;s your name??
                  </h2>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12 w-full rounded-full"
                  autoComplete="off"
                  placeholder={`Name ${
                    gender === "MAN" ? "he" : "she"
                  } knows you with...`}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {step === 3 && (
        <FormField
          control={form.control}
          name="partnerName"
          render={({ field }) => (
            <FormItem className="w-full px-6">
              <FormLabel>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center text-amber-500 md:text-2xl">
                    What&apos;s your partner&apos;s name??
                  </h2>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12 w-full rounded-full"
                  autoComplete="off"
                  placeholder={`Send to ${gender === "MAN" ? "him" : "her"}...`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {step === 4 && (
        <FormField
          control={form.control}
          name="second"
          render={({ field }) => (
            <FormItem className="w-full px-6">
              <FormLabel>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center text-amber-500 md:text-2xl">
                    What&apos;s your partner&apos;s name??
                  </h2>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12 w-full rounded-full"
                  autoComplete="off"
                  placeholder={`Send to ${gender === "MAN" ? "him" : "her"}...`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {step === 5 && (
        <FormField
          control={form.control}
          name="first"
          render={({ field }) => (
            <FormItem className="w-full px-6">
              <FormLabel>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-center text-amber-500 md:text-2xl">
                    What&apos;s your partner&apos;s name??
                  </h2>
                </div>
              </FormLabel>
              <FormControl>
                <Input
                  className="h-12 w-full rounded-full"
                  autoComplete="off"
                  placeholder={`Send to ${gender === "MAN" ? "him" : "her"}...`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
}
