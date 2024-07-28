function cloudBounds(bounds, d) {
  const west = bounds.west - d;
  const south = bounds.south - d;
  const east = bounds.east + d;
  const north = bounds.north + d;
  return { west, south, east, north };
}
