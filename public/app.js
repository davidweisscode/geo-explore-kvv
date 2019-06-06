console.log("[C] Client script loaded!");

async function explore() {
    const response = await fetch("/explore");
    console.log(response);
    const data = await response.text();
    console.log("[C] Response from server is", data);
}
