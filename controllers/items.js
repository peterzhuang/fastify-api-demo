import { v4 as uuidv4 } from 'uuid';
import data from '../Items';

let items = data;

export const getItems = (req, reply) => {
    reply.send(items);
}

export const getItem = (req, reply) => {
    const { id } = req.params;
    
    const item = items.find(item => item.id === id);

    reply.send(item);
}

export const addItem = (req, reply) => {
    const { name } = req.body;
    
    const item = {
        id: uuidv4(),
        name
    }
    
    items = [...items, item];

    reply.code(201).send(item);
}

export const deleteItem = (req, reply) => {
    const { id } = req.params;
    
    items = items.filter(item => item.id !== id);

    reply.send({ message: `Item ${id} has been removed` });
}

export const updateItem = (req, reply) => {
    const { id } = req.params;
    const { name } = req.body;

    items = items.map(item => (item.id === id ? { id, name } : item))
  
    const item = items.find(item => item.id === id)
  
    reply.send(item)
}