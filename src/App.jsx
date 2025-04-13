import { useState } from 'react';
import './app.css';
import axios from 'axios';

function App() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [email, setEmail] = useState(''); // email 상태값 추가
  const [content, setContent] = useState(''); // content 상태값 추가

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://Hyson0807-env.eba-nnuh2vva.ap-northeast-2.elasticbeanstalk.com/submit', { // 8080 포트로 변경
        email,
        content,
      });
      alert(response.data.message);
    } catch (error) {
      alert('Failed to submit data123');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <p className="text-green-800 text-7xl font-bold mb-6">KIT</p>
        <p className="text-gray-700 text-2xl mb-4">
          Facing any challenges in Korea? 
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Experts and experienced expats will make a solution.
        </p>
      </div>

      <div className="space-y-4 w-full max-w-md">
        <button
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 text-left hover:bg-gray-100 flex justify-between items-center"
          onClick={() => handleButtonClick(1)}
        >
          I can speak English
          {selectedButton === 1 && (
            <span className="text-green-600 text-xl font-bold">✔</span>
          )}
        </button>
        <button
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 text-left hover:bg-gray-100 flex justify-between items-center"
          onClick={() => handleButtonClick(2)}
        >
          I can speak Vietnamese
          {selectedButton === 2 && (
            <span className="text-green-600 text-xl font-bold">✔</span>
          )}
        </button>
        <button
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 text-left hover:bg-gray-100 flex justify-between items-center"
          onClick={() => handleButtonClick(3)}
        >
          I just arrived – I need help!
          {selectedButton === 3 && (
            <span className="text-green-600 text-xl font-bold">✔</span>
          )}
        </button>
        <button
          className="w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-800 text-left hover:bg-gray-100 flex justify-between items-center"
          onClick={() => handleButtonClick(4)}
        >
          I've been here – I want to share!
          {selectedButton === 4 && (
            <span className="text-green-600 text-xl font-bold">✔</span>
          )}
        </button>
      </div>

      {/* 조건부 렌더링 섹션 */}
      {selectedButton === 1 && (
        <div className="mt-8 text-left w-full max-w-md">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-600 text-sm"
            rows="6"
            placeholder={`You might be asking about...
- How to get ARC card? (Alien Registration card)
- Can I get the SIM card without ARC?
- Finding part-time job without Korean nearby
- Where can I buy used furniture?`}
              value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      )}

      {selectedButton === 2 && (
        <div className="mt-8 text-left w-full max-w-md">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-600 text-sm"
            rows="6"
            placeholder={`You might be asking about...
- How to get ARC card? (Alien Registration card)
- Can I get the SIM card without ARC?
- Finding part-time job without Korean nearby
- Where can I buy used furniture?`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      )}
      {selectedButton === 3 && (
        <div className="mt-8 text-left w-full max-w-md">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-600 text-sm"
            rows="6"
            placeholder={`You might be asking about...
- House landlord didn't return my deposit 
- Finding part-time job without Korean
- Too bored.. I want to join some meetup!
- Can I cover my hospital bill?  Too expensive`}
            value={content}
            onChange={(e) => setContent(e.target.value)}  
          ></textarea>
        </div>
      )}
      {selectedButton === 4 && (
        <div className="mt-8 text-left w-full max-w-md">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-600 text-sm"
            rows="6"
            placeholder={`You might be asking about...
- How to get ARC card? (Alien Registration card)
- Can I get the SIM card without ARC?
- Finding part-time job without Korean nearby
- Where can I buy used furniture?`}
            value={content}
            onChange={(e) => setContent(e.target.value)}  
          ></textarea>
        </div>
      )}

      <div className="mt-8 w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <button className="w-full mt-4 py-3 px-4 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700"
          onClick={handleSubmit}>
          Send & Receive Answers
        </button>
      </div>

      <div className="mt-8 w-full max-w-md">
        <p className="text-green-800 text-lg font-bold mb-4">
          KiT makes REAL solution for you! <br />
          More Questions make more service
        </p>
        <div className="space-y-6">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium mb-2">
              <span className="font-bold text-green-600">Q:</span> I don't speak Korean well, so it's really hard to find a part-time job 😭 nearby Seoul university!
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-green-600">✔</span> Our Kit team personally went to the area around Seoul university, and checked out <span className="font-bold">3 part-time jobs</span> that are possible even if you don't speak Korean much. <br />
              And we sent the result directly to you by email.
            </p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
            <p className="text-gray-800 font-medium mb-2">
              <span className="font-bold text-green-600">Q:</span> I am an international student living in Seoul, and I haven't received my <span className="font-bold">Alien Registration Card (ARC)</span> yet. But I need to use my phone SIM card quickly, so I am worried...
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-green-600">✔</span> It is <span className="font-bold">possible to activate a SIM card without an alien registration card!</span> <br />
              Our KIT team found prepaid SIM card companies that can activate a SIM card without an ARC, with only a passport, and we have sent you the information about the companies directly by email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
