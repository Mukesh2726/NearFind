document.getElementById("reminderForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const task = document.getElementById("task").value;
    const time = document.getElementById("time").value;

    const response = await fetch("/add-reminder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, time })
    });

    const data = await response.json();
    alert(data.message);
});