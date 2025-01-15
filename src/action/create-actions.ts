"use server";

import { CreatePickSlipData, CreatePickSlipResponse } from "@/lib/create-slip";
import { prisma } from "@/lib/prisma";

export const createPickSlip = async (
  data: CreatePickSlipData
): Promise<CreatePickSlipResponse> => {
  console.log("Server reached");

  try {
    const pickSlip = await prisma.createPickSlip.create({
      data: {
        gender: data.gender,
        name: data.name,
        partnerName: data.partnerName,
        first: data.first,
        second: data.second,
      },
    });

    return {
      message: "Pick Slip successfully created!",
      id: pickSlip.id,
    };
  } catch (error) {
    console.error("Error creating pick slip:", error);
    throw new Error("Failed to create pick slip");
  }
};
