const mongoose = require('mongoose');

const maintenanceSchema = new Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true },
  car: { type: Schema.Types.ObjectId, ref: 'Car', required: true }
});

const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
module.exports = Maintenance
