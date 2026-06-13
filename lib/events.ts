export type CoffeeEvent = {
  title: string;
  day: number;
  dayName: string;
  time: string;
  emoji: string;
  description: string;
  longDescription: string;
};

export const events: CoffeeEvent[] = [
  {
    title: "Open Mic Night",
    day: 5,
    dayName: "Friday",
    time: "7:00 PM – 10:00 PM",
    emoji: "🎤",
    description: "Local musicians, poets, and storytellers take the stage.",
    longDescription:
      "Every Friday evening, we clear the tables and open the floor to local talent. Whether you're a seasoned performer or a first-timer working up the nerve — the mic is yours. Expect acoustic sets, spoken word, the occasional comedian, and a room full of people who actually listen. No bookings, no tickets. Just show up.",
  },
  {
    title: "Coffee Tasting Session",
    day: 6,
    dayName: "Saturday",
    time: "10:00 AM – 12:00 PM",
    emoji: "☕",
    description: "Discover the origins, flavours, and craft behind specialty coffee.",
    longDescription:
      "Led by Maya, our head of coffee and certified Q-grader, this two-hour tasting session explores three single-origin coffees side by side. You'll learn how soil, altitude, and processing method shape what's in your cup — and leave with a permanently changed relationship with your morning brew. Seats are limited to 12. Reserve your spot at the counter.",
  },
];

export function getNextOccurrences(dayOfWeek: number, count = 3): Date[] {
  const now = new Date();
  const result: Date[] = [];
  let daysAhead = 1;

  while (result.length < count) {
    const candidate = new Date(now);
    candidate.setDate(now.getDate() + daysAhead);
    candidate.setHours(0, 0, 0, 0);
    if (candidate.getDay() === dayOfWeek) {
      result.push(candidate);
    }
    daysAhead++;
  }

  return result;
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}
