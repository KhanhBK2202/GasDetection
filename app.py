from multiprocessing.connection import Client
from flask import Flask, render_template, request

import random, datetime
from Adafruit_IO import Client


############################################################

AIO_FEED_ID = ["temperature", "humidity", "gas"]
AIO_USERNAME = "huytrinh"
AIO_KEY = "aio_BDRn08qX23nlcdSBeq27mDSnMs4E"

# AIO_USERNAME = "quan031102"
# AIO_KEY = ""
client = Client(AIO_USERNAME ,AIO_KEY)

# for i in range(15):
#     client.send_data('gas', random.randint(100,300))
#     client.send_data('temperature', random.randint(0, 50))
#     client.send_data('humidity', random.randint(0, 100))

############################################################

def getData(feed, day_display=None):
    if (day_display == None):
        last_data = client.receive(feed="temperature")
        day_display = last_data.created_at[:10]
    
    data_display = client.data(feed)
    
    len = 0 
    data = {
        "day": day_display,
        "days": [],
        "points": {"time": [], "value": []}
    }
    
    for d in reversed(data_display):
        data["days"].append(d.created_at[:10])
        if d.created_at[:10] == day_display:
            data["points"]["time"].append(d.created_at[11:16])
            data["points"]["value"].append(d.value)
            len += 1
    
    data["days"] = list(set(data["days"]))
    if len > 10:
        data["points"]["time"] = data["points"]["time"][-10:]
        data["points"]["value"] = data["points"]["value"][-10:]
    
    # data["points"]["time"].reverse()
    # data["points"]["value"].reverse()
    
    
    return data
    
############################################################

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/gas")
def gas():
    day = request.args.get("day")
    data = getData("gas", day)
        
    return render_template(
        "gas.html", 
        name = AIO_FEED_ID[2], 
        currentData = data["points"]["value"][-1], 
        days = data["days"],
        points = data["points"],
        curr_day = data["day"]
    )
    
@app.route("/humid")
def humid():
    day = request.args.get("day")
    data = getData("humidity", day)
        
    return render_template(
        "humid.html", 
        name = AIO_FEED_ID[1], 
        currentData = data["points"]["value"][-1], 
        days = data["days"],
        points = data["points"],
        curr_day = data["day"]
    )

@app.route("/temp")
def temp():
    day = request.args.get("day")
    data = getData("temperature", day)
        
    return render_template(
        "temp.html", 
        name = AIO_FEED_ID[0], 
        currentData = data["points"]["value"][-1], 
        days = data["days"],
        points = data["points"],
        curr_day = data["day"]
    )
    
