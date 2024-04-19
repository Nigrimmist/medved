document.addEventListener('DOMContentLoaded', function() {
    var image = document.getElementById('draggingImage');
    var isDragging = false;

    image.addEventListener('mousedown', function(event) {
        isDragging = true;
        // Запоминаем начальные координаты курсора и изображения
        var startX = event.clientX - image.offsetLeft;
        var startY = event.clientY - image.offsetTop;

        document.addEventListener('mousemove', moveImage);
        document.addEventListener('mouseup', function() {
            isDragging = false;
            document.removeEventListener('mousemove', moveImage);
        });

        function moveImage(event) {
            if (isDragging) {
                // Перемещаем изображение в соответствии с перемещением курсора
                var newX = event.clientX - startX;
                var newY = event.clientY - startY;
                image.style.left = newX + 'px';
                image.style.top = newY + 'px';
            }
        }
    });
});
