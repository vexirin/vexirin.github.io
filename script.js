function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
function updateProgressBar() {
    const startDate = new Date('2024-08-25');
    const endDate = new Date('2024-12-26');
    const now = new Date();
    document.getElementById('current-date').textContent = formatDate(now);
    document.getElementById('target-date').textContent = formatDate(endDate);
    if (now < startDate) {
        updateProgressUI(0);
        return;
    } else if (now > endDate) {
        updateProgressUI(100);
        return;
    }
    const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const daysPassed = (now - startDate) / (1000 * 60 * 60 * 24);
    const progress = (daysPassed / totalDays) * 100;
    updateProgressUI(progress);
}
function updateProgressUI(progress) {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    progressBar.style.width = progress + '%';
    progressBar.textContent = Math.floor(progress) + '%';
    progressText.textContent = Math.floor(progress) + '% done with long distance FOREVER';
}
updateProgressBar();