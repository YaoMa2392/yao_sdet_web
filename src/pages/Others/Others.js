import React, {useState} from "react";
import TitleBar from "../../components/TitleBar/TitleBar";

function Documentation() {
    const [testResult, setTestResult] = useState(null);  // State to store the test result

    // This function is triggered when the "Run Test" button is clicked
    const handleRunTest = async () => {
        try {
            // Sending a POST request to the backend to trigger test execution
            const response = await fetch("http://localhost:5000/run-test", { method: "POST" });

            // If the response is OK, convert the response to JSON and set it to the state
            if (response.ok) {
                const result = await response.json();
                setTestResult(result);
            } else {
                // In case of a non-OK response, update the test result with the error message
                setTestResult({ error: "Failed to run test. Backend did not respond correctly." });
            }
        } catch (error) {
            // In case of a network or other error, update the test result with the error message
            setTestResult({ error: "Failed to run test due to network error." });
        }
    };

    return (
        <div>
            <TitleBar title="Documentation" />

            <div className="test-container">
                <h1>Regression Test</h1>
                <div className="code-container">
                    <h2>Test Code</h2>
                    <pre className="test-code">{`
          describe('My Test', () => {
            it('should do something', () => {
              cy.visit('https://example.com');
              cy.get('button').click();
            });
          });
        `}</pre>
                </div>
                <button className="run-button" onClick={handleRunTest}>Run Test</button>

                {testResult && (
                    <div className="result-container">
                        <h2>Test Result:</h2>
                        <pre className="result">{JSON.stringify(testResult, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}