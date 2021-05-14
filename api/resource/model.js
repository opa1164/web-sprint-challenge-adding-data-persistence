// build your `Resource` model here
const db = require('../../data/dbConfig.js');

async function getAllResources() {
    const resources = await db('resources');

    return resources;
} 

async function createResource(resource) {
    return await db('resources').insert(resource);
}

module.exports = {
    getAllResources,
    createResource,
} 
