import { revalidatePath, revalidateTag } from "next/cache";
import mockData from "../../../../../data/mockData";
import { NextResponse } from "next/server";

export async function GET (request, {params}) {
    const {category} = params;
    const data = 
    category === "all"
    ? mockData
    : mockData.filter(
        (data) => data.category.toLowerCase() === category.toLowerCase()
    );
    revalidateTag("ejemplo");
    revalidatePath("/ejemplo/[category]");
    return NextResponse.json(data);
}

export async function POST (params) {
    
}