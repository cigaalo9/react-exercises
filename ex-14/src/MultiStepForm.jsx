import { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREV_STEP":
      return { ...state, step: state.step - 1 };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, formData } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const next = () => dispatch({ type: "NEXT_STEP" });
  const prev = () => dispatch({ type: "PREV_STEP" });
  const reset = () => dispatch({ type: "RESET_FORM" });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Step {step}</h2>

      {step === 1 && (
        <>
          <h3>Profile</h3>
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={next}>Next</button>
        </>
      )}

      {step === 2 && (
        <>
          <h3>Contact</h3>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <br />
          <button onClick={prev}>Back</button>
          <button onClick={next} style={{ marginLeft: "10px" }}>
            Next
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h3>Review</h3>
          <p>
            <strong>First Name:</strong> {formData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>

          <button onClick={prev}>Edit</button>
          <button onClick={reset} style={{ marginLeft: "10px" }}>
            Confirm & Reset
          </button>
        </>
      )}
    </div>
  );
}
