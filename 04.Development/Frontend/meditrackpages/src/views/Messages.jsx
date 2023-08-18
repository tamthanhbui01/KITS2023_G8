// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Row } from "antd";

import PageTitle from "../components/common/PageTitle";

import { Route, BrowserRouter as Router } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new ("b985966bbe3d82cec18d",
    {
      cluster: "ap2",
    })();

    const channel = pusher.subscribe("messages");
    const bindCallback = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
    channel.bind("inserted", bindCallback);

    return () => {
      channel.unbind("inserted", bindCallback);
      pusher.unsubscribe("messages");
    };
  }, []);

  console.log(messages);

  return (
    <div>
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="My Patients"
          subtitle="Threads"
          className="text-sm-left"
        />
      </Row>

      <div className="app">
        <div className="app__body">
          <Router>
            <Route path="/messages/:patientId"></Route>
            <Route path="/"></Route>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default Messages;
