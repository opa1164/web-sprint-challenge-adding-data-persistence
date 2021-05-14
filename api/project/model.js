// build your `Project` model here
const db = require('../../data/dbConfig.js');

const mutIntToBool = (num) => {
    if (num == 0)
        return false;
    return true;
};

async function getAllProjects() {
    const projects = await db('projects');
    const mutDta = projects.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.project_completed);
    });
    return projects;

}


async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    const newProj = await db('projects as p').where('p.project_id', project_id);
    const mutDta = newProj.map( (proj) => {
        proj.project_completed = mutIntToBool(proj.project_completed);
    });

    return newProj[0];
}

module.exports = {
    getAllProjects,
    createProject,
};