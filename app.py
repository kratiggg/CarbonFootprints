from flask import Flask, request, jsonify

app = Flask(_name_)

def ai_recommendation(total_emissions):
    if total_emissions < 5000:
        return "Maintain current strategies and monitor closely. Implement energy efficiency measures and optimize processes."
    elif total_emissions < 10000:
        return "Consider optimizing your processes to reduce emissions further."
    else:
        return "High carbon footprint detected! It's recommended to significantly improve efficiency and explore sustainable alternatives."

@app.route('/get-recommendation', methods=['POST'])
def get_recommendation():
    data = request.json
    total_emissions = data.get('totalEmissions', 0)
    recommendation = ai_recommendation(total_emissions)
    return jsonify({"recommendation": recommendation})

if _name_ == '_main_':
    app.run(debug=True)