import { useState } from 'react'

function Bmi() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState(null)

  const calculate = () => {
    let h = Number(height) / 100
    let value = Number(weight) / (h * h)

    if (Number(weight) > 0 && Number(height) > 0) {
      setBmi(value.toFixed(2))
    } else {
      alert("Please enter valid weight and height")
    }
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #103567, #9d97b7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Segoe UI', sans-serif"
    }}>

      <div style={{
        border: "1px solid #0a216f",
        padding: "32px",
        width: "340px",
        backgroundColor: "#fbfbfb",
        borderRadius: "16px",
        boxShadow: "0 8px 25px rgba(79,70,229,0.12)"
      }}>

        <div style={{ marginBottom: "24px" }}>
          <h1 style={{
            color: "#4338ca",
            textAlign: "center",
            fontSize: "26px"
          }}>
            BMI Calculator
          </h1>

          <p style={{
            color: "#64748b",
            textAlign: "center",
            fontSize: "14px"
          }}>
            Check your Body Mass Index
          </p>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>


              <input
              type="number"
              placeholder="Enter height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{
                padding: "13px",
                backgroundColor: "#06194a",
                border: "1px solid #c7d2fe",
                borderRadius: "8px",
                color: "#f3ecec",
                outline: "none"
              }}
            />
            <input
              type="number"
              placeholder="Enter weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                padding: "13px",
                backgroundColor: "#132551",
                border: "1px solid #c7d2fe",
                borderRadius: "8px",
                color: "#ebfafe",
                outline: "none"
              }}
            />

          
          </div>
        </div>

        <div style={{
          backgroundColor: "#091335",
          border: "1px solid #04091f",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "center"
        }}>

          <button
            onClick={calculate}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#9d89b0",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              fontSize: "15px",
              cursor: "pointer"
            }}
          >
            Calculate BMI
          </button>

          <h2 style={{
            color: "#ca388b",
            marginTop: "18px"
          }}>
            BMI: {bmi !== null ? bmi : "--"}
          </h2>

        </div>

      </div>
    </div>
  )
}

export default Bmi