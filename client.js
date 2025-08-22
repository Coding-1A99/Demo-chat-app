const socket = io();
const messages = document.getElementById('messages');
const input = document.getElementById('msg');
const button = document.getElementById('send');

button.addEventListener('click', () => {
    const msg = input.value;
    if (msg.trim()) {
        socket.emit('chatMessage', msg);
        input.value = '';
    }
});

socket.on('chatMessage', (msg) => {
    const div = document.createElement('div');
    div.textContent = msg;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
});
