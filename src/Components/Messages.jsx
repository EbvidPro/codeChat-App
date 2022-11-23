import React from "react";
import Message from "./Message";

const styles = {
  messages: "bg-gray-200 p-4 h-[calc(100%-100px)] overflow-y-scroll",
};

export default function Messages() {
  return (
    <div className={styles.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
