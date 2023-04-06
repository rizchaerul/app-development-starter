function getEnvirontmentVariables() {
    return {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
        webUrl: process.env.NEXT_PUBLIC_WEB_URL,
    };
}
