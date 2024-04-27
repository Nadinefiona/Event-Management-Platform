import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    try {
        const { userId, eventId, tickets } = req.body;
        const newBooking = new Booking({ userId, eventId, tickets });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
