import { createPickSlip } from "@/action/create-actions";

interface Body {
  gender: "MAN" | "WOMAN";
  name: string;
  partnerName: string;
  first: string;
  second: string;
}

export async function POST(req: Request) {
  const data: Body = await req.json();

  try {
    const respose = await createPickSlip(data);

    return new Response(
      JSON.stringify({
        message: "success",
        id: respose.id,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
