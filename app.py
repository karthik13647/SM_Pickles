from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # We will add database logic here later!
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)