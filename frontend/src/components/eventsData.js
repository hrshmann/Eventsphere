// src/components/eventsData.js
import sampleImg from "../assets/slide1.jpg";
import sampleImg2 from "../assets/slide2.jpg";
import sampleImg3 from "../assets/slide3.jpg";
import sampleImg4 from "../assets/slide2.jpg";

// =====================
// SHARED EVENTS DATA
// =====================
export let events = [
  {
    id: 1,
    name: "Tech Fest 2025",
    location: "Main Auditorium",
    date: "2025-10-15",
    type: "Technical",
    img: sampleImg,
    description: "A grand annual technical festival with exciting competitions."
  },
  {
    id: 2,
    name: "Cultural Night",
    location: "Open Ground",
    date: "2025-11-05",
    type: "Cultural",
    img: sampleImg2,
    description: "An evening full of dance, music, drama and cultural performances."
  },
  {
    id: 3,
    name: "Sports Meet",
    location: "Sports Complex",
    date: "2025-12-01",
    type: "Sports",
    img: sampleImg3,
    description: "Inter-department cricket, football, athletics and many more."
  },
  {
    id: 4,
    name: "Art Workshop",
    location: "Art Room",
    date: "2025-10-25",
    type: "Art",
    img: sampleImg4,
    description: "Hands-on creative workshop for painting and sketching lovers."
  }
];

// =====================
// CRUD OPERATIONS for ADMIN
// =====================

// Add event
export const addEvent = (newEvent) => {
  const eventWithId = {
    id: Date.now(),
    ...newEvent
  };
  events.push(eventWithId);
  return eventWithId;
};

// Delete event
export const deleteEvent = (id) => {
  events = events.filter((event) => event.id !== id);
};

// Update event
export const updateEvent = (updatedEvent) => {
  events = events.map((event) =>
    event.id === updatedEvent.id ? updatedEvent : event
  );
};
