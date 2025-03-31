// Tipos para Tours individuales
export interface TourVisit {
  id: number;
  title: string;
  schedule: string;
  duration: string;
  modality: string;
  client: string;
  included_visits: string[];
}

// Tipos para la colección de Tours
export interface ToursCollection {
  [key: string]: TourVisit;
}

// Tipos para agrupar todos los tipos relacionados con tours
export interface AllTours {
  arequipa: {
    packages: PackageTour[]; // Usando el tipado anterior para paquetes
    tours: TourVisit[];     // Nuevo tipado para tours
  };
  // Puedes agregar otras regiones luego
}

// (Mantén los tipos anteriores para paquetes que ya tenías)
export interface ActivityDay {
  dia: number;
  actividades: string[];
}

export interface PackageTour {
  codigo: string;
  nombre: string;
  duracion: string;
  incluye: string[];
  no_incluye: string[];
  itinerario: ActivityDay[];
}