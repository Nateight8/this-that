"use client";
import { useState } from "react";
import { FormFields } from "./_component/create-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePickSlipSchema } from "@/lib/create-slip";

export default function Page() {
  const [step, setstep] = useState(1);

  function Next() {
    setstep((prev) => prev + 1);
  }
  function Prev() {
    setstep((prev) => prev - 1);
  }

  const form = useForm<z.infer<typeof CreatePickSlipSchema>>({
    resolver: zodResolver(CreatePickSlipSchema),
  });

  async function onSubmit(data: z.infer<typeof CreatePickSlipSchema>) {
    console.log(data);

    await fetch("/api/create-pick", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <Card className="w-full max-w-md h-[60vh] flex items-center flex-col justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <CardContent>
              <form>
                <FormFields step={step} form={form} />
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="button"
                disabled={step <= 1}
                onClick={Prev}
                variant="outline"
              >
                Prev
              </Button>
              {step !== 5 && (
                <Button type="button" onClick={Next}>
                  Next
                </Button>
              )}
              {step === 5 && <Button type="submit">submit</Button>}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
