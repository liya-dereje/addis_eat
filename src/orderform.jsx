import React, { useState } from 'react';

export default function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    area: "Bole"
  });

  
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,   
      [name]: value  
    });
  }


  const isValid = /^(?:\+251|0)9\d{8}\$/.test(form.phone);

  function handleSubmit(e) {
    e.preventDefault(); 
    alert(`Order placed successfully for ${form.name}!`);
  }

  return (
    <form onSubmit={handleSubmit} className="delivery-form">
      <input 
        name="name" 
        placeholder="Your name" 
        value={form.name} 
        onChange={handleChange} 
      />
      
      <input 
        name="phone" 
        placeholder="Phone (09... or +2519...)" 
        value={form.phone} 
        onChange={handleChange} 
      />
      {form.phone && !isValid && (
        <p className="err">Use format 09... or +2519...</p>
      )}

      <select name="area" value={form.area} onChange={handleChange}>
        <option value="Bole">Bole</option>
        <option value="Kazanchis">Kazanchis</option>
        <option value="Mexiko">Mexiko</option>
      </select>

      <button type="submit" disabled={!isValid}>
        Pay with TeleBirr
      </button>
    </form>
  );
}
