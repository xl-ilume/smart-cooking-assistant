import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // API 호출
    fetch('https://4000-xlilume-smartcookingass-pd8oli6s2h1.ws-us117.gitpod.io/api/hello', { credentials: "include" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // 서버에서 반환한 메시지 출력
      })
      .catch((error) => {
        console.error('Error fetching API:', error);
      });
  }, []);

  return <div>Hello from React!</div>;
};

export default App;
