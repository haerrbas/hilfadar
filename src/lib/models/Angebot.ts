import mongoose from 'mongoose';

const AngebotSchema = new mongoose.Schema({
  titel: { type: String, required: true },
  beschreibung: { type: String },
  skills: [{ type: String }],
  verfuegbarkeit: { type: String },
  nutzer: { type: String, default: 'Anonym' },
  karma: { type: Number, default: 0 },
  erstellt: { type: Date, default: Date.now }
});

export const Angebot = mongoose.models.Angebot || mongoose.model('Angebot', AngebotSchema);