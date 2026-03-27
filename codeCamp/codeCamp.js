const manifest = {
  containerId: "1",
  destination: "Bradford",
  weight: 1000,
  units: "kg",
  hazmat: false,
};

function normalizeUnits(manifest) {
  if (manifest.units === "kg") {
    manifest.units = "lbs";
    manifest.weight = manifest.weight * 2.20462;
  }
  return manifest;
}

function validateManifest(manifest) {}
