
import mockData from "../../../../../data/mockData";
import { NextResponse } from "next/server";


const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request) {
  await sleep(3000);
  return NextResponse.json(mockData);
}
