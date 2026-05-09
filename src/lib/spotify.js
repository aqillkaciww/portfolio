const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

export const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",

    headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded"
    },

    body: "grant_type=client_credentials",
    });

    return response.json();
}
