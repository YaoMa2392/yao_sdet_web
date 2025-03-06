import React, {useState} from "react";
import "./Documentation.css";
import TitleBar from "../../../components/TitleBar/TitleBar"; // 导入CSS文件

function Documentation() {
    const [testResult, setTestResult] = useState(null);

    const handleRunTest = async () => {
        try {
            // 发送请求给后端来执行Cypress测试
            const response = await fetch("/run-test", {method: "POST"});
            const result = await response.json();
            setTestResult(result);
        } catch (error) {
            setTestResult({error: "Failed to run test."});
        }
    };


    return (
        <div>
            <TitleBar title="Documentation"/>

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

export default Documentation;
