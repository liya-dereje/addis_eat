# Addis Eats Component Boundary Tracking

* `app/layout.tsx` - **Server Component**: Global HTML frame structure requiring zero client-side browser JavaScript.
* `app/providers.jsx` - **Client Component ("use client")**: Root contextual application layer managing local state memory loops.
* `app/menu/page.js` - **Server Component (Async)**: Executes high-speed backend content downloads cleanly without hydration lag.
* `app/menu/categorybar.js` - **Client Component ("use client")**: Leaf node isolation container managing interactive category clicks.
