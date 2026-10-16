# Addis Eats Caching & Rendering Strategies

* `/` - **Static (SSG)**: Core restaurant profile layout features do not change across compilation epochs.
* `/menu` - **Incremental (ISR, revalidate=3600)**: Dishes update occasionally throughout the day; prioritizing execution speed.
* `/menu/[id]` - **Static via generateStaticParams**: Target dish profiles pre-compiled to static files during build time.
* `/checkout` - **Dynamic (SSR)**: Evaluates active user validation records, request cookies, and running total parameters on every click.
