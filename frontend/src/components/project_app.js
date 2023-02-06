import React from 'react'
import {useParams} from "react-router-dom";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.link}
            </td>
            <td>
                {project.users}
            </td>
        </tr>
    )
}

const ProjectList = ({ project }) => {
    console.log('project=', project)
    let { projectname } = useParams()
    console.log('useParams=', projectname, typeof(projectname))
    let project_filter = project.filter((project) => project.name.includes(projectname))
    console.log('project_filter=', project_filter)
    return (
        <table>
            <th>
               | Наименование проекта
            </th>
            <th>
               | Ссылкана проект
            </th>
            <th>
               | Пользователи проекта |
            </th>
            {project.map((project) => <ProjectItem project={project} />)}
        </table>
    )
}

export default ProjectList