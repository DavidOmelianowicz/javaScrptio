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
  if (manifest.containerId === "" || manifest.containerId == null) {
    manifest.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number") {
    manifest.containerId = "Invalid";
  }

  if (manifest.destination === "" || manifest.destination == null) {
    manifest.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    manifest.destination = "Invalid";
  }

  if (manifest.weight === "" || manifest.weight == null) {
    manifest.weight = "Missing";
  } else if (typeof manifest.weight !== "number") {
    manifest.weight = "Invalid";
  }

  if (manifest.units === "" || manifest.units == null) {
    manifest.units = "Missing";
  } else if (manifest.units !== "lbs" && manifest.units !== "kg") {
    manifest.units = "Invalid";
  }

  if (manifest.hazmat === "" || manifest.hazmat == null) {
    manifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    manifest.hazmat = "Invalid";
  }

  return manifest;
}

console.log(normalizeUnits(manifest));
console.log(validateManifest(manifest2));
