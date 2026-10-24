export const VENUES = [
  { venue_id: 1, name: "Wankhede Stadium", city: "Mumbai", capacity: 33108 },
  { venue_id: 2, name: "MA Chidambaram Stadium", city: "Chennai", capacity: 50000 },
  { venue_id: 3, name: "M.Chinnaswamy Stadium", city: "Bengaluru", capacity: 40000 },
  { venue_id: 4, name: "Eden Gardens", city: "Kolkata", capacity: 68000 },
  { venue_id: 5, name: "Arun Jaitley Stadium", city: "Delhi", capacity: 42000 },
  { venue_id: 6, name: "PCA IS Bindra Stadium", city: "Mohali", capacity: 26000 },
  { venue_id: 7, name: "Sawai Mansingh Stadium", city: "Jaipur", capacity: 30000 },
  { venue_id: 8, name: "Rajiv Gandhi Intl. Stadium", city: "Hyderabad", capacity: 55000 },
  { venue_id: 9, name: "Ekana Cricket Stadium", city: "Lucknow", capacity: 50000 },
  { venue_id: 10, name: "Narendra Modi Stadium", city: "Ahmedabad", capacity: 132000 },
];

export const getVenueById = (id) => VENUES.find(v => v.venue_id === id);
