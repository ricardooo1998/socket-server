import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}

export const onMessage = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: { from: string, body: string, date: Date}) => {
        console.log('message recived', payload);

        io.emit('new-message', payload);
    });
}