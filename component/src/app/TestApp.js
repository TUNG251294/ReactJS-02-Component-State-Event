import './App.css';
import TestFunctionComponent from '../component/TestFunctionComponent';
import TestClassComponent from '../component/TestClassComponent';

function TestApp() {
  return (
    <div>
    <TestFunctionComponent firstNumber = {1} secondNumber = {2}/>
    <TestClassComponent firstNumber = {3} secondNumber = {4.5}/>
    </div>
  );
}

export default TestApp;
