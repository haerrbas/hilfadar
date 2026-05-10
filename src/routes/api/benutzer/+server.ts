import { json } from '@sveltejs/kit';
import { connectDB } from '$lib/db';
import Benutzer from '$lib/models/Benutzer';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  await connectDB();
  const benutzer = await Benutzer.find().sort({ karma: -1 });
  return json(benutzer);
};

export const POST: RequestHandler = async ({ request }) => {
  await connectDB();
  const data = await request.json();

  const benutzer = new Benutzer({
    name: data.name,
    bio: data.bio,
    skills: data.skills,
    ort: data.ort
  });

  await benutzer.save();
  return json({ success: true, benutzer });
};