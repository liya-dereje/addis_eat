# Addis Eats Query Architecture & Caching Strategy Log

## 📊 Server-Side Queries (Zero Hydration Cost)
* **Query**: `db.dish.findMany()`
  * **Location**: `app/menu/page.js`
  * **Strategy**: **ISR (Incremental Static Regeneration)** with a `3600` second revalidation window.
  * **Reasoning**: Restaurant menus update occasionally throughout the day; caching optimizes page speeds.
* **Query**: `db.order.findMany({ where: { userId } })`
  * **Location**: `app/orders/page.js`
  * **Strategy**: **Dynamic (SSR)** scoped exclusively to the active session ID.
  * **Reasoning**: Order history records contain private user parameters that cannot be compiled ahead of time.

## 🌐 Client-Side Queries (Islands of Interactivity)
* **Query**: Live Status Polling (`useSWR` / `React Query`)
  * **Location**: `app/orders/[id]/status.js`
  * **Strategy**: Browser-driven polling interval loop seeded with server `fallbackData`.
  * **Reasoning**: Delivers real-time food preparation status loops straight to the client without page layout refreshes.
