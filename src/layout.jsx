import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app-frame">
      <header className="app-header">
        <h1>Addis Eats</h1>
        <nav className="navigation-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "on" : ""}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? "on" : ""}>Menu</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "on" : ""}>Cart</NavLink>
        </nav>
      </header>

      <main className="content-window">
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 CodeOps Software Development</p>
      </footer>
    </div>
  );
}
