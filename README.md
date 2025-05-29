# time-ago

A lightweight JavaScript utility that converts a given date or timestamp into a human-readable relative time format like `2 days, 3 hours, and 15 minutes`. Ideal for web apps, notifications, logs, or anywhere you want to display time differences naturally.

## Features

- Human-readable, component-style output
- Supports years, months, days, hours, minutes, and seconds
- Automatically handles pluralization (e.g., `1 hour` vs `2 hours`)
- Lightweight with no dependencies

## Installation

```bash
npm i @nidhi_talastha/time-ago
```

## Usage

```bash
import timeAgo from 'time-ago';

const diff = timeAgo('2024-12-01 10:00:00');
// "5 months, 2 days, and 3 hours"

const diff = timeAgo('2024-12-01 10:00:00', '2024-12-02 10:30:00');
// "1 day and 30 minutes"

```

## How It Works

The timeAgo function calculates the time difference between two timestamps a "from" and an optional "to" value. If the "to" value is not provided, the function defaults to the current time.

It then breaks this time difference down into the largest possible components (years, months, days, hours, minutes, seconds) and returns a human-readable, sentence-style string like:

"2 days, 3 hours, and 15 minutes ago"

"just now"

📌 Note: For simplicity, a month is treated as 30 days, which may slightly differ from actual calendar month durations.
