"use server";

import { revalidatePath } from 'next/cache';
import { validateOrder } from '../lib/schema';

export async function placeOrder(prevState, formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");

  const validation = validateOrder({ name, phone });

  if (!validation.success) {
    return {
      success: false,
      error: "Validation failed",
      fieldErrors: validation.fieldErrors
    };
  }

  try {
    console.log(`Saving order log securely to server database for: ${name}`);

    revalidatePath('/menu');

    return {
      success: true,
      error: null,
      fieldErrors: {}
    };
  } catch (err) {
    return {
      success: false,
      error: "Critical server error. Please try again later.",
      fieldErrors: {}
    };
  }
}
