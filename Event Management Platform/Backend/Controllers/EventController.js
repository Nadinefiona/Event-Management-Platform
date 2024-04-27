import Event from '../models/Event.js';

export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createEvent = async (req, res) => {
    try {
        const { title, date, location, ticketAvailability } = req.body;
        const newEvent = new Event({ title, date, location, ticketAvailability });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
