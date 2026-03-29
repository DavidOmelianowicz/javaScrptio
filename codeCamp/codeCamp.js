const manifest = {
  containerId: "1",
  destination: "new york",
  weight: 1000,
  units: "lbs",
  hazmat: false,
};
const manifest2 = {
  containerId: "",
  destination: "leeds",
  weight: 34454,
  units: "",
  hazmat: "true",
};

function normalizeUnits(manifest) {
  if (manifest.units === "lbs") {
    manifest.units = "kg";
    manifest.weight = manifest.weight / 2.20462;
  }
  return manifest;
}

function validateManifest(manifest) {
  const errors = {};

  // Check containerId
  if (manifest.containerId === "" || manifest.containerId == null) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "string") {
    errors.containerId = "Invalid";
  }

  // Check destination
  if (manifest.destination === "" || manifest.destination == null) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    errors.destination = "Invalid";
  }

  // Check weight
  if (manifest.weight === "" || manifest.weight == null) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }

  // Check units
  if (manifest.units === "" || manifest.units == null) {
    errors.units = "Missing";
  } else if (manifest.units !== "lbs" && manifest.units !== "kg") {
    errors.units = "Invalid";
  }

  // Check hazmat
  if (manifest.hazmat === "" || manifest.hazmat == null) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

console.log(normalizeUnits(manifest));
console.log(validateManifest(manifest2));
