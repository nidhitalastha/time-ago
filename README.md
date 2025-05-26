# time-ago

A lightweight JavaScript utility that converts a given date or timestamp into a human-readable relative time format like `2 days, 3 hours, and 15 minutes ago`. Ideal for web apps, notifications, logs, or anywhere you want to display time differences naturally.

## Features

- Human-readable, component-style output
- Supports years, months, days, hours, minutes, and seconds
- Automatically handles pluralization (e.g., `1 hour` vs `2 hours`)
- Lightweight with no dependencies

## Installation

```bash
npm install time-ago
```

## Usage

```bash
import timeAgo from 'time-ago';

const result = timeAgo('2024-12-01T10:00:00Z');
console.log(result); // e.g., "2 days, 3 hours, and 15 minutes ago"
```

## How It Works

The function calculates the time difference between the current time and the input date, then breaks it down into the largest possible units (years, months, etc.). It returns a sentence-style string composed of the most relevant time components.

📌 Note: A month is calculated as a fixed duration of 30 days for simplicity. This may slightly differ from calendar month lengths.
