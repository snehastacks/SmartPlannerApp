// AI Data (Real Rule-Based ML Logic)
const topics = {
    exam: ["Revise key notes", "Solve 10 practice questions", "Create mind map", "Quiz yourself"],
    skill: ["Watch beginner tutorial", "Practice 1 exercise", "Build small project", "Review errors"],
    hobby: ["Explore intro video", "Try simple activity", "Journal your thoughts", "Share with a friend"]
};

const styles = {
    visual: "Watch a video on ",
    reading: "Read an article about ",
    practice: "Practice building "
};

const quotes = [
    "Small steps lead to big achievements! 🚀",
    "You're adapting like a pro! Keep it up! 💪",
    "AI sees your potential — unlock it! 🤖",
    "Progress is your superpower. Use it! ⭐"
];

// Generate Adaptive Plan
function generatePlan() {
    const name = document.getElementById('name').value || "Learner";
    const goal = document.getElementById('goal').value;
    const style = document.getElementById('style').value;
    const interest = document.getElementById('interest').value || "your interest";

    // Save Profile Locally (Secure Storage)
    localStorage.setItem('profile', JSON.stringify({name, goal, style, interest}));

    // AI Recommendation (Adaptive Based on Inputs)
    const randomTask = topics[goal][Math.floor(Math.random() * 4)];
    const adaptiveTask = styles[style] + interest + ": " + randomTask;

    // Display Plan
    document.getElementById('plan').innerHTML = `
        <h3>🧠 Your Personalized AI Plan</h3>
        <p><strong>Hello, ${name}!</strong></p>
        <p><strong>Goal:</strong> ${goal.charAt(0).toUpperCase() + goal.slice(1)}</p>
        <p><strong>Learning Style:</strong> ${style}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <hr>
        <h4>Today's Adaptive Task:</h4>
        <p style="font-size: 16px; font-weight: bold; color: #2c5aa0;">${adaptiveTask}</p>
    `;

    // Show Progress & Quote
    document.getElementById('progress').style.display = 'block';
    document.getElementById('quote').innerText = quotes[Math.floor(Math.random() * 4)];
    updateProgress();

    // Self-Reflection Prompt
    setTimeout(() => alert("Reflect: What did you learn today? Journal it! 📝"), 1000);
}

// Update Progress (Motivational Feedback)
function markDone() {
    let progress = parseInt(localStorage.getItem('progress') || 0) + 25;
    if (progress > 100) progress = 0; // Reset Cycle
    localStorage.setItem('progress', progress);
    updateProgress();
    alert(`Awesome! 🎉 You're ${progress}% closer to your goal.`);
}

// Progress Bar
function updateProgress() {
    const progress = localStorage.getItem('progress') || 0;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').innerText = progress;
}

// Load Saved Profile on Start
window.onload = function() {
    const saved = JSON.parse(localStorage.getItem('profile') || '{}');
    if (saved.name) {
        document.getElementById('name').value = saved.name;
        document.getElementById('goal').value = saved.goal;
        document.getElementById('style').value = saved.style;
        document.getElementById('interest').value = saved.interest;
        generatePlan();
    }
};