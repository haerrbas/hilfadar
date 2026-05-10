import { json } from '@sveltejs/kit';
import { connectDB } from '$lib/db';
import { Angebot } from '$lib/models/Angebot';

// GET - alle Angebote laden
export async function GET() {
  await connectDB();
  const angebote = await Angebot.find().sort({ erstellt: -1 });
  return json(angebote);
}

// POST - neues Angebot speichern
export async function POST({ request }) {
  await connectDB();
  const data = await request.json();
  
  const angebot = new Angebot({
    titel: data.titel,
    beschreibung: data.beschreibung,
    skills: data.skills,
    verfuegbarkeit: data.verfuegbarkeit,
    nutzer: 'Anonym'
  });

  await angebot.save();
  return json({ success: true, angebot });
}
