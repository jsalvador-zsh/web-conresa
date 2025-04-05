// src/types/colca.ts
export interface TourVisit {
    id: string;
    title: string;
    schedule: {
      departure: string;
      return: string;
    };
    duration: string;
    modality: string;
    clients: string[];
    itinerary: {
      time: string;
      description: string;
    }[];
    highlights: string[];
  }
  