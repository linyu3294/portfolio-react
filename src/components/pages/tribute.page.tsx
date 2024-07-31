import React, { useEffect } from "react";
import MusicalNote from "../tribute-entry.component";


type Tribute ={
  id: string;
  name: string;
  tribute: string;
  created_at: string;
}

const convertToUserFriendlyTime = (time: string) => {
  const date = new Date(time);
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

const Tribute: React.FC = () => {
  const [tribute, setTribute] = React.useState<string>("");
  const [tributes, setTributes] = React.useState<Tribute[]>([]);
  const [name, setName] = React.useState<string>("");
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/kxf-lambda-tribute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          'x-api-key': `${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({
          "name": name,
          "tribute": tribute
        }),
      });

      setTributes([...tributes, {
        // This is a temporary id until the database returns the real id
        // This is to prevent a re-render of the entire list of tributes
        "id": "1", 
        "name": name,
        "tribute": tribute,
        "created_at": new Date().toISOString(),
      }]);

      if (response.ok) {
        console.log('Tribute uploaded');
        setName("");
        setTribute("");
      } else {
        console.error('Failed to upload tribute');
      }
    } catch (error) {
      console.error('Transaction Error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/kxf-lambda-tributes`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
            'x-api-key': `${import.meta.env.VITE_API_KEY}`,
          },
        });
  
        if (response.ok) {
          console.log('Tribute loaded from database');
          const rawTributes = await response.json()
          const sortedTributes = rawTributes.map((tribute: Tribute) => ({
            ...tribute,
            created_at_date: new Date(tribute.created_at),
          }))
          .sort((a: Tribute, b:Tribute) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());;
          setTributes(sortedTributes);
        } else {
          console.error('Failed to load tributes from database');
        }
      } catch (error) {
        console.error('Transaction Error:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  
  return (
    <div className="page-container">
      <div className="tribute-title-container">
        <h1 className="title">In Memoriam</h1>
        <p>Please scroll to the bottom of the page to add your personal tribute. ❤️ </p>

      </div>
      <div>
       {tributes.map((tribute) => (

        <div key={tribute.id} className="tribute-container">
          <br/>
          <MusicalNote 
            id={tribute.id}
            name={tribute.name}
            tribute={tribute.tribute}
            created_at={convertToUserFriendlyTime(tribute.created_at)}
          />
          <br/>
          <br/>
        </div>
       ))}
      </div>
      <form onSubmit={handleSubmit}>
        <br/>
        <br/>
        <br/>
        <br/>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          value={tribute}
          placeholder="Type your message here..."
          onChange={(e) => setTribute(e.target.value)}
          rows={20}
          required
        />
        <button className="upload-tribute-button" type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Tribute;