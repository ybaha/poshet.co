"use server";

const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

/** Sends a message to the studio's Telegram chat. Resolves to whether it was delivered. */
export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  const timestamp = new Date().toLocaleTimeString("tr-TR");

  if (process.env.NODE_ENV === "development") {
    console.log("Telegram message:", message, timestamp);

    return true;
  }

  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: 1912767327,
        text: `${message}\n${timestamp}`,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error sending message to Telegram:", error);

    return false;
  }
};
