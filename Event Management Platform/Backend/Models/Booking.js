import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
 userId: {
    type: Number, 
    required: true 
 },
 eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
 },
 tickets: { 
    type: Number, required: true },
});

export default mongoose.model('Booking', BookingSchema);
