export function validate(form) {
  const errors = {};

  if (!form.name || !form.name.trim()) {
    errors.name = "Please enter your name";
  }

  if (!form.phone || !/^(?:\+251|0)9\d{8}$/.test(form.phone)) {
    errors.phone = "Use 09... or +2519... (TeleBirr number)";
  }

  const validAreas = ["Bole", "Kazanchis", "Megenagna", "Piassa"];
  if (!form.area || !validAreas.includes(form.area)) {
    errors.area = "Choose a valid delivery area";
  }

  if (form.notes && form.notes.length > 200) {
    errors.notes = "Notes cannot exceed 200 characters";
  }

  return errors;
}
