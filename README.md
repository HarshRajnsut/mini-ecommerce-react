# Mini E-Commerce Product & Cart

A small React application built to demonstrate component-based design, state management, and clean UI logic for a basic e-commerce flow.

## Features

- Product listing displayed in a responsive grid
- Product details including name, price, category, and stock status
- Search products by name
- Filter products by category
- Sort products by price (Low to High / High to Low)
- Add products to cart
- Update item quantity with stock limits
- Remove items from cart
- Display total items and total price
- Cart state persists using localStorage
- Proper empty states for products and cart

## Tech Stack

- React (Functional Components)
- React Hooks: useState, useEffect, useMemo
- Basic CSS (no UI libraries)

## Notes

- Cart is kept in the same view to allow immediate updates and simpler state handling
- Filtering logic is derived from state and recalculated only when inputs change
- No external UI frameworks were used as per requirements

## How to Run

```bash
npm install
npm start
