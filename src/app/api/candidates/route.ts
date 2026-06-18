import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Candidate } from "@/types/candidate";

const DATA_FILE = path.join(process.cwd(), "src", "data", "candidates.json");

// Helper to safely read the JSON file
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

// Helper to safely write to the JSON file
function saveCandidates(candidates: Candidate[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(candidates, null, 2));
  } catch (error) {
    console.error("Error writing to candidates.json:", error);
  }
}

export async function GET() {
  const candidates = getCandidates();
  return NextResponse.json(candidates);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const candidates = getCandidates();
    
    // Add new candidate with a generated ID if not provided
    const newCandidate = {
      ...body,
      id: body.id || `AV-${Math.floor(Math.random() * 10000)}`,
    };

    candidates.push(newCandidate);
    saveCandidates(candidates);

    return NextResponse.json(newCandidate, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add candidate" }, { status: 500 });
  }
}
