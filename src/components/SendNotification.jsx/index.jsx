import { useState } from "react";
import Wrapper, { Title, Input, TextArea, Button } from "./style";

const SendNotification = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendNotification = async () => {
        if (!title.trim() || !body.trim()) {
            alert("Title and body are required!");
            return;
        }

        setLoading(true);
        try {
            console.log("Sending notification with title:", title, "and body:", body);

            const response = await fetch("http://localhost:5000/api/send-notification", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: title.trim(), body: body.trim() }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Notification sent successfully!");
                setTitle("");
                setBody("");
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error("Error sending notification:", error);
            alert("Failed to send notification!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Wrapper>
            <Title>Send Notification</Title>
            <Input
                type="text"
                placeholder="Enter Notification Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
            />
            <TextArea
                placeholder="Enter Notification Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                disabled={loading}
            />
            <Button onClick={handleSendNotification} disabled={loading}>
                {loading ? "Sending..." : "Send"}
            </Button>
        </Wrapper>
    );
};

export default SendNotification;
