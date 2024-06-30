import os
import json

def get_files_from_directory(directory):
    """ Helper function to list all files in a directory. """
    files = []
    for root, _, filenames in os.walk(directory):
        for filename in filenames:
            if filename.lower().endswith(('jpg', 'jpeg', 'png', 'gif', 'bmp')):
                files.append(os.path.join(root, filename))
    return files

def generate_ts_list(root_dir):
    projects = []

    # Traverse the projects folder
    projects_dir = os.path.join(root_dir, 'projects')
    if not os.path.exists(projects_dir):
        raise FileNotFoundError(f"The projects directory {projects_dir} does not exist.")

    for project_name in os.listdir(projects_dir):
        project_path = os.path.join(projects_dir, project_name)
        if os.path.isdir(project_path):
            images = get_files_from_directory(project_path)
            project = {
                "title": project_name,
                "description": f"This is the project named {project_name}",
                "images": [os.path.relpath(img, root_dir).replace("\\", "/") for img in images],
                "categories": [],  # Leave categories empty
                "location": "",  # Leave location empty
                "other": [{}]  # Leave other as [{}]
            }
            projects.append(project)

    return projects

def generate_ts_code(projects):
    """ Function to generate TypeScript code from the projects list. """
    ts_code = "export interface Project {\n"
    ts_code += "    title: string;\n"
    ts_code += "    description: string;\n"
    ts_code += "    images: (File | string)[];\n"
    ts_code += "    categories: ProjectCategory[];\n"
    ts_code += "    location: string;\n"
    ts_code += "    other: [{}];\n"
    ts_code += "}\n\n"

    ts_code += "const projects: Project[] = [\n"
    for project in projects:
        ts_code += f"    {{\n"
        ts_code += f'        title: "{project["title"]}",\n'
        ts_code += f'        description: "{project["description"]}",\n'
        ts_code += f'        images: {str(project["images"])}',  # Convert list of images to JSON array
        ts_code += f',\n'
        ts_code += f'        categories: {json.dumps(project["categories"])}',  # Leave categories empty
        ts_code += f',\n'
        ts_code += f'        location: "{project["location"]}",\n'
        ts_code += f'        other: {json.dumps(project["other"])}\n'
        ts_code += f'    }},\n'
    ts_code += "];\n\n"
    ts_code += "export default projects;\n"

    return ts_code

if __name__ == "__main__":
    root_directory = "./static/images"  # Change this to your images directory
    projects_list = generate_ts_list(root_directory)
#     ts_code = generate_ts_code(projects_list)

    # Write to TypeScript file
    with open("./src/lib/projects.ts", "w") as ts_file:
        ts_file.write("import type { Project } from '$lib/types';\n\nexport const projectData: Project[] ="+str(projects_list))

    print("TypeScript file generated successfully: /src/lib/projects.ts")
