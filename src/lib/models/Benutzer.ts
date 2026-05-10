import mongoose, { Schema } from 'mongoose';

const BenutzerSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, default: '' },
  skills: [{ type: String }],
  karma: { type: Number, default: 0 },
  ort: { type: String, default: '' },
  erstellt: { type: Date, default: Date.now }
});

export default mongoose.models.Benutzer || mongoose.model('Benutzer', BenutzerSchema);