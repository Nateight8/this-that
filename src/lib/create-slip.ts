import { z } from "zod";

// Define the gender enum using zod
const GenderEnum = z.enum(["MAN", "WOMAN"]);

// Define the schema for the createPickSlip data
const CreatePickSlipSchema = z.object({
  gender: GenderEnum, // Must be "MAN" or "WOMAN"
  name: z.string().min(1, "Name is required"), // Name should be a non-empty string
  partnerName: z.string().min(1, "Partner's Name is required"), // Partner name should be non-empty
  first: z.string().min(1, "First option is required"), // The first option should be non-empty
  second: z.string().min(1, "Second option is required"), // The second option should be non-empty
});

type CreatePickSlipResponse = {
  message: string;
  id: string;
};

// Export the inferred type to be used elsewhere
export type CreatePickSlipData = z.infer<typeof CreatePickSlipSchema>;
export { CreatePickSlipSchema };
export type { CreatePickSlipResponse };
