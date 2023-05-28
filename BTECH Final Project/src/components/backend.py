# Import flask and datetime module for showing date and time
from flask import Flask,request,jsonify
from flask_cors import CORS


# Initializing flask app
app = Flask(__name__)
CORS(app)

# Route for seeing a data

# Route for sending data


@app.route('/data', methods = ['POST'])
def getresponse():
  data = request.json
  print(data)  
	# Returning an api for showing in reactjs
  return jsonify({'status':200,'message': "data receive successfully"})

@app.route('/file', methods = ['POST'])
def getfile():
  data = request.files['file']
  data.save(data.filename)
	# Returning an api for showing in reactjs
  return jsonify({'status':200,'message': "data receive successfully"})

@app.route('/')
def send_data_to_frontend():
  data =[{ "Serial":1 , "ID": 19, "Machine": "M2" },{ "Serial":2 , "ID": 20, "Machine": "M2" },{ "Serial":3 , "ID": 22, "Machine": "M2" }]       
  return jsonify(data)

	
# Running app
if __name__ == '__main__':
	app.run(debug=True)