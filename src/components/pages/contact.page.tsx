import React from "react";

type Tribute ={
  id: string;
  name: string;
  tribute: string;
  created_at: string;
}

const Contact: React.FC = () => {
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

      // Dummy data to simulate a successful upload
      setTributes([...tributes]);

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

  
  return (
    <div className="page-container">
      <div className="tribute-title-container">
        <h1 className="title">In Memoriam</h1>
        <p>Please scroll to the bottom of the page to add your personal tribute. ❤️ </p>

      </div>
      <div>
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

export default Contact;