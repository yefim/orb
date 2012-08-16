import sys
import markdown

from jinja2 import Environment, FileSystemLoader

def build_template(env, template_name, **kwargs):
    print "Building %s..." % template_name
    template = env.get_template(template_name)
    with open(template_name, "w") as f:
        f.write(template.render(**kwargs))

def build_index(env):
    indexmd = open("./markdown/index.md")
    text = indexmd.read()
    html = markdown.markdown(text)
    build_template(env, "index.html",
        text=html
    )

def main():
    env = Environment(loader=FileSystemLoader(searchpath="./templates"))
    build_index(env)

if __name__ == '__main__':
    main()
