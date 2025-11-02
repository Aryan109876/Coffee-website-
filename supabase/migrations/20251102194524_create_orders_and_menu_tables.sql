/*
  # Create Orders and Menu Tables

  1. New Tables
    - `menu_items`
      - `id` (uuid, primary key)
      - `name` (text) - Item name
      - `description` (text) - Item description
      - `price` (decimal) - Item price
      - `category` (text) - Category (espresso, specialty, food, etc)
      - `available` (boolean) - Whether item is available
      - `created_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_email` (text) - Customer email
      - `customer_name` (text) - Customer name
      - `phone` (text) - Customer phone
      - `items` (jsonb) - Order items details
      - `total` (decimal) - Order total
      - `status` (text) - Order status (pending, confirmed, ready, completed)
      - `special_instructions` (text) - Any special requests
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  
  2. Security
    - Enable RLS on both tables
    - Anyone can view menu items (public read)
    - Anyone can create orders (public insert)
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10, 2) NOT NULL,
  category text NOT NULL,
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_email text NOT NULL,
  customer_name text NOT NULL,
  phone text NOT NULL,
  items jsonb NOT NULL,
  total decimal(10, 2) NOT NULL,
  status text DEFAULT 'pending',
  special_instructions text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Menu items are publicly readable"
  ON menu_items FOR SELECT
  TO public
  USING (available = true);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view orders"
  ON orders FOR SELECT
  TO public
  USING (true);

INSERT INTO menu_items (name, description, price, category) VALUES
  ('Single Origin Espresso', 'Rotating selection of premium single-origin beans', 4.50, 'espresso'),
  ('Americano', 'Rich espresso with hot water', 4.00, 'espresso'),
  ('Cappuccino', 'Espresso with steamed milk and foam', 5.00, 'espresso'),
  ('Flat White', 'Velvety microfoam with double espresso', 5.50, 'espresso'),
  ('Nitro Cold Brew', 'Smooth, creamy cold brew on tap', 6.00, 'specialty'),
  ('Honey Lavender Latte', 'House-made lavender syrup with local honey', 6.50, 'specialty'),
  ('Pour Over', 'Precision-brewed single cup', 5.50, 'specialty'),
  ('Matcha Latte', 'Premium ceremonial grade matcha', 6.00, 'specialty'),
  ('Croissant', 'Buttery French pastry', 4.50, 'food'),
  ('Blueberry Muffin', 'Homemade fresh blueberry muffin', 5.00, 'food'),
  ('Almond Biscotti', 'Crispy twice-baked almond biscotti', 3.50, 'food'),
  ('Panini Sandwich', 'Grilled Italian panini with seasonal fillings', 10.00, 'food')
ON CONFLICT DO NOTHING;
