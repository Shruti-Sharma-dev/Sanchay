
# 📘 API Documentation – ZapFresh Backend

This document describes all the backend API endpoints available for the ZapFresh app, including required request formats, headers, and responses. Use this as a reference for frontend development.

---

## 🔐 AUTH ROUTES

### ➕ POST `/api/auth/register`
Registers a new user.

- **Body:**
```json
{
  "name": "Shruti",
  "email": "shruti@example.com",
  "password": "123456",
  "role": "supplier" // or "vendor"
}
```
- **Returns:**
```json
{
  "message": "User registered successfully",
  "token": "<JWT_TOKEN>",
  "user": { "name": "Shruti", "email": "...", "role": "supplier" }
}
```

---

### 🔑 POST `/api/auth/login`
Logs in a user.

- **Body:**
```json
{
  "email": "shruti@example.com",
  "password": "123456"
}
```
- **Returns:**
```json
{
  "message": "Login successful",
  "token": "<JWT_TOKEN>",
  "user": { "name": "Shruti", "email": "...", "role": "supplier" }
}
```

---

## 👤 SUPPLIER PROFILE ROUTES

### 🏗️ POST `/api/supplier/profile`
Creates or updates supplier profile.

- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "shopName": "Shruti Fresh Veggies",
  "address": "Sector 17, Kurukshetra",
  "contactNumber": "9876543210",
  "deliveryRadius": 10,
  "location": {
    "coordinates": [76.817, 29.964]
  }
}
```
- **Returns:**
```json
{
  "message": "Profile created",
  "profile": { ... }
}
```

---

### 🧾 GET `/api/supplier/profile`
Fetch supplier’s own profile.

- **Headers:** `Authorization: Bearer <token>`

---

### ⭐ POST `/api/supplier/:supplierId/rate`
Vendors can rate and review suppliers after a successful delivery.

- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "rating": 4.5,
  "review": "Great service and fresh vegetables!"
}
```
- **Returns:**
```json
{
  "message": "Rating submitted",
  "averageRating": 4.3
}
```

---

## 🛍️ PRODUCT ROUTES

### ➕ POST `/api/products`
Create a product (supplier only).

- **Headers:** `Authorization: Bearer <token>`
- **Body:**
```json
{
  "name": "Potatoes",
  "price": 25,
  "unit": "kg",
  "stock": 100
}
```

---

### 📦 GET `/api/products`
Get all products (vendor side – public).

---

### 📦 GET `/api/products/mine`
Get products created by logged-in supplier.

- **Headers:** `Authorization: Bearer <token>`

---

### ✏️ PUT `/api/products/:id`
Update product.

- **Headers:** `Authorization: Bearer <token>`
- **Body:** Partial update allowed (e.g., price or stock)

---

## 📍 NEARBY PRODUCT SEARCH (Vendor)

### 🔍 GET `/api/vendor/products/nearby?lat=29.964&lng=76.817&radius=10&search=potatoes`
Returns nearby products within given radius and optional keyword search.

- **Query Params:**
  - `lat`: Latitude
  - `lng`: Longitude
  - `radius`: Radius in KM
  - `search`: Optional keyword (e.g., "potatoes")

- **Returns:**
```json
[
  {
    "product": { "name": "Potatoes", "price": 25 },
    "supplier": {
      "shopName": "Shruti Fresh Veggies",
      "address": "...",
      "averageRating": 4.3
    }
  }
]
```

---

## 🧠 NOTES

- All protected routes require `Authorization: Bearer <token>`.
- Ratings are stored in `supplierProfile.ratings[]`, and `averageRating` is updated automatically.
- Location-based queries use a 2dsphere index on supplier coordinates.

---

📌 Contact: Shruti Sharma – Backend Developer  
📦 GitHub: [your-repo-link]  
🧪 Testing Tool Suggestion: Postman or Thunder Client  
