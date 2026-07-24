from pathlib import Path
from flask import Flask, render_template




ROOT = Path(__file__).resolve().parent.parent
app = Flask(__name__,
            root_path=str(ROOT),
            template_folder=".",
            static_folder=".",
            static_url_path="/static",
            )





@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello")
def hello():
   return "<p>Hello, World!</p>"


@app.route("/post_task", methods=["GET", "POST"])
def post_task():
    if request.method == 'POST':
        return "<script></script>"







if __name__ == "__main__":
    app.run(host="100.117.48.119", port=5000)
    #print("root_path:", app.root_path)
    #print("static_folder:", app.static_folder)
    #print("static_url_path:", app.static_url_path)
    #print(app.url_map)





