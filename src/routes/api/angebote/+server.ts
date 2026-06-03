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

// DELETE - Angebot anhand der ID entfernen
export async function DELETE({ request }) {
	await connectDB();
	const { id } = await request.json();

	if (!id) {
		return json({ success: false, error: 'ID fehlt' }, { status: 400 });
	}

	const result = await Angebot.findByIdAndDelete(id);

	if (!result) {
		return json({ success: false, error: 'Angebot nicht gefunden' }, { status: 404 });
	}

	return json({ success: true });
}
