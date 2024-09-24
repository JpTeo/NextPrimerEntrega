import { revalidatePath, revalidateTag } from "next/cache";
import mockData from "../../../../../data/mockData";
import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";

const sleep = (timer) => 
{
    return new Promise ((resolve) => setTimeout(resolve, timer) );
}



export async function GET(request, { params }) {
  const { category } = params;
  const data =
    category === "all"
      ? mockData
      : mockData.filter(
          (data) => data.category.toLowerCase() === category.toLowerCase()
        );
        await sleep (3000);
  return NextResponse.json(data);
}

export async function POST(params) {}
