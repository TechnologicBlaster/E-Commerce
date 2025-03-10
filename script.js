document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    chatToggle.addEventListener('click', function() {
        chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
    });

    sendBtn.addEventListener('click', function() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });
});