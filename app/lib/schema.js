export function validateOrder(data) {
  const errors = {};

  if (!data.name || data.name.trim().length === 0) {
    errors.name = "Please enter your name";
  }

  if (!data.phone || !/^(?:\+251|0)9\d{8}$/.test(data.phone)) {
    errors.phone = "Use 09... or +2519... (TeleBirr number)";
  }

  return {
    success: Object.keys(errors).length === 0,
    fieldErrors: errors
  };
}
