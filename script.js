document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 300;
    canvas.height = 600;

    // Пример: Залить холст синим цветом
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});
