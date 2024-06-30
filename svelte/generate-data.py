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
            images_r = ["/images/"+os.path.relpath(img, root_dir).replace("\\", "/") for img in images]
            project = {
                "title": project_name,
                "description": f"This is the project named {project_name}",
                "images": images_r,
                "categories": [],  # Leave categories empty
                "location": "",  # Leave location empty
                "other": [{}]  # Leave other as [{}]
            }
            projects.append(project)

    return projects


if __name__ == "__main__":
    root_directory = "./static/images"  # Change this to your images directory
    projects_list = generate_ts_list(root_directory)

    # Write to TypeScript file
    with open("./src/lib/projects.ts", "w") as ts_file:
        ts_file.write("import type { Project } from '$lib/types';\n\nexport const projectData: Project[] ="+str(projects_list))

    print("TypeScript file generated successfully: /src/lib/projects.ts")
