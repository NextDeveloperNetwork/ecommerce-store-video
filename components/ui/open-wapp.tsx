import { useState } from 'react';

interface MessageHook {
  addItemToWapp: (item: any) => void; // Adjust the type of 'item' based on your needs
}

const useMessageW = (): MessageHook => {
  const [messages, setMessages] = useState<string[]>([]);

  const addItemToWapp = (item: any) => {
    // Replace the hardcoded link with the current page's URL
    const articleLink = window.location.href;

    // Construct the Messenger conversation link with article details
    const messengerConversationLink = `https://wa.me/+355698822191/?ref=INTENCION&messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0&text=Porosit%20kete%20artikull:%0AArt:%20${item.name}%0APershkrim:%20${item.description}%0ANgjyra:%20${item.color.name}%0AModeli:%20${item.size.name}%0AArticle%20link:%20${articleLink}`;

    // Open the Messenger conversation link
    window.open(messengerConversationLink, '_blank');

    // Log the message to the console
    const message = `Sending article details to Messenger:\nName: ${item.name}\nDescription: ${item.description}\nColor: ${item.color.name}\nSize: ${item.size.name}\nArticle link: ${articleLink}`;
    setMessages((prevMessages) => [...prevMessages, message]);
    console.log(message);
  };

  return { addItemToWapp };
};

export default useMessageW;