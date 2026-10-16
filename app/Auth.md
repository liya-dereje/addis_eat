# Addis Eats Security Enforcement Framework Matrix

* `/checkout` - **Protected by Middleware + Page-Level validation**: Blocks anonymous request compilation maps early.
* `/orders` - **Protected by Page + Scoped data parameters**: Queries records strictly via active user sessions.
* `/kitchen` - **Protected by Role-Based Authorization Checks**: Verifies target staff credentials directly on the server.
* `placeOrder` (Action) - **Protected by Token validation checks inside action**: Guarantees secure writes at the effect layer.
