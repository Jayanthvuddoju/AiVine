import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Candidate } from "@/types/candidate";

const DATA_FILE = path.join(process.cwd(), "src", "data", "candidates.json");

function getCandidates(): Candidate[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading candidates.json:", error);
  }
  return [];
}

function saveCandidates(candidates: Candidate[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(candidates, null, 2));
  } catch (error) {
    console.error("Error writing to candidates.json:", error);
  }
}

export async function PUT(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const id = params.id;
    const body = await request.json();
    const candidates = getCandidates();
    
    const index = candidates.findIndex((c) => c.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Candidate not found" }, { status: 404 });
    }

    candidates[index] = { ...candidates[index], ...body, id }; // ensure ID doesn't change
    saveCandidates(candidates);

    return NextResponse.json(candidates[index]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update candidate" }, { status: 500 });
  }
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const id = params.id;
    const candidates = getCandidates();
    
    const updatedCandidates = candidates.filter((c) => c.id !== id);
    saveCandidates(updatedCandidates);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete candidate" }, { status: 500 });
  }
}
