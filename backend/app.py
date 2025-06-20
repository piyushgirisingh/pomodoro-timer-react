from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/test", methods=["GET"])
def test():
    return jsonify({"message": "Flask is connected!"})


if __name__ == "__main__":
    app.run(debug=True)
