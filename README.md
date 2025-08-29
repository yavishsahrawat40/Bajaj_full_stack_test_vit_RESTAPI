# VIT Full Stack Assessment API

This is a REST API built as part of an assessment. The API processes an array containing numbers, alphabets, and special characters and returns a structured JSON object with the processed data.

---

## Features ✨

* Parses an incoming array of mixed data types.
* Separates numbers into dedicated arrays for **odd** and **even** values.
* Identifies and collects all alphabetic strings, converting them to uppercase.
* Calculates the **sum** of all numerical values in the array.
* Generates a unique `concat_string` by joining all alphabets, reversing the result, and applying alternating capitalization.
* Gracefully handles requests and returns a consistent JSON response structure.

---

## Tech Stack 💻

* **Backend:** Node.js, Express.js
* **Hosting:** Vercel / Railway / Render

---

## API Endpoint

The single endpoint for processing data is described below.

* **Method:** `POST`
* **Endpoint:** `/bfhl`

#### Live Endpoint
`https://<your-deployed-url>/bfhl` 
---

## Request & Response Format

#### Request Body

The API expects a JSON object with a single key `data`, which holds an array of strings.

```json
{
  "data": ["2","a", "y", "4", "&", "-", "*", "5","92","b"]
}